from rest_framework import serializers
from uplanning.models import Evaluation


class EvaluationSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Evaluation
        # fields = ['id', 'title', 'date', 'evaluation_type', 'url',]
        fields = '__all__'
