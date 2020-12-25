from django.shortcuts import render
from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import ExpenseSerializer
from .models import Expense

from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser
# Create your views here.


class ExpenseList(generics.ListCreateAPIView):
    permission_classes = [IsAdminUser]
    queryset = Expense.objects.all()
    serializer_class = ExpenseSerializer


class ExpenseDetail(generics.RetrieveAPIView):
    queryset = Expense.objects.all()
    serializer_class = ExpenseSerializer
