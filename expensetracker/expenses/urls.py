from django.urls import path
from .views import expense_create_view, expense_list_view

urlpatterns = [
    path('', expense_list_view),
    path('create/', expense_create_view),
]
