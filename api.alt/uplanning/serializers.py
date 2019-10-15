from rest_framework import serializers
# from uplanning.models import Evaluation, Semester
from uplanning import models


class SemesterSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.Semester
        fields = ["id", "url", "year", "period", "start", "finish", "state"]


class SemesterSpreadSheetSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.SemesterSpreadSheet
        fields = "__all__"


class RamoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.Ramo
        fields = "__all__"


class TeacherSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.Teacher
        fields = "__all__"


class CourseSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.Course
        fields = "__all__"


class EvaluationSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.Evaluation
        fields = '__all__'
