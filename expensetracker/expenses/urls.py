from django.urls import path
from .views import ExpenseList, ExpenseDetail

urlpatterns = [
    path('<int:pk>/', ExpenseDetail.as_view(), name='detailcreate'),
    path('', ExpenseList.as_view(), name='listcreate'),
]
