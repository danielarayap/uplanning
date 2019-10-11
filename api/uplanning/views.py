from rest_framework import viewsets
from uplanning.serializers import EvaluationSerializer, SemesterSerializer, CourseSerializer, RamoSerializer, TeacherSerializer
from uplanning.models import Evaluation, Semester, Course, Ramo, Teacher


class EvaluationViewSet(viewsets.ModelViewSet):
    queryset = Evaluation.objects.all()
    serializer_class = EvaluationSerializer


class SemesterViewSet(viewsets.ModelViewSet):
    queryset = Semester.objects.all()
    serializer_class = SemesterSerializer


class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer


class RamoViewSet(viewsets.ModelViewSet):
    queryset = Ramo.objects.all()
    serializer_class = RamoSerializer


class TeacherViewSet(viewsets.ModelViewSet):
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer
