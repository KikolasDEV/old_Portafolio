from django import forms

class ContactForm(forms.Form):
    nombre = forms.CharField(max_length=150)
    email = forms.EmailField()
    asunto = forms.CharField()
    mensaje = forms.CharField(widget=forms.Textarea())

    def __init__(self, *args, lang="es", **kwargs):
        super().__init__(*args, **kwargs)

        if lang == "en":
            labels = {
                "nombre": ("Name", "Enter your name"),
                "email": ("Email", "Enter your email address"),
                "asunto": ("Subject", "Questions, ideas..."),
                "mensaje": ("Message", "Write your message"),
            }
        else:
            labels = {
                "nombre": ("Nombre", "Ingresa tu nombre"),
                "email": ("Correo Electrónico", "Ingresa tu correo electrónico"),
                "asunto": ("Asunto", "Dudas, sugerencias..."),
                "mensaje": ("Mensaje", "Escribe tu mensaje"),
            }

        for field_name, field in self.fields.items():
            label, placeholder = labels[field_name]
            field.label = label
            field.widget.attrs["placeholder"] = placeholder
