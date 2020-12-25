from django.shortcuts import render
from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import ExpenseSerializer
from .models import Expense

from rest_framework.response import Response
from rest_framework.permissions import SAFE_METHODS, BasePermission, IsAdminUser, DjangoModelPermissions
# Create your views here.


class ExpenseUserWritePermission(BasePermission):
    message = 'Editing expenses is restricted to the user only'

    def has_object_permission(self, request, view, obj):
        if request.method in SAFE_METHODS:
            return True
        return obj.user == request.user


class ExpenseList(generics.ListCreateAPIView):
    permission_classes = [DjangoModelPermissions]
    queryset = Expense.objects.all()
    serializer_class = ExpenseSerializer


class ExpenseDetail(generics.RetrieveUpdateDestroyAPIView, ExpenseUserWritePermission):
    permission_classes = [ExpenseUserWritePermission]
    queryset = Expense.objects.all()
    serializer_class = ExpenseSerializer
