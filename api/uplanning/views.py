from rest_framework import viewsets
from uplanning.serializers import EvaluationSerializer, SemesterSerializer
from uplanning.models import Evaluation, Semester


class EvaluationViewSet(viewsets.ModelViewSet):
    queryset = Evaluation.objects.all()
    serializer_class = EvaluationSerializer


class SemesterViewSet(viewsets.ModelViewSet):
    queryset = Semester.objects.all()
    serializer_class = SemesterSerializer
