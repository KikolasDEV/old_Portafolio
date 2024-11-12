from django.urls import path
from projects import views

urlpatterns = [
    path('', views.index, name='index'),
    path('contact/', views.contact, name='contact'),
    # path('projects/', views.projects, name='projects')
]