from rest_framework import serializers
# from uplanning.models import Evaluation, Semester
from uplanning import models


class EvaluationSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.Evaluation
        # fields = ['id', 'title', 'date', 'evaluation_type', 'url',]
        fields = '__all__'


class SemesterSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.Semester
        fields = "__all__"


class CourseSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.Course
        fields = "__all__"


class RamoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.Ramo
        fields = "__all__"


class TeacherSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.Teacher
        fields = "__all__"
