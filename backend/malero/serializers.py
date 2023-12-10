from rest_framework import serializers
from malero.models import Packages,Customers,Uploads,Cards,Coupons

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
