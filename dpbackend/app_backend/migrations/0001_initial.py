# Generated by Django 3.1.5 on 2021-01-18 14:44

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='City',
            fields=[
                ('CityId', models.AutoField(primary_key=True, serialize=True)),
                ('Name', models.CharField(default='', max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='Country',
            fields=[
                ('CountryId', models.AutoField(primary_key=True, serialize=True)),
                ('Name', models.CharField(default='', max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='Employees',
            fields=[
                ('EmployeeId', models.AutoField(primary_key=True, serialize=True)),
                ('Name', models.CharField(default='', max_length=30)),
                ('Gender', models.CharField(default='', max_length=8)),
                ('Address', models.CharField(default='', max_length=30)),
                ('Phone', models.CharField(default='', max_length=15)),
                ('Country', models.CharField(default='', max_length=30)),
                ('State', models.CharField(default='', max_length=30)),
                ('City', models.CharField(default='', max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='State',
            fields=[
                ('StateId', models.AutoField(primary_key=True, serialize=True)),
                ('Name', models.CharField(default='', max_length=30)),
            ],
        ),
    ]
