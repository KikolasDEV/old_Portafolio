from django.shortcuts import render, redirect
from django.core.mail import send_mail
from django.contrib import messages
from .forms import ContactForm
import os

# Create your views here.
def index(request):
    if request.method == "POST":
        form = ContactForm(request.POST)
        if form.is_valid():
            nombre = form.cleaned_data['nombre']
            email = form.cleaned_data['email']
            asunto = form.cleaned_data['asunto']
            mensaje = form.cleaned_data['mensaje']
            send_mail(
                f'Nuevo mensaje de tu portafolio -> {asunto}',
                f'Nombre: {nombre}\nCorreo: {email}\nAsunto: {asunto}\nMensaje: {mensaje}',
                os.getenv('MAIL_USERNAME'),
                [os.getenv('MAIL_RECIPIENT')],
            )
            messages.success(request, 'Mensaje enviado. ¡Gracias por contactarme!')
            return redirect('index')
    else:
        form = ContactForm()
    return render(request, 'projects/index.html', {'form': form})

def backend_projects(request):
    return render(request, 'projects/backend.html')

def websites_projects(request):
    return render(request, 'projects/websites.html')

def games_projects(request):
    return render(request, 'projects/games.html')