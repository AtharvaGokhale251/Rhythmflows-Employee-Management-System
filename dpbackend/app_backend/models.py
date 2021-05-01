from django.db import models

# Create your models here.
class Employees(models.Model):
    EmployeeId = models.AutoField(primary_key=True)
    Name = models.CharField(max_length=30, default = "")
    Gender = models.CharField(max_length=8, default = "")
    Address = models.CharField(max_length=30, default = "")
    Phone = models.CharField(max_length=15, default = "")
    Country = models.CharField(max_length=30, default = "")
    State = models.CharField(max_length=30, default = "")
    City = models.CharField(max_length=30, default = "")

class Country(models.Model):
    CountryId = models.AutoField(primary_key=True)
    Name = models.CharField(max_length=30, default = "")

class State(models.Model):
    StateId = models.AutoField(primary_key=True)
    Name = models.CharField(max_length=30, default = "")

class City(models.Model):
    CityId = models.AutoField(primary_key=True)
    Name = models.CharField(max_length=30, default = "")
    
