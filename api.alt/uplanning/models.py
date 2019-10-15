from django.db import models


class Evaluation(models.Model):
    _EVAL_TYPES = (
        (1, "Control"),
        (2, "Tarea"),
    )
    title = models.CharField(max_length=100, blank=True, default='')
    date = models.DateField()
    evaluation_type = models.IntegerField(choices=_EVAL_TYPES)
    description = models.TextField(null=True, blank=True)
    course = models.ForeignKey('Course', on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.title} :: {self.course}"


class Semester(models.Model):
    _PERIOD_TYPES = (
        (1, "Otoño"),
        (2, "Primavera"),
    )
    _STATE_TYPES = (
        (1, "Terminado"),
        (2, "En ejecucion"),
        (3, "Por comenzar"),
    )
    year = models.IntegerField()
    period = models.IntegerField(choices=_PERIOD_TYPES)
    start = models.DateField()
    finish = models.DateField()
    state = models.CharField(choices=_STATE_TYPES, max_length=100, blank=False, default=3)

    def __str__(self):
        return "Semestre {}-{}".format(self.year, self.period)


class SemesterSpreadSheet(models.Model):
    # file = models.FileField(upload_to='uploads/')
    text = models.TextField()

    # def save(self, *args, **kwargs):
    #     print("HOLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa")
    #     print(type(self.file))
    #     super(SemesterSpreadSheet, self).save(*args, **kwargs)


class Course(models.Model):
    section = models.IntegerField(blank=True, default=1)
    aux_description = models.TextField()
    ramo = models.ForeignKey('Ramo', on_delete=models.CASCADE)
    semester = models.ForeignKey('Semester', on_delete=models.CASCADE)
    teacher = models.ForeignKey('Teacher', on_delete=models.SET_NULL, null=True)
    #horario = models.TextField()

    def __str__(self):
        return f"{self.ramo.code}-{self.section} {self.ramo.name}"


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
    nsemester = models.IntegerField(choices=_SEMESTERS)

    def __str__(self):
        return f"{self.code} {self.name}"


class Teacher(models.Model):
    name = models.CharField(max_length=100, blank=False)

    def __str__(self):
        return self.name
