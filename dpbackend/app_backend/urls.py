from django.conf.urls import url
from app_backend import views

from django.conf.urls.static import static
from django.conf import settings

urlpatterns=[
    url(r'^app_backend/$',views.employeemethods),
    url(r'^app_backend/country/$',views.countrymethods),
    url(r'^app_backend/state/$',views.statemethods),
    url(r'^app_backend/city/$',views.citymethods),
    url(r'^app_backend/([0-9]+)$',views.employeemethods),
]