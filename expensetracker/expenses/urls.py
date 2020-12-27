from django.urls import path
from .views import ExpenseList, ExpenseDetail, UserCreate

urlpatterns = [
    path('<int:pk>/', ExpenseDetail.as_view(), name='detailcreate'),
    path('', ExpenseList.as_view(), name='listcreate'),
    path('register/', UserCreate.as_view(), name='create_user'),
]
