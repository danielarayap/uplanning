import logging
from flask import render_template
import connexion


# varias de estas configuraciones iniciales se podrian correr a un archivo
# config.py

# crear la app
app = connexion.App(__name__, specification_dir='spec/')
app.add_api(
    'api.yaml',
    base_path='/api',
    validate_responses=True
)

# rutear "/"
@app.route('/')
def home():
    """
    funcion cagona que retorna el template rendereado
    """
    return render_template('home.html')


# cuando se corre directamente, correr la aplicacion
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
