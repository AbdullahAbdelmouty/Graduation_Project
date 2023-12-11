from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
# Create your views here.

def index(requset):
    return HttpResponse("<h1>Home</h>")

# add new customer
@api_view(['POST'])
def add_customer(requset):
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
    return Response({"status": "ok"})

# add new package
@api_view(['POST'])
def add_package(request):
    return Response({"status": "ok"})

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
    return Response({"status": "ok"})

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

# get all uploads for specific customer
@api_view(['GET'])
def get_all_uploads_for_customer(request, id):
    return Response({"status": "ok", "id": id})


