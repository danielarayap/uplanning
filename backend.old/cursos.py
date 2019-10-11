"""
Este es el archivo donde estan los handlers para los distintos paths y metodos
"""

from tinydb import TinyDB, Query

DB_NAME = "db.json"
db = TinyDB(DB_NAME)
Curso = Query()


def read_all():
    return db.all()


def read_one(nombre, seccion):
    curso = db.get((Curso.nombre == nombre) & (Curso.seccion == seccion))
    if curso:
        return curso
    else:
        return "No esta el curso", 404


def create(body):
    if db.search(
        (Curso.nombre == body["nombre"]) &
        (Curso.seccion == body["seccion"])
       ):
        # el curso ya existe
        return "matoo, perro", 409
    else:
        # el curso no existe, lo creamos
        db.insert(body)
        return "fino, perro", 201


def update(nombre, seccion, body):
    print(nombre, seccion, body)
    if db.update(
        body,
        (Curso.nombre == nombre) & (Curso.seccion == seccion)
       ):
        return "Curso actualizado", 200
    else:
        return "El curso no existe", 404
