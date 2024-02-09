from django.shortcuts import render
import os
from PIL import Image
import tensorflow as tf
from django.http import HttpResponse
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.decorators import parser_classes
# import models
from .models import Customers as Customer
from .models import Packages as Package
from .models import Uploads as Upload
from .models import Cards as Card
from .models import Coupons as Coupon
from .models import Orders as Order
# import serializers
from .serializers import CustomersSerializer
from .serializers import PackagesSerializer
from .serializers import UploadsSerializer
from .serializers import CardsSerializer
from .serializers import CouponsSerializer
from .serializers import OrdersSerializer
from .serializers import SignUpSerializer
from .serializers import LoginSerializer
# forms
from .forms import UploadForm, PdfUploadForm
# machine learning model
from malero.ML.model import ML_Model
import datetime
import bcrypt
from rest_framework.parsers import BaseParser
from django.views.decorators.csrf import csrf_exempt
# views
def index(request):
    return HttpResponse("<h1>Home</h>")

class PlainTextParser(BaseParser):
    """
    Plain text parser.
    """
    media_type = 'text/plain'
    def parse(self, stream, media_type=None, parser_context=None):
        """
        Simply return a string representing the body of the request.
        """
        return stream.read()

# test for mcu ,I will use it to test the connection between the backend and the mcu as plain text
@api_view(['POST'])
@csrf_exempt
@parser_classes([PlainTextParser])
def test(request):
    try:
        print(request.data)
        return Response({"status": "ok"})
    except Exception as e:
        return Response({"status": "failed", "errors": str(e)})
# upload image
@api_view(['POST'])
def upload_image(request):
    if request.method == 'POST':
        form = UploadForm(request.POST, request.FILES)
        if form.is_valid():
            # Save the form data to the model
            upload_instance = form.save(commit=False)
            # Save the instance with the updated user field
            upload_instance.save()
            # Get the URL for the uploaded image
            print(upload_instance.image)
            # image_url = upload_instance.image.url if upload_instance.image else None
            return Response({"url": upload_instance.image})
        else:
            return Response({"status": "failed", "errors": form.errors})
    else:
        return Response({"status": "failed"})

# upload pdf
@api_view(['POST'])
def upload_pdf(request):
    user = "b"
    # get the user
    user_obj = Customer.objects.get(userName=user)
    print(user_obj)
    # start time for the user package
    startTimeForPackage = user_obj.startTimeForPackage
    # end time for the user package
    endTimeForPackage = user_obj.endTimeForPackage
    # get the number of uploads for the user
    numberOfuploads = user_obj.numberOfuploads
    # get the max of uploads for the user
    maxOfuploads = user_obj.maxOfuploads
    # get available uploads for the user
    availableUploads = user_obj.availableUploads
    package_id = user_obj.package
    # check if the user can upload or not
    if  availableUploads > 0:
        # upload the pdf
        if request.method == 'POST':
            form = PdfUploadForm(request.POST, request.FILES)
            if form.is_valid():
                # Save the form data to the model
                upload_instance = form.save(commit=False)
                # Save the instance with the updated user field
                upload_instance.save()
                # Get the URL for the uploaded image
                print(upload_instance.pdf)
                print(str(upload_instance.pdf).split("/")[-1])
                model_path = 'media/model_file/best_weights.h5'
                ml_obj = ML_Model()
                # convert pdf to binary
                uploaded_pdf = 'media/malero/uploads/pdfs/'
                out_binaries = 'media/binaries/'
                file_name = str(upload_instance.pdf).split("/")[-1]
                ml_obj.convert_to_binary(uploaded_pdf,file_name,out_binaries)
                # convert binary to png
                out_png = 'media/pngs/'
                fixed_dimensions = (128, 128)
                file_name_with_blus_bin = file_name + '.bin'
                print(file_name_with_blus_bin,"file_name_with_blus_bin")
                ml_obj.convert_binaries_to_images(out_binaries,file_name_with_blus_bin,out_png,fixed_dimensions)
                # pass png to model
                file_name_with_blus_png = file_name + '.png'
                image_path = 'media/pngs/' + file_name_with_blus_png
                result = ml_obj.predict(image_path,model_path)
                # 
                print(result,"result")    
                # newUpload 
                bengin_image_path = 'media/bengin_images/'
                malicious_image_path = 'media/malignant_images/'
                pdf_path = 'media/malero/uploads/pdfs/' + file_name
                isBenign = False
                if result <0.5:
                    image_path = bengin_image_path
                    isBenign = True
                if result >=0.5:
                    image_path = malicious_image_path
                newUpload = Upload.objects.create(image=image_path, pdf=pdf_path, isBenign=isBenign)
                # if the user can upload then increase the number of uploads for the user
                user_obj.numberOfuploads = user_obj.numberOfuploads + 1
                # reduce the number of uploads for the user
                user_obj.availableUploads = user_obj.maxOfuploads - user_obj.numberOfuploads
                user_obj.save()
                print(user_obj.numberOfuploads,"user_obj.numberOfuploads")
                print(user_obj.maxOfuploads,"user_obj.maxOfuploads")
                return Response({ "result": result})
            else:
                return Response({"status": "failed", "errors": form.errors})
        else:
            return Response({"status": "failed"})   
    else:
        return Response({"status": "failed", "errors": "you can't upload any more"}) 
