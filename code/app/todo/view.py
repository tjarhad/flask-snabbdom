from flask import Blueprint, jsonify, render_template

to_do = Blueprint('todo', __name__, url_prefix='/todo')


@to_do.route('/all')
def get_all_todo():
    return render_template('todo.html')