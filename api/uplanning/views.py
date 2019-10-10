from rest_framework import viewsets
from uplanning.serializers import EvaluationSerializer
from uplanning.models import Evaluation


class EvaluationViewSet(viewsets.ModelViewSet):
    queryset = Evaluation.objects.all()
    serializer_class = EvaluationSerializer
# Create your views here.
