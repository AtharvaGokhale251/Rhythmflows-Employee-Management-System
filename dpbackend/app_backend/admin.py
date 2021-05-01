from django.contrib import admin
from .models import *


# Register your models here.
admin.site.register(Employees)
admin.site.register(Country)
admin.site.register(State)
admin.site.register(City)