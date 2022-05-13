// const { Model, DataTypes } = require("sequelize")

// const sequelize = require("../config/connection")

// class INDEX extends Model {}

const Category = require('./Category');
const Product = require('./Product');
const ProductTag = require('./ProductTag');
const Tag = require('./Tag');

Category.hasMany(Product, {
    foreignKey: 'category_id'
});

//Products belongsTo Category
Products.belongsTo(Category, {
    foreignKey: 'category_id',
    onDelete: 'CASCADE'
});

module.exports = { Product, Category, ProductTag, Tag };