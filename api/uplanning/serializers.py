from rest_framework import serializers
# from uplanning.models import Evaluation, Semester
from uplanning import models


class SemesterSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.Semester
        fields = "__all__"


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
    semester = SemesterSerializer(read_only=True)
    teacher = TeacherSerializer(read_only=True)
    ramo = RamoSerializer(read_only=True)

    class Meta:
        model = models.Course
        fields = "__all__"


class EvaluationSerializer(serializers.HyperlinkedModelSerializer):
    course = CourseSerializer(read_only=True)

    class Meta:
        model = models.Evaluation
        fields = '__all__'

class FechasEspecialesSerializer(serializers.HyperlinkedModelSerializer):
    
    class Meta:
        model = models.FechasEspeciales
        fields = '__all__'

class CalendarsSerializer(serializers.HyperlinkedModelSerializer):
    courses = CourseSerializer(many=True)
    class Meta:
        model = models.Calendars
        fields = '__all__'
