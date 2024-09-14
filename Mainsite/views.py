from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse 

#View
def Main(request):
    return render(request, "index.html")
