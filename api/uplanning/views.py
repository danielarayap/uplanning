import pprint
from rest_framework import viewsets, views, mixins, status
from rest_framework.parsers import FileUploadParser
from rest_framework.response import Response
from uplanning.serializers import EvaluationSerializer, SemesterSerializer, SemesterSpreadSheetSerializer, CourseSerializer, RamoSerializer, TeacherSerializer
from uplanning.models import Evaluation, Semester, SemesterSpreadSheet, Course, Ramo, Teacher

from uplanning.parser import parse_spreadsheet

from uplanning.utils import get_fields

import ipdb
import csv
import io


class EvaluationViewSet(viewsets.ModelViewSet):
    queryset = Evaluation.objects.all()
    serializer_class = EvaluationSerializer
    filterset_fields = [
        *get_fields(Evaluation, exclude=["id"]),
        "course__semester__year",
        "course__semester__period",
        ]


class SemesterViewSet(viewsets.ModelViewSet):
    queryset = Semester.objects.all()
    serializer_class = SemesterSerializer
    filterset_fields = "__all__"


class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    filterset_fields = "__all__"


class RamoViewSet(viewsets.ModelViewSet):
    queryset = Ramo.objects.all()
    serializer_class = RamoSerializer
    filterset_fields = "__all__"


class TeacherViewSet(viewsets.ModelViewSet):
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer
    filterset_fields = "__all__"


# views.py
class FileUploadViewSet(
                        mixins.CreateModelMixin,
                        mixins.ListModelMixin,
                        mixins.RetrieveModelMixin,
                        viewsets.GenericViewSet):
    queryset = SemesterSpreadSheet.objects.all()
    serializer_class = SemesterSpreadSheetSerializer

    def create(self, request):
        print("\nHOLAAAAAAAAAAAAAAAAAAAAAA")
        # Aca poner toda la logica de si se puede parsear la shiet
        try:
            file = request.data.get("text")

            # print(file[:100])
            # print(len(file))
            # print(type(file))
            # Chantar toda la logica del parseo, crear weas en el semestre, etc
            file = io.StringIO(file)
            parsed = parse_spreadsheet(file)

            semester = Semester(**{key: val for key, val in parsed.items() if key != "courses"})
            semester.save()
            god_save_the_queen = [semester]
            for c in parsed["courses"]:
                ramo_keys = ("code", "name", "nsemester")
                ramo, _ = Ramo.objects.get_or_create(
                    **{key: val for key, val in c.items() if key in ramo_keys}
                )
                teacher, _ = Teacher.objects.get_or_create(name=c["teacher"])
                # ipdb.set_trace()
                course = Course(
                    section=c["section"],
                    aux_description=c["aux_description"],
                    ramo=ramo,
                    semester=semester,
                    teacher=teacher,
                )
                # god_save_the_queen.append(course)
                course.save()

                for eval_ in c["evals"]:
                    evaluation = Evaluation(**eval_, course=course)
                    evaluation.save()
                    # god_save_the_queen.append(evaluation)

            # for save_yourself in god_save_the_queen:
            #     save_yourself.save()
            print(semester)
            # pprint.pprint(parsed)
            return super(FileUploadViewSet, self).create(request)
        except Exception as e:
            raise e
            # return Response(
            #     {"speak to my makers": "they surely know what's wrong /s"},
            #     status.HTTP_500_INTERNAL_SERVER_ERROR
            # )
        # return super().create(request)
        # return Response({"status": "yes gud"})
