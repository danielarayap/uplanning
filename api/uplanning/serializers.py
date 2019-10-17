from rest_framework import serializers
# from uplanning.models import Evaluation, Semester
from uplanning import models
from uplanning.utils import get_fields
import ipdb
import pprint


class SemesterSerializer(serializers.HyperlinkedModelSerializer):
    # courses = serializers.HyperlinkedRelatedField(many=True, read_only=True, view_name="course-detail")

    class Meta:
        model = models.Semester
        fields = get_fields(models.Semester) + \
            [
                "url",
                "courses",
            ]


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


class EvaluationSerializer(serializers.HyperlinkedModelSerializer):
    # course = CourseSerializer(read_only=True)

    class Meta:
        model = models.Evaluation
        fields = "__all__"
        fields = get_fields(models.Evaluation) + ["url"]


class CourseSerializer(serializers.HyperlinkedModelSerializer):
    # semester = SemesterSerializer(read_only=True)
    # teacher = TeacherSerializer(read_only=True)
    # ramobject = RamoSerializer(read_only=False)
    evaluations = EvaluationSerializer(many=True, read_only=True)

    class Meta:
        model = models.Course
        fields = "__all__"

    def to_representation(self, course):
        ret = super().to_representation(course)
        ramo = course.ramo
        ret["name"] = ramo.name
        ret["code"] = ramo.code
        # pprint.pprint(ret)
        # ipdb.set_trace()
        return ret


class FechasEspecialesSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.FechasEspeciales
        fields = '__all__'


class CalendarsSerializer(serializers.HyperlinkedModelSerializer):
    courses = CourseSerializer(many=True)

    class Meta:
        model = models.Calendars
        fields = '__all__'
