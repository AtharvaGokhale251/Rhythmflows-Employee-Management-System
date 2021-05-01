from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from app_backend.models import *
from app_backend.serializers import *

from django.core.files.storage import default_storage

# Create your views here.
@csrf_exempt
def employeemethods(request,id=0):
    if request.method=='GET':
        employees = Employees.objects.all()
        employees_serializer = EmployeeSerializer(employees, many=True)
        return JsonResponse(employees_serializer.data, safe=False)

    elif request.method=='POST':
        employee_data=JSONParser().parse(request)
        employee_serializer = EmployeeSerializer(data=employee_data)
        if employee_serializer.is_valid():
            employee_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)
    
    elif request.method=='PUT':
        employee_data = JSONParser().parse(request)
        employee=Employees.objects.get(EmployeeId=employee_data['EmployeeId'])
        employee_serializer=EmployeeSerializer(employee,data=employee_data)
        if employee_serializer.is_valid():
            employee_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method=='DELETE':
        employee=Employees.objects.get(EmployeeId=id)
        employee.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)

@csrf_exempt
def countrymethods(request):
    if request.method=='GET':
        countries = Country.objects.all()
        countries_serializer = CountrySerializer(countries, many=True)
        return JsonResponse(countries_serializer.data, safe=False)

@csrf_exempt
def statemethods(request):
    if request.method=='GET':
        states = State.objects.all()
        states_serializer = StateSerializer(states, many=True)
        return JsonResponse(states_serializer.data, safe=False)

@csrf_exempt
def citymethods(request):
    if request.method=='GET':
        cities = City.objects.all()
        cities_serializer = CitySerializer(cities, many=True)
        return JsonResponse(cities_serializer.data, safe=False)
