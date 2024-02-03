from rest_framework import serializers
from malero.models import Packages,Customers,Uploads,Cards,Coupons,Orders
import bcrypt 
# Sign up serializer
class SignUpSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customers
        fields = ('fullName','email','package_id')
    extra_kwargs = {'password': {'write_only': True}}    
# Login serializer
class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customers
        fields = ('email','userName','password')
    
# Password reset serializer
class PasswordResetSerializer(serializers.Serializer):
    email = serializers.EmailField()
    def validate(self, data):
        if not Customers.objects.filter(email=data['email']).exists():
            raise serializers.ValidationError("Email does not exist")
        return data
# Password reset confirm serializer
class PasswordResetConfirmSerializer(serializers.Serializer):
    password = serializers.CharField(max_length=100)
    password2 = serializers.CharField(max_length=100)
    def validate(self, data):
        if data['password'] != data['password2']:
            raise serializers.ValidationError("Passwords do not match")
        return data
# Profile serializer
class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customers
        fields = ('username','email','firstName','lastName','phone','address')
# Change password serializer
class ChangePasswordSerializer(serializers.Serializer):
    oldPassword = serializers.CharField(max_length=100)
    newPassword = serializers.CharField(max_length=100)
    newPassword2 = serializers.CharField(max_length=100)
    def validate(self, data):
        if data['newPassword'] != data['newPassword2']:
            raise serializers.ValidationError("Passwords do not match")
        return data

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

