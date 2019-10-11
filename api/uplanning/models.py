from django.db import models


class Evaluation(models.Model):
    _EVAL_TYPES = (
        (1, "Control"),
        (2, "Tarea"),
    )
    title = models.CharField(max_length=100, blank=True, default='')
    date = models.DateTimeField()
    evaluation_type = models.IntegerField(choices=_EVAL_TYPES)


class Semester(models.Model):
    _PERIOD_TYPES = (
        (1, "Otoño"),
        (2, "Primavera"),
    )
    _STATE_TYPES = (
        ("finished", "Terminado"),
        ("current", "En ejecucion"),
        ("preparing", "Por comenzar"),
    )
    period = models.IntegerField(choices=_PERIOD_TYPES)
    year = models.IntegerField()
    start = models.DateTimeField()
    finish = models.DateTimeField()
    state = models.CharField(choices=_STATE_TYPES, max_length=100, blank=False)
