from django.shortcuts import render, HttpResponse
import json
from requests_html import HTMLSession
# Create your views here.

def index(request):
    session = HTMLSession()
    #r : set = session.get('http://google.com')
    if request.is_ajax() and request.POST:
        name_web_site:str = request.POST.get('name')
        url:str = 'http://' + name_web_site
        r = session.get(url)
        data = {'absolute_links': list(r.html.absolute_links), 'headers': dict(r.headers)}
        return HttpResponse(json.dumps(data), content_type='application/json')
    return render(request, 'home.html', {})