# Sign up
@api_view(['POST'])
def sign_up(request):
    try:
        # destrucring the request data
        fullName = request.data['fullName']
        userName = request.data['userName']
        email = request.data['email']
        password = request.data['password']
        password2 = request.data['password2']
        package_id = "free"
        maxOfuploads = 3
        numberOfuploads = 0
        print(request.data)
        # validate the email
        if Customer.objects.filter(email=email).exists():
            return Response({"status": "failed", "errors": "email already exist"})
        # validate the username
        if Customer.objects.filter(userName=userName).exists():
            return Response({"status": "failed", "errors": "username already exist"})
        # validate the password
        if password != password2:
            return Response({"status": "failed", "errors": "passwords do not match"})
        # hash the password
        hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
        password = hashed_password
        print(password)
        # create new customer
        newCustomer = Customer.objects.create(fullName=fullName,userName=userName, email=email, password=password, package_id=package_id, maxOfuploads=maxOfuploads, numberOfuploads=numberOfuploads)
        # newCustomer = Customer.objects.create(**request.data)
        serializer = SignUpSerializer(newCustomer)
        return Response(serializer.data)
    except:
        return Response({"status": "failed", "errors": "something went wrong"})

# Sign in
@api_view(['POST'])
def sign_in(request):
    try:
        userName = request.data['userName']
        password = request.data['password'].encode('utf-8') # Encode the password to bytes
        # get the user from the database
        user_obj = Customer.objects.get(userName=userName)
        hashPass = user_obj.password[1:].replace("'", "")
        if bcrypt.checkpw(password, hashPass.encode('utf-8')):
            return Response({"status": "ok", "user": userName})
    except Customer.DoesNotExist:
        return Response({"status": "failed", "errors": "User does not exist"})
    except Exception as e:
        return Response({"status": "failed", "errors": str(e)})

# add new order
@api_view(['POST'])
def add_order(request):
    try:
        user_id = "b"
        # get the user
        user_obj = Customer.objects.get(userName=user_id)
        print(user_obj)
        # get the card
        numberOnCard = request.data['card_id']
        print(numberOnCard,"card_id")
        # do numberOnCard string 
        card = Card.objects.get(cardNumber=numberOnCard)
        print(card,"card")
        balance = card.value
        expiryDate = card.expiryDate
        current_year = datetime.datetime.now().year
        # last two digits of the year
        last_two_digits_year = int(str(current_year)[2:])
        current_month = datetime.datetime.now().month
        expiryMonth = 0
        expiryYear = 0
        if len(str(expiryDate)) == 3:
            expiryMonth = int(str(expiryDate)[0])
            expiryYear = int(str(expiryDate)[1:])
        if len(str(expiryDate)) == 4:
            expiryMonth = int(str(expiryDate)[:2])
            expiryYear = int(str(expiryDate)[2:]) 
        # check if the card is expired or not
        if expiryYear < last_two_digits_year:
            return Response({"status": "failed", "errors": "card is expired"})
        if expiryYear == last_two_digits_year:
            if expiryMonth < current_month:
                return Response({"status": "failed", "errors": "card is expired"})
        if expiryYear > last_two_digits_year:
            print("card is not expired")  
        # destrucring the request data
        fullName = request.data['fullName']
        print(fullName,"fullName")
        phoneNumber = request.data['phoneNumber']
        print(phoneNumber,"phoneNumber")
        country = request.data['country']
        print(country,"country")
        # coupon_id = request.data['coupon']
        period = request.data['period']
        print(period,"period")
        email = request.data['email']
        print(email,"email")
        package_id = request.data['package_id']
        print(package_id,"package_id")
        # get the package
        package = Package.objects.get(packageName=package_id)
        print(package)
        # get the coupon
        # coupon = Coupon.objects.get(couponCode=coupon_id)
        # print(coupon)
        # get the price of the package
        pricePerMonth = package.pricePmonth
        print(pricePerMonth)
        pricePerYear = package.pricePyear
        print(pricePerYear)
        # calculate the cost
        cost = 0
        if period == "monthly":
            cost = pricePerMonth
        if period == "yearly":
            cost = pricePerYear
        # check balance
        print(isinstance(balance, int), "balance")
        print(isinstance(cost, int), "cost")
        if balance < cost:
            return Response({"status": "failed", "errors": "insufficient balance"})
        # create new order
        newOrder = Order.objects.create(fullName=fullName,phoneNumber=phoneNumber, email=email, country=country, user_id=user_id, package_id=package_id,card_id=numberOnCard, period=period, cost=cost)    
        # reduce the balance
        card.value = card.value - cost
        card.save()
        # change start time of user package
        user_obj.startTimeForPackage = datetime.datetime.now()
        # change expiry time of user package
        if period == "monthly":
            user_obj.maxOfuploads = user_obj.availableUploads + package.numberOfuploadsPerMonth
            user_obj.availableUploads = user_obj.maxOfuploads
            user_obj.numberOfuploads = 0
            user_obj.endTimeForPackage = datetime.datetime.now() + datetime.timedelta(days=30)
        if period == "yearly":
            user_obj.maxOfuploads = user_obj.availableUploads + package.numberOfuploadsPerYear
            user_obj.availableUploads = user_obj.maxOfuploads
            user_obj.numberOfuploads = 0
            user_obj.endTimeForPackage = datetime.datetime.now() + datetime.timedelta(days=365)
        user_obj.package = package_id    
        user_obj.save()
        # return the response
        return Response({"status": "ok"})
    except Exception as e:
        return Response({"status": "failed", "errors": str(e)})            

