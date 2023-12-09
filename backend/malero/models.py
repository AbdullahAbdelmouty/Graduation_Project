from django.db import models

# Create your models here.
class Packages(models.Model):
    # image will be in cloundinary
    packageImage = models.CharField(max_length=400, null=False, blank=True)
    packageName = models.CharField(max_length=30,primary_key=True)
    pricePmonth = models.IntegerField(null=False, blank=True)
    pricePyear = models.IntegerField(null=False, blank=True)
    features = models.CharField(max_length=1000)
    numberOfuploads = models.IntegerField(null=False, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    def __str__(self):
        # return self.packageName
        return self.packageName
# user model
class Customers(models.Model):
    fullName = models.CharField(max_length=60, null=False, blank=True)
    email = models.CharField(max_length=60, null=False, blank=True,unique=True)
    userName = models.CharField(max_length=50, primary_key=True,blank=True)
    password = models.CharField(max_length=20, null=False, blank=True)
    # if packages is deleted then set to free package that is default
    package = models.ForeignKey(Packages, on_delete=models.SET_DEFAULT,default='free')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    def __str__(self):
        # return self.userName
        return self.userName