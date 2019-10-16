from django_filters import rest_framework as filters
from uplanning.models import Evaluation, Course


class EvaluationFilter(filters.FilterSet):
    """
    Notar los dobles guiones en los field_name, esta es la sintaxis de
    django para "seguir" las relaciones
    """
    year = filters.NumberFilter(field_name='course__semester__year')
    period = filters.NumberFilter(field_name='course__semester__period')
    semester = filters.NumberFilter(field_name='course__semester')
    course_code = filters.CharFilter(field_name='course__ramo__code')
    course_section = filter.NumberFilter(field_name='course__section')

    class Meta():
        model = Evaluation
        fields = "__all__"


class CourseFilter(filters.FilterSet):
    """
    Misma nota de arriba
    """
    year = filters.NumberFilter(field_name='course__semester__year')
    period = filters.NumberFilter(field_name='course__semester__period')
    semester = filters.NumberFilter(field_name='course__semester')

    class Meta():
        model = Course
        fields = "__all__"