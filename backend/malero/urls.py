from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("add_customer", views.add_customer, name="add_customer"),
    path("get_customer/<int:id>", views.get_customer, name="get_customer"),
    path("update_customer/<int:id>", views.update_customer, name="update_customer"),
    path("delete_customer/<int:id>", views.delete_customer, name="delete_customer"),
    path("get_all_customers", views.get_all_customers, name="get_all_customers"),
    path("add_package", views.add_package, name="add_package"),
    path("get_package/<int:id>", views.get_package, name="get_package"),
    path("update_package/<int:id>", views.update_package, name="update_package"),
    path("delete_package/<int:id>", views.delete_package, name="delete_package"),
    path("get_all_packages", views.get_all_packages, name="get_all_packages"),
    path("add_upload", views.add_upload, name="add_upload"),
    path("get_upload/<int:id>", views.get_upload, name="get_upload"),
    path("update_upload/<int:id>", views.update_upload, name="update_upload"),
    path("delete_upload/<int:id>", views.delete_upload, name="delete_upload"),
    path("get_all_uploads", views.get_all_uploads, name="get_all_uploads"),
    path("add_card", views.add_card, name="add_card"),
    path("get_card/<int:id>", views.get_card, name="get_card"),
    path("update_card/<int:id>", views.update_card, name="update_card"),
    path("delete_card/<int:id>", views.delete_card, name="delete_card"),
    path("get_all_cards", views.get_all_cards, name="get_all_cards"),
    path("add_coupon", views.add_coupon, name="add_coupon"),
    path("get_coupon/<int:id>", views.get_coupon, name="get_coupon"),
    path("update_coupon/<int:id>", views.update_coupon, name="update_coupon"),
    path("delete_coupon/<int:id>", views.delete_coupon, name="delete_coupon"),
    path("get_all_coupons", views.get_all_coupons, name="get_all_coupons"),

]
