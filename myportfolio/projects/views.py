from django.shortcuts import render, redirect
from django.core.mail import send_mail
from django.contrib import messages
from .forms import ContactForm
import os

# Create your views here.
def index(request):
    return render(request, 'projects/index.html')

def contact(request):
    if request.method == "POST":
        form = ContactForm(request.POST)
        if form.is_valid():
            nombre = form.cleaned_data['nombre']
            email = form.cleaned_data['email']
            mensaje = form.cleaned_data['mensaje']
            send_mail(
                'Nuevo mensaje de tu portafolio',
                f'Nombre: {nombre}\nCorreo: {email}\nMensaje: {mensaje}',
                os.getenv('MAIL_USERNAME'),
                [os.getenv('MAIL_RECIPIENT')],
            )
            messages.success(request, 'Mensaje enviado. ¡Gracias por contactarme!')
            return redirect('contact')
    else:
        form = ContactForm()
    return render(request, 'projects/contact.html', {'form': form})