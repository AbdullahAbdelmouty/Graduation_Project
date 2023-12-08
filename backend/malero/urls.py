from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("add_user", views.add_user, name="add_user"),
    path("get_user/<int:id>", views.get_user, name="get_user"),
    path("update_user/<int:id>", views.update_user, name="update_user"),
    path("delete_user/<int:id>", views.delete_user, name="delete_user"),
    path("get_all_users", views.get_all_users, name="get_all_users"),
    path("add_package", views.add_package, name="add_package"),
    path("get_package/<int:id>", views.get_package, name="get_package"),
    path("update_package/<int:id>", views.update_package, name="update_package"),
    path("delete_package/<int:id>", views.delete_package, name="delete_package"),
    path("get_all_packages", views.get_all_packages, name="get_all_packages"),
    path("add_operation", views.add_operation, name="add_operation"),
    path("get_operation/<int:id>", views.get_operation, name="get_operation"),
    path("update_operation/<int:id>", views.update_operation, name="update_operation"),
    path("delete_operation/<int:id>", views.delete_operation, name="delete_operation"),
    path("get_all_operations", views.get_all_operations, name="get_all_operations"),
    
]
