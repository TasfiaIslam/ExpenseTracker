from django.shortcuts import render
from django.http import JsonResponse
from .serializers import ExpenseSerializer, ExpenseCreateSerializer
from .models import Expense

from rest_framework.response import Response
# Create your views here.


def expense_list_view(request, *args, **kwargs):
    qs = Expense.objects.all()
    serializer = ExpenseSerializer(qs, many=True)

    return JsonResponse({}, status=200)


def expense_create_view(request, *args, **kwargs):
    data = request.POST or None
    serializer = ExpenseCreateSerializer(data)
    if serializer.is_valid():
        serializer.save()

    return JsonResponse({}, status=200)
