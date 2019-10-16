from django_filters import rest_framework as filters
from uplanning.models import Evaluation


class EvaluationFilter(filters.FilterSet):
    year = filters.NumberFilter(
        # method='get_year',
        field_name='course__semester__year'
        )
    period = filters.NumberFilter(field_name='course__semester__period')

    class Meta():
        model = Evaluation
        fields = "__all__"

    # def get_year(self, queryset, field_name, value, ):
    #     if value:
    #         return queryset.filter(course__semester__year=value)
    #     return queryset