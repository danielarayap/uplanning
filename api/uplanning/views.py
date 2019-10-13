from rest_framework import viewsets, views, mixins, status
from rest_framework.parsers import FileUploadParser
from rest_framework.response import Response
from uplanning.serializers import EvaluationSerializer, SemesterSerializer, SemesterSpreadSheetSerializer, CourseSerializer, RamoSerializer, TeacherSerializer
from uplanning.models import Evaluation, Semester, SemesterSpreadSheet, Course, Ramo, Teacher


class EvaluationViewSet(viewsets.ModelViewSet):
    queryset = Evaluation.objects.all()
    serializer_class = EvaluationSerializer


class SemesterViewSet(viewsets.ModelViewSet):
    queryset = Semester.objects.all()
    serializer_class = SemesterSerializer


class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer


class RamoViewSet(viewsets.ModelViewSet):
    queryset = Ramo.objects.all()
    serializer_class = RamoSerializer


class TeacherViewSet(viewsets.ModelViewSet):
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer


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
            file = request.data.get("file")
            print(file)
            print(file.size)
            print(file.content_type)
            # Chantar toda la logica del parseo, crear weas en el semestre, etc

            return super(FileUploadViewSet, self).create(request)
        except Exception as e:
            raise e
            # return Response(
            #     {"speak to my makers": "they surely know what's wrong /s"},
            #     status.HTTP_500_INTERNAL_SERVER_ERROR
            # )
        # return super().create(request)
        # return Response({"status": "yes gud"})
