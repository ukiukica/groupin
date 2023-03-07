from .db import db, environment, SCHEMA, add_prefix_for_prod


class Group(db.Model):
    __tablename__ = 'groups'
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False, unique=True)
    details = db.Column(db.String(2000), nullable=False, unique=True)
    link = db.Column(db.String(255), nullable=False, unique=True)
    img = db.Column(db.String(255), nullable=False, unique=True)

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'details': self.details,
            'link': self.link
        }
