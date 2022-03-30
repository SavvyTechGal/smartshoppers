from marshmallow import Schema, fields

class ProductsSchema(Schema):
    title = fields.Str()
    price = fields.Float()
    thumbnail = fields.Str()
    source = fields.Str()
    rating = fields.Str()
    link = fields.Str()
    extensions = fields.fields.Str()