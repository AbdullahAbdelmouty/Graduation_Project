from rest_framework import serializers
from malero.models import Packages,Customers,Uploads,Cards,Coupons,Orders
from django.contrib.auth.models import User
from rest_framework.validators import UniqueValidator
from django.contrib.auth.password_validation import validate_password
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
import bcrypt 
from .models import Customers as Customer
# test serializer
class TestSerializer(serializers.Serializer):
    message = serializers.CharField(max_length=100)
# Sign up serializer
# class SignUpSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Customers
#         fields = ('fullName','email','package_id')
#     extra_kwargs = {'password': {'write_only': True}}    
# # Login serializer
# class LoginSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Customers
#         fields = ('email','userName','password')


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):

    @classmethod
    def get_token(cls, user):
        token = super(MyTokenObtainPairSerializer, cls).get_token(user)

        # Add custom claims
        token['username'] = user.username
        token['email'] = user.email
        token['firstName'] = user.first_name
        return token

class RegisterSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
            required=True,
            validators=[UniqueValidator(queryset=User.objects.all())]
            )

    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ('username', 'password', 'password2', 'email', 'first_name', 'last_name')
        extra_kwargs = {
            'first_name': {'required': True},
            'last_name': {'required': True},
            'username': {'required': True},
            'email': {'required': True},
            'password': {'write_only': True}
        }

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError({"password": "Password fields didn't match."})

        return attrs

    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data['username'],
            email=validated_data['email'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name']
        )

        
        user.set_password(validated_data['password'])
        user.save()
        # create customer
        package_id = "free"
        maxOfuploads = 3
        numberOfuploads = 0
        user.maxOfuploads = maxOfuploads
        user.numberOfuploads = numberOfuploads
        user.package_id = package_id
        fullName = user.first_name + " " + user.last_name
        userName = user.username
        email = user.email
        password = user.password
        user.save()
        try:
            Customer.objects.create(fullName=fullName,userName=userName, email=email, password=password, package_id=package_id, maxOfuploads=maxOfuploads, numberOfuploads=numberOfuploads)
        except Exception as e:
            print(e)
        return user

# package serializer
class PackagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Packages
        fields = '__all__'
# customer serializer        
class CustomersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customers
        fields = '__all__'
        
class UploadsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Uploads
        fields = '__all__'
# card serializer
# I will not return the cvv number
class CardsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cards
        fields = ('cardNumber','nameOnCard','expiryDate','value')
# coupon serializer
class CouponsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Coupons
        fields = '__all__'       
# order serializer
class OrdersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Orders
        fields = '__all__'

