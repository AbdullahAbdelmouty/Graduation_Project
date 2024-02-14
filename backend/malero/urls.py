from django.urls import path
from . import views
from .views import RegisterView,MyObtainTokenPairView
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView
    )

urlpatterns = [
    path('register', RegisterView.as_view(), name='auth_register'),
    path('login', MyObtainTokenPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh', TokenRefreshView.as_view(), name='token_refresh'),
    path("", views.index, name="index"),
    path("test_mcu", views.test, name="test"),
    path("upload_image", views.upload_image, name="upload_image"),
    path("upload_pdf", views.upload_pdf, name="upload_pdf"),
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
    path("add_order", views.add_order, name="add_order"),
    path("get_order/<int:id>", views.get_order, name="get_order"),
    path("get_order_for_customer/<int:userName>", views.get_order_for_customer, name="get_order_for_customer"),
    path("update_order/<int:id>", views.update_order, name="update_order"),
    path("delete_order/<int:id>", views.delete_order, name="delete_order"),
    path("get_all_orders", views.get_all_orders, name="get_all_orders"),
    path("get_all_uploads_for_customer/<int:userName>", views.get_all_uploads_for_customer, name="get_all_uploads_for_specific_customer"),

]
