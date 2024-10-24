from django.urls import path
from . import views
from .views import sign_up
from django.urls import path
from .views import sign_in,get_user,update_user


urlpatterns = [
    path('', views.home, name="home"),
    path('api/signup/', views.sign_up, name='sign_up'),
    path('api/signin/', views.sign_in, name='sign_in'),
    path('api/user/', views.get_user, name='get_user'),  # New endpoint for fetching user data
    path('api/user/update/', views.update_user, name='update_user'),  # New endpoint for updating user data
]