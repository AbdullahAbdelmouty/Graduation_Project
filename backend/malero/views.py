from django.shortcuts import render
import os
from PIL import Image
from django.http import HttpResponse
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
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
# forms
from .forms import UploadForm, PdfUploadForm
# machine learning model
from malero.ML.model import ML_Model
# views
def index(requset):
    return HttpResponse("<h1>Home</h>")
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
            ml_obj = ML_Model()
            # convert pdf to binary
            uploaded_pdf = 'media/malero/uploads/pdfs/'
            out_binaries = 'media/binaries/'
            file_name = str(upload_instance.pdf).split("/")[-1]
            ml_obj.convert_to_binary(uploaded_pdf,file_name,out_binaries)
            # image_url = upload_instance.image.url if upload_instance.image else None
            return Response({"url": upload_instance.pdf})
        else:
            return Response({"status": "failed", "errors": form.errors})
    else:
        return Response({"status": "failed"})    
# Sign up
@api_view(['POST'])
def sign_up(requset):
    newCustomer = Customer.objects.create(requset.data)
    if newCustomer:
        serializer = CustomersSerializer(newCustomer)
        return Response(serializer.data)
    else:
        return Response({"status": "failed"})

# Sign in
@api_view(['POST'])
def sign_in(request):
    return Response({"status": "ok"})

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

# add new order
@api_view(['POST'])
def add_order(request):
    return Response({"status": "ok"})

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
# get all uploads for specific customer
@api_view(['GET'])
def get_all_uploads_for_customer(request, userName):
    getAllUploads = Upload.objects.filter(user=userName)
    serializer = UploadsSerializer(getAllUploads, many=True)
    return Response(serializer.data)


