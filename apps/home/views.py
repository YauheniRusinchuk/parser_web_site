from django.shortcuts import render
from requests_html import HTMLSession
# Create your views here.

def index(request):
    #session = HTMLSession()
    #r : set = session.get('http://google.com')
    return render(request, 'home.html', {})
