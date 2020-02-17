from flask import Blueprint, jsonify, render_template

counter = Blueprint('counter', __name__, url_prefix='/counter')


@counter.route('/')
def get_counter():
    return render_template('counter.html')