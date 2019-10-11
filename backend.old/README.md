# Intro
Este es un backend REST terrible chico e insignificante que expone un par de endpoints para crear, leer y modificar cursos de una base de datos NoSQL de tipo Document Store. El nombre es terrible fancy, la verdad de las cosas es que se guardan en una json todo cagon. Use TinyDB, que provee una sintaxis basica para hacer queries. En verdad es muy cagon todo, pero funciona.

# Como correr
Porfa usa un entorno virtual. Porfa.

Instala los requisitos
```shell
pip install -r requirements.txt
```
Corre el servidor! Es asi de simple
```
python server.py
```
En serio, eso es todo.

Ahora puedes ir a <http://0.0.0.0:5000/api/ui/> y jugar con la API.

# Como funciona
Me da paja documentarlo, me puedes preguntar directamente.

# TODOS
* parsear el documento que nos entrego sergio y popular un poco la db. Hacerlo directamente y aprovechar de provar el sdk.
