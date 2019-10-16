from django.urls import path, include
from rest_framework.routers import DefaultRouter
from uplanning import views

router = DefaultRouter()
router.register(r'evaluations', views.EvaluationViewSet)
router.register(r'semesters', views.SemesterViewSet)
router.register(r'courses', views.CourseViewSet)
router.register(r'ramos', views.RamoViewSet)
router.register(r'teachers', views.TeacherViewSet)
router.register(r'upload', views.FileUploadViewSet)
router.register(r'fechasespeciales', views.FechasEspecialesViewSet)
router.register(r'calendars', views.CalendarsViewSet)
#router.register(r'suscription', views.SuscriptionViewSet)

# router.register(r'upload', views.FileUploadView)

urlpatterns = [
    path('', include(router.urls)),
    # path(r'^upload/(?P<filename>[^/]+)$', views.FileUploadView.as_view())
]
