from django.shortcuts import render
from requests_html import HTMLSession
# Create your views here.

def index(request):
    #session = HTMLSession()
    #r : set = session.get('http://google.com')
    if request.is_ajax() and request.POST:
        name_web_site:str = request.POST.get('name')
        print('request : ', name_web_site)
    return render(request, 'home.html', {})
