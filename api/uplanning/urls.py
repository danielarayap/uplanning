from django.urls import path, include
from rest_framework.routers import DefaultRouter
from uplanning import views

router = DefaultRouter()
router.register(r'evaluations', views.EvaluationViewSet)
router.register(r'semesters', views.SemesterViewSet)

urlpatterns = [
    path('', include(router.urls))
]
