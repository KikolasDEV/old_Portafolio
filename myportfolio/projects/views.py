from django.shortcuts import render, redirect
from django.core.mail import send_mail
from django.contrib import messages
from .forms import ContactForm
import os

SUPPORTED_LANGUAGES = {"es", "en"}


def get_language(request):
    requested_lang = request.GET.get("lang")
    if requested_lang in SUPPORTED_LANGUAGES:
        request.session["portfolio_language"] = requested_lang
        return requested_lang
    return request.session.get("portfolio_language", "es")


def index(request):
    lang = get_language(request)

    if request.method == "POST":
        form = ContactForm(request.POST, lang=lang)
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
            success_message = 'Message sent. Thanks for reaching out!' if lang == 'en' else 'Mensaje enviado. ¡Gracias por contactarme!'
            messages.success(request, success_message)
            return redirect(f'/?lang={lang}#contacto')
    else:
        form = ContactForm(lang=lang)
    return render(request, 'projects/index.html', {'form': form, 'lang': lang})

def backend_projects(request):
    return render(request, 'projects/backend.html')

def websites_projects(request):
    return render(request, 'projects/websites.html')

def games_projects(request):
    return render(request, 'projects/games.html')
