"""
Modulo para poner funciones de utilidad generales
"""


def get_fields(model, exclude=[], follow=False):
    """
    Receives a model and returns all its fields. You may add a list of
    fields you want to exclude.
    It's useful to define the field to be serialized in the Meta class
    of a Serializer or the fields you want to allow to filter by.

    If follow is true, also returns the posible fields to follow relationships
    in clasic django fashion.
    Ex: Evaluation.objects.filter(course__ramo__name="foo")
    would return all the evaluations in which its course's ramo's name is foo
    course is foo
    """
    if follow:
        raise NotImplementedError("Tranqui, todavia no lo hago xD")

    return [
        field.attname.rsplit("_id", 1)[0] for field
        in model._meta.fields
        if field.attname not in exclude
    ]
