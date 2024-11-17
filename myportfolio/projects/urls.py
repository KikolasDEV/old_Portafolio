from django.urls import path
from projects import views

urlpatterns = [
    path('', views.index, name='index'),
    path('contact/', views.contact, name='contact'),
    path('backend/', views.backend, name='backend'),
    path('websites/', views.websites, name='websites'),
    path('games/', views.games, name='games'),
]