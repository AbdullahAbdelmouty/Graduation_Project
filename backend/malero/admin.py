from django.contrib import admin
from .models import Packages,Customers,Uploads,Cards,Coupons,Orders

# Register your models here.
admin.site.register(Packages)
admin.site.register(Customers)
admin.site.register(Uploads)
admin.site.register(Cards)
admin.site.register(Coupons)
admin.site.register(Orders)
