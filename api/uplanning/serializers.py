from rest_framework import serializers
# from uplanning.models import Evaluation, Semester
from uplanning import models


def get_fields(model):
    return [field.attname for field in model._meta.fields]


class SemesterSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.Semester
        fields = get_fields(models.Semester) + ["url"]


class SemesterSpreadSheetSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.SemesterSpreadSheet
        fields = "__all__"


class RamoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.Ramo
        fields = get_fields(models.Ramo) + ["url"]


class TeacherSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.Teacher
        fields = get_fields(models.Teacher) + ["url"]


class CourseSerializer(serializers.HyperlinkedModelSerializer):
    # semester = SemesterSerializer(read_only=True)
    # teacher = TeacherSerializer(read_only=True)
    # ramo = RamoSerializer(read_only=True)

    class Meta:
        model = models.Course
        fields = get_fields(models.Course) + ["url"]


class EvaluationSerializer(serializers.HyperlinkedModelSerializer):
    # course = CourseSerializer(read_only=True)

    class Meta:
        model = models.Evaluation
        fields = get_fields(models.Evaluation) + ["url"]