# get order
@api_view(['GET'])
def get_order(request, id):
    return Response({"status": "ok", "id": id})

# update order
@api_view(['PATCH'])
def update_order(request, id):
    return Response({"status": "ok", "id": id})

# delete order
@api_view(['DELETE'])
def delete_order(request, id):
    return Response({"status": "ok", "id": id})

# get all orders
@api_view(['GET'])
def get_all_orders(request):
    return Response({"status": "ok"})

# get order for specific customer
@api_view(['GET'])
def get_order_for_customer(request, userName):
    getCustomerOrder = Order.objects.filter(user=userName)
    serializer = OrdersSerializer(getCustomerOrder, many=True)
    return Response(serializer.data)

# get customer
@api_view(['GET'])
def get_customer(requrest, id):
    return Response({"status": "ok", "id": id})

# update customer
@api_view(['PATCH'])
def update_customer(request, id):
    return Response({"status": "ok", "id": id})

# delete customer
@api_view(['DELETE'])
def delete_customer(request, id):
    return Response({"status": "ok", "id": id})

# get all customers
@api_view(['GET'])
def get_all_customers(request):
    getAllCustomers = Customer.objects.all()
    serializer = CustomersSerializer(getAllCustomers, many=True)
    return Response(serializer.data)

# add new package
@api_view(['POST'])
def add_package(request):
    print(request.data)
    try:
        newPackage = Package.objects.create(**request.data)
        serializer = PackagesSerializer(newPackage)
        return Response(serializer.data)
    except:
        return Response({"status": "failed"})
    

# get package
@api_view(['GET'])
def get_package(request, id):
    return Response({"status": "ok", "id": id})

# update package
@api_view(['PATCH'])
def update_package(request, id):
    return Response({"status": "ok", "id": id})

# delete package
@api_view(['DELETE'])
def delete_package(request, id):
    return Response({"status": "ok", "id": id})

# get all packages
@api_view(['GET'])
def get_all_packages(request):
    getAllPackages = Package.objects.all()
    serializer = PackagesSerializer(getAllPackages, many=True)
    return Response(serializer.data)

# add new upload
@api_view(['POST'])
def add_upload(request):
    return Response({"status": "ok"})

# get upload
@api_view(['GET'])
def get_upload(request, id):
    return Response({"status": "ok", "id": id})

# update upload
@api_view(['PATCH'])
def update_upload(request, id):
    return Response({"status": "ok", "id": id})

# delete upload
@api_view(['DELETE'])
def delete_upload(request, id):
    return Response({"status": "ok", "id": id})

# get all uploads
@api_view(['GET'])
def get_all_uploads(request):
    return Response({"status": "ok"})

# add new card
@api_view(['POST'])
def add_card(request):
    return Response({"status": "ok"})

# get card
@api_view(['GET'])
def get_card(request, id):
    return Response({"status": "ok", "id": id})

# update card
@api_view(['PATCH'])
def update_card(request, id):
    return Response({"status": "ok", "id": id})

# delete card
@api_view(['DELETE'])
def delete_card(request, id):
    return Response({"status": "ok", "id": id})

# get all cards
@api_view(['GET'])
def get_all_cards(request):
    return Response({"status": "ok"})

# add new coupon
@api_view(['POST'])
def add_coupon(request):
    return Response({"status": "ok"})

# get coupon
@api_view(['GET'])
def get_coupon(request, id):
    return Response({"status": "ok", "id": id})

# update coupon
@api_view(['PATCH'])
def update_coupon(request, id):
    return Response({"status": "ok", "id": id})

# delete coupon
@api_view(['DELETE'])
def delete_coupon(request, id):
    return Response({"status": "ok", "id": id})

# get all coupons
@api_view(['GET'])
def get_all_coupons(request):
    return Response({"status": "ok"})

# get all uploads for specific customer
@api_view(['GET'])
def get_all_uploads_for_customer(request, userName):
    getAllUploads = Upload.objects.filter(user=userName)
    serializer = UploadsSerializer(getAllUploads, many=True)
    return Response(serializer.data)