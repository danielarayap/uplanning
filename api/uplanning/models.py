from django.db import models

EVAL_TYPES = (
    (1, "Control"),
    (2, "Tarea"),
)


class Evaluation(models.Model):
    title = models.CharField(max_length=100, blank=True, default='')
    date = models.DateTimeField()
    evaluation_type = models.CharField(choices=EVAL_TYPES, max_length=100)
