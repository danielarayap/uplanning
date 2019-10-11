from rest_framework import serializers
from uplanning.models import Evaluation, Semester


class EvaluationSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Evaluation
        # fields = ['id', 'title', 'date', 'evaluation_type', 'url',]
        fields = '__all__'


class SemesterSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Semester
        fields = "__all__"
