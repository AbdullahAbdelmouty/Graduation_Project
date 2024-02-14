from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.models import User
# Create your models here.
# packages model
class Packages(models.Model):
    # image will be in cloundinary
    packageImage = models.CharField(max_length=400, null=False, blank=True)
    frontName = models.CharField(max_length=30, null=False, blank=True)
    packageName = models.CharField(max_length=30,primary_key=True, blank=True)
    pricePmonth = models.IntegerField( null=False, blank=False)
    pricePyear = models.IntegerField(null=False, blank=False)
    features = models.CharField(max_length=1000)
    numberOfuploadsPerMonth = models.IntegerField(null=False, blank=True, default=3)
    numberOfuploadsPerYear = models.IntegerField(null=False, blank=True, default=3)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    def __str__(self):
        # return self.packageName
        return f"{self.packageName} - {self.pricePmonth} - {self.pricePyear} - {self.numberOfuploadsPerMonth} - {self.numberOfuploadsPerYear}"
# user model
class Customers(models.Model):
    fullName = models.CharField(max_length=60, null=False, blank=True)
    email = models.CharField(max_length=60, null=False, blank=True,unique=True)
    userName = models.CharField(max_length=50, primary_key=True,blank=True)
    password = models.CharField(max_length=300, null=False, blank=True)
    # if packages is deleted then set to free package that is default
    package = models.ForeignKey(Packages, on_delete=models.SET_NULL,null=True)
    #maxOfupload,if it is 0 then the user can't upload any more
    maxOfuploads = models.IntegerField(null=False, blank=True,default=3)
    numberOfuploads = models.IntegerField(null=False, blank=True,default=0)
    availableUploads = models.IntegerField(null=False, blank=True,default=3)
    startTimeForPackage = models.DateTimeField( null=False, blank=True,default='2021-01-01 00:00:00')
    endTimeForPackage = models.DateTimeField( null=False, blank=True,default='2021-01-01 00:00:00')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    def __str__(self):
        return f"{self.userName} - {self.password} - {self.email} - {self.package} - {self.numberOfuploads} - {self.maxOfuploads} - {self.created_at} - {self.updated_at}"
# user uploads model
class Uploads(models.Model):
    id = models.AutoField(primary_key=True)
    # image will be in local storage
    image = models.CharField(max_length=400, null=False, blank=True)
    # if user is deleted then delete all uploads of that user
    user = models.ForeignKey(Customers, on_delete=models.CASCADE,null=True, blank=True)
    orderNumber = models.ForeignKey('Orders', on_delete=models.CASCADE,null=True, blank=True)
    # pdf will be in local storage
    pdf = models.CharField(max_length=400, null=False, blank=True)
    isBenign = models.BooleanField(default=False, null=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    def __str__(self):
        # return self.image
        return str(self.id)  

# image upload model
class ImageUpload(models.Model):
    image = models.ImageField(upload_to='malero/uploads/images/')
    created_at = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return str(self.image)  

# pdf upload model
class PdfUpload(models.Model):
    id = models.AutoField(primary_key=True)
    pdf = models.FileField(upload_to='malero/uploads/pdfs/')
    # isBenign = models.BooleanField(default=False, null=False)
    # user = models.ForeignKey(Customers, on_delete=models.CASCADE,null=True, blank=True)
    # pdfPath = models.CharField(max_length=400, null=False, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return str(self.pdf)    
# cards model: the idea ,I will create fake cards to mock the payment process because I don't have a payment gateway
# so I will create a fake cards and when the user enter the card number I will check if it is in the database or not
# if it is in the database then the payment will be successful
# if it is not in the database then the payment will be failed
# and I will create a fake payment gateway to mock the payment process
class Cards(models.Model):
    cardNumber = models.BigIntegerField(primary_key=True)
    nameOnCard = models.CharField(max_length=50, null=False, blank=True)
    expiryDate = models.IntegerField(null=False, blank=True)
    cvv = models.IntegerField(null=False, blank=True)
    value = models.IntegerField(null=False, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    def __str__(self):
        # return self.cardNumber
        return f"{self.cardNumber} - {self.nameOnCard} - {self.expiryDate} - {self.cvv} - {self.value} "     
# coupon model
class Coupons(models.Model):
    couponCode = models.CharField(max_length=30,primary_key=True)
    isPercentage = models.BooleanField(default=False, null=False)
    numberOfUses = models.IntegerField(null=False, blank=True)
    discount = models.IntegerField(null=False, blank=True)
    expiryDate = models.DateTimeField(max_length=10, null=False, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    def __str__(self):
        # return self.couponCode
        return self.couponCode
# orders model
class Orders(models.Model):
    orderNumber = models.AutoField(primary_key=True)
    fullName = models.CharField(max_length=60, null=False, blank=True)
    email = models.CharField(max_length=100, null=False, blank=True)
    phoneNumber = models.IntegerField(null=False, blank=True)
    country = models.CharField(max_length=60, null=False, blank=True)
    # if user is deleted then delete all orders of that user
    user = models.ForeignKey(Customers, on_delete=models.CASCADE,null=True, blank=True)
    # if coupon is deleted then set to null
    coupon = models.ForeignKey(Coupons, on_delete=models.SET_NULL,null=True, blank=True)
    # if package is deleted then set to null
    package = models.ForeignKey(Packages, on_delete=models.SET_NULL,null=True, blank=True)
    period = models.CharField(max_length=30, null=False, blank=True)
    cost = models.IntegerField(null=False, blank=True)
    # if card is deleted then set to null
    card = models.ForeignKey(Cards, on_delete=models.SET_NULL,null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    def __str__(self):
        # return self.user
        return str(self.orderNumber)
    
