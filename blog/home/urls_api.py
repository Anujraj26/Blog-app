from django.urls import path
from .views_api import *
from .views import *

urlpatterns = [
    path('login/' , LoginView),
    path('register/', RegisterView )
    
]