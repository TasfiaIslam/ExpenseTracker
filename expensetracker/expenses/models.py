from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class Expense(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    description = models.CharField(max_length=1000, null=True)
    type_of_expense = models.CharField(max_length=30)
    payment = models.CharField(max_length=50)
    amount = models.FloatField()
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['created_at']

    def __str__(self):
        return self.type_of_expense
