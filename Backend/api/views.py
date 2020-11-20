from flask import Blueprint, jsonify, request
from .models import Birthday
from . import db

main = Blueprint('main', __name__)


@main.route('/')
def index():
    return '<h1>Python Flask API</h1>'


@main.route('/add_birthday', methods=['POST'])
def add_birthday():
    birthday_data = request.get_json(force=True)

    new_birthday = Birthday(
        name=birthday_data['name'], age=birthday_data['age'], image=birthday_data['image'])

    db.session.add(new_birthday)
    db.session.commit()

    return 'Done', 201


@main.route('/birthdays')
def birthdays():
    birthday_list = Birthday.query.all()
    birthdays = []

    for birthday in birthday_list:
        birthdays.append(
            {'id': birthday.id, 'name': birthday.name, 'age': birthday.age, 'image': birthday.image})
    return jsonify({'birthdays': birthdays})


@main.route('/birthday/<id>', methods=['GET'])
def getBirthday(id):
    birthday = Birthday.query.filter_by(id=id).first()
    print(birthday.name, birthday.age, birthday)
    return jsonify({'id': birthday.id, 'name': birthday.name, 'age': birthday.age, 'image': birthday.image})


@main.route('/birthday/<id>', methods=['DELETE'])
def deleteBirthday(id):
    birthday = Birthday.query.filter_by(id=id).first()
    db.session.delete(birthday)
    db.session.commit()
    return jsonify({'msg': 'Birthday deleted'})
