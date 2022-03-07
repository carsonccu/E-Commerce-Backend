// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category

// Categories have many Products

// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)

Product.belongsTo(Category, {
  foreignKey: "category_id",

});

Category.hasMany(Product, {
  foreignKey: "category_id",
  onDelete: "CASCADE"
});

Product.belongsToMany(Tag,
  {
    through: {
      model: ProductTag,
      unique: false
    },
    as: 'product_to_tag',
  })

Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'tag_to_product',
});
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};