from django.shortcuts import render
from django.http import JsonResponse
from django.core.mail import send_mail
from LandingPage import settings
#View
def Main(request):
    return render(request, "index.html")

#Formulario
def form(request):
    if request.method == "POST":
        name = request.POST.get("name")
        email = request.POST.get("mail")
        service = request.POST.get("service")
        message = request.POST.get("message")

        try:
            # Enviar correo a glstudioandrevlare@gmail.com
            send_mail(
             subject=f"Mensaje de {name}",
             message=f"Nombre: {name}\nEmail: {email}\nServicio: {service}\n\nMensaje:\n{message}",
             recipient_list=["glstudioandrevlare@gmail.com"],
             from_email= settings.EMAIL_HOST_USER,
             fail_silently= False
            )
        
            # Enviar correo a el remitente (usuario)
        
            send_mail(
             subject=f"¡Hola, Gracias por tu mensaje {name}! 📩",
             message=f"""
                Hola {name},

                Gracias por ponerte en contacto conmigo a través de mi sitio web. He recibido tu mensaje y estoy revisando los detalles. Pronto me pondré en contacto contigo para responder tus preguntas y ofrecerte más información sobre cómo puedo ayudarte a crear el sitio web perfecto para tu proyecto.

                Si tienes alguna información adicional que quieras compartir, no dudes en responder a este correo.

                ¡Hablamos pronto!

                Saludos cordiales,
                AndrevLare
                Full Stack Web Developer

                My portfolio: https://andrevlare.github.io/Portfolio
                """,
             recipient_list=[email],
                from_email= settings.EMAIL_HOST_USER,
             fail_silently= False
            )
        except Exception as exp:
            print(f"Ha ocurrido un error {exp}")
            return JsonResponse({"success": False})
        else:
            return JsonResponse({"success": True})
    return JsonResponse({"success": False})