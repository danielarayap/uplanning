from rest_framework import serializers
from uplanning.models import Evaluation


class EvaluationSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Evaluation
        fields = ['title', 'date', 'evaluation_type']
