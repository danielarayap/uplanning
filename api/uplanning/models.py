from django.db import models


class Evaluation(models.Model):
    _EVAL_TYPES = (
        (1, "Control"),
        (2, "Tarea"),
    )
    title = models.CharField(max_length=100, blank=True, default='')
    date = models.DateTimeField()
    evaluation_type = models.IntegerField(choices=_EVAL_TYPES)
    course = models.ForeignKey('Course', on_delete=models.CASCADE)


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
    start = models.DateField()
    finish = models.DateField()
    state = models.CharField(choices=_STATE_TYPES, max_length=100, blank=False)


class Course(models.Model):
    section = models.IntegerField(blank=True, default=1)
    description = models.TextField()
    ramo = models.ForeignKey('Ramo', on_delete=models.CASCADE)
    semester = models.ForeignKey('Semester', on_delete=models.CASCADE)
    teacher = models.ForeignKey('Teacher', on_delete=models.SET_NULL, null=True)
    #horario = models.TextField()


class Ramo(models.Model):
    _SEMESTERS = (
        (5, "Quinto"),
        (6, "Sexto"),
        (7, "Septimo"),
        (8, "Octavo"),
        (9, "Noveno"),
        (10, "Decimo"),
    )
    code = models.CharField(max_length=100, blank=False)
    name = models.CharField(max_length=100, blank=False)
    semester = models.IntegerField(choices=_SEMESTERS)


class Teacher(models.Model):
    name = models.CharField(max_length=100, blank=False)
