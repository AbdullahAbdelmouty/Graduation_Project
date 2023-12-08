from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
# Create your views here.

def index(requset):
    return HttpResponse("<h1>Home</h>")

# add new user
@api_view(['POST'])
def add_user(requset):
    return Response({"status": "ok"})

# get user
@api_view(['GET'])
def get_user(requrest, id):
    return Response({"status": "ok", "id": id})

# update user
@api_view(['PATCH'])
def update_user(request, id):
    return Response({"status": "ok", "id": id})

# delete user
@api_view(['DELETE'])
def delete_user(request, id):
    return Response({"status": "ok", "id": id})

# get all users
@api_view(['GET'])
def get_all_users(request):
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

# add new operation
@api_view(['POST'])
def add_operation(request):
    return Response({"status": "ok"})

# get operation
@api_view(['GET'])
def get_operation(request, id):
    return Response({"status": "ok", "id": id})

# update operation
@api_view(['PATCH'])
def update_operation(request, id):
    return Response({"status": "ok", "id": id})

# delete operation
@api_view(['DELETE'])
def delete_operation(request, id):
    return Response({"status": "ok", "id": id})

# get all operations
@api_view(['GET'])
def get_all_operations(request):
    return Response({"status": "ok"})

