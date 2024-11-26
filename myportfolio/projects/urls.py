from django.urls import path
from projects import views

urlpatterns = [
    path('', views.index, name='index'),
    path('contact/', views.contact, name='contact'),
    path('backend/', views.backend_projects, name='backend_projects'),
    path('websites/', views.websites_projects, name='websites_projects'),
    path('games/', views.games_projects, name='games_projects'),
]