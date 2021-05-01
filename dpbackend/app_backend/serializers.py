from rest_framework import serializers
from app_backend.models import *

class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employees
        fields = ('EmployeeId',
                  'Name',
                  'Gender',
                  'Address',
                  'Phone',
                  'Country',
                  'State',
                  'City')

class CountrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Country
        fields = ('CountryId',
                  'Name')

class StateSerializer(serializers.ModelSerializer):
    class Meta:
        model = State
        fields = ('StateId',
                  'Name')

class CitySerializer(serializers.ModelSerializer):
    class Meta:
        model = City
        fields = ('CityId',
                  'Name')
                
                        