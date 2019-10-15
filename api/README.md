# Instrucciones sobre uso

Esto usa python3, no te va a funcionar con python2. Correr los comando en la carpeta api mas externa, donde esta manage.py

# Como correr
1. primero hazte un entorno virtual
  ```bash
  python3 -m venv env
  ```
2. ahora activalo
  ```bash
  source env/bin/activate
  ```
3. ahora instala los requisitos del proyecto
  ```bash
  pip install -r requirements.txt
  ```
4. teni que estar en master, y primero borrar tu base de datos para que la cosa no este sucia cuando lo pruebes
  ``` bash
  rm -f db.sqlite3
  ```
5. ahora tienes que hacer que aplicar las migraciones
  ``` bash
  python3 manage.py migrate
  ```
6. listo! ahora deberias poder correr el servidor de la api con
  ```bash
  python3 manage.py runserver
  ```