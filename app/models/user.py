from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin

pinned_groups = db.Table(
    'pinned',
    db.Column('group_id', db.Integer, db.ForeignKey(add_prefix_for_prod('groups.id'))),
    db.Column('user_id', db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')))
)


class User(db.Model, UserMixin):
    __tablename__ = 'users'
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)

    pinned = db.relationship('Group', secondary=pinned_groups, lazy='subquery',
        backref=db.backref('users', lazy=True))

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)
    
    def pin_group_to_user(self, group):
        self.pinned.append(group)
        return self

    def unpin_group_from_user(self, group):
        self.pinned.remove(group)
        return self

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'pinned': [group.id for group in self.pinned[0:]]
        }
