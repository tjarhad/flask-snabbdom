from flask import Flask

from app.todo.view import to_do
from app.counter.view import counter
from app.assets import assets


# export FLASK_DEBUG=1

def create_app():
    app = Flask(__name__)

    app.register_blueprint(to_do)
    app.register_blueprint(counter)

    assets.init_app(app)
    with app.app_context():
        assets.config['BROWSERIFY_TRANSFORMS'] = ['babelify']

    return app
