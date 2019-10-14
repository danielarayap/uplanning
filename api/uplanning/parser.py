import csv
import datetime
import pprint
from collections import defaultdict
import ipdb


def parse_spreadsheet(file):
    """
    retorna un diccionario con la siguiente estructura
    {
        "year": int,
        "period": int,
        "start": datetime.date,
        "finish": datetime.date,
        "courses": [
            {
                "nsemester": int,
                "code": str,
                "name": str,
                "section": int,
                "teacher": str,
                "evals": [
                    {
                        "title": str,
                        "date": datetime.date,
                        "evaluation_type": int,
                    },
                    ...
                ],
                "aux_description": str,
            },
            ...
        ],
    }
    """
    reader = csv.reader(file)
    semester = defaultdict(list)
    # se parsean los atributos del semestre
    semester["year"] = int(next(reader)[1])
    semester["period"] = int(next(reader)[1])
    semester["start"] = datetime.date(*map(int, next(reader)[1].split("/")[::-1]))
    semester["finish"] = datetime.date(*map(int, next(reader)[1].split("/")[::-1]))

    header = next(reader)  # saltarse el header
    # se parsean los cursos
    for row in reader:
        if not row[1].startswith("CC"):
            continue
        course = defaultdict(list)
        course["nsemester"] = int(row[0].split("°")[0])
        course["code"] = row[1].split(":")[0]
        course["name"] = row[1].split(":")[1].strip()
        course["section"] = int(row[2])
        course["teacher"] = row[3].split("/")[0]  # me quedo solo con el primero porque por ahora los cursos tiene un puro profe en los modelos
        # se parsean las evaluaciones
        for i, (date, name) in enumerate(zip(row[4:16], header[4:16])):
            if not date:
                continue
            split = date.split("/")
            course["evals"].append({
                "title": name,
                "date": datetime.date(*map(int, split[::-1])),
                "evaluation_type": 1 if i < 4 else 2,
            })
        course["aux_description"] = row[16]
        semester["courses"].append(course)

    # semestre tiene cursos,  cursos tienen evaluaciones

    return semester


def main():
    with open("../../test-data/Planilla_de_Cursos_Prim_2019_Fechas.csv", "r") as file:
        semester = parse_spreadsheet(file)
        pprint.pprint(semester)


if __name__ == '__main__':
    main()
