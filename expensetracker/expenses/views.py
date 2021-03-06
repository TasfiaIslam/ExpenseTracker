from django.shortcuts import render, get_object_or_404
from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from rest_framework import viewsets

from .serializers import ExpenseSerializer, UserSerializer
from .models import Expense

from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated, SAFE_METHODS, BasePermission, IsAdminUser, DjangoModelPermissions
# Create your views here.


class UserCreate(APIView):
    permission_classes = [AllowAny]

    def post(self, request, format='json'):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            if user:
                json = serializer.data
                return Response(json, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ExpenseUserWritePermission(BasePermission):
    message = 'Editing expenses is restricted to the user only'

    def has_object_permission(self, request, view, obj):
        if request.method in SAFE_METHODS:
            return True
        return obj.user == request.user


class ExpenseList(viewsets.ViewSet):
    permission_classes = [IsAuthenticated]
    queryset = Expense.objects.all()

    def list(self, request):
        serializer_class = ExpenseSerializer(self.queryset, Many=True)
        return Response(serializer_class.data)

    def retrieve(self, request, pk=None):
        expense = get_object_or_404(self.queryset, pk=pk)
        serializer_class = ExpenseSerializer(expense)
        return Response(serializer_class.data)

# class ExpenseList(generics.ListCreateAPIView):
#     permission_classes = [AllowAny]  # DjangoModelPermissions
#     queryset = Expense.objects.all()
#     serializer_class = ExpenseSerializer


# class ExpenseDetail(generics.RetrieveUpdateDestroyAPIView, ExpenseUserWritePermission):
#     permission_classes = [ExpenseUserWritePermission]
#     queryset = Expense.objects.all()
#     serializer_class = ExpenseSerializer
