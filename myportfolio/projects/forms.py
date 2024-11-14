from django import forms

class ContactForm(forms.Form):
    nombre = forms.CharField(label='Nombre', max_length=150, widget=forms.TextInput(attrs={'placeholder': 'Ingresa tu nombre'}))
    email = forms.EmailField(label='Correo Electrónico', widget=forms.EmailInput(attrs={'placeholder': 'Ingresa tu correo electrónico'}))
    asunto = forms.CharField(label='Asunto', widget=forms.TextInput(attrs={'placeholder': 'Dudas, sugerencias...'}))
    mensaje = forms.CharField(label='Mensaje', widget=forms.Textarea(attrs={'placeholder': 'Escribe tu mensaje'}))
