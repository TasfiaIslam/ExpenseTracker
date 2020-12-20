from django.db import models

# Create your models here.


class Expenses(models.Model):
    description = models.CharField(max_length=1000, null=True)
    type_of_expense = models.CharField(max_length=30)
    payment = models.CharField(max_length=50)
    amount = models.FloatField()
    created_at = models.DateField()
