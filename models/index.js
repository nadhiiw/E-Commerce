// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category,{
  unique: false,
  foreignKey:'category_id'
})
Category.hasMany(Product,{
  unique: false,
  foreignKey:'category_id'
})

Product.belongsToMany(Tag,{
  through: productTag,
  unique: false,
  foreignKey:'product_id'
});

Tag.belongsToMany(Product,{
  through: productTag,
  unique: false,
  foreignKey:'product_id'
})

// Categories have many Products

// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
