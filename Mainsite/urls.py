from django.urls import path
from .views import Main, form

urlpatterns = [
    path('', Main, name="main"),
    path('form-submit/', form, name="form")
]