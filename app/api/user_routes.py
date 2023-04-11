from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import db, User, Group

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
# @login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()

# /<int:id1>/pin-group/<int:id2>
@user_routes.route('/<int:user_id>/pin-group/<int:group_id>')
@login_required
def pin_group(user_id, group_id):
    user = User.query.get(user_id)
    group = Group.query.get(group_id)
    user.pin_group_to_user(group)
    db.session.commit()

    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}

@user_routes.route('/<int:user_id>/unpin-group/<int:group_id>')
@login_required
def unpin_group(user_id, group_id):
    user = User.query.get(user_id)
    group = Group.query.get(group_id)
    user.unpin_group_from_user(group)
    db.session.commit()

    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}