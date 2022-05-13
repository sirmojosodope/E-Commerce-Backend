const { ProductTag } = require('./models');

const producttagData = 
[
    {
      product_id: "Hoodies",
    },
    {
      product_id: "T-Shirts",
    },
    {
      product_id: "Hats",
    },
    {
      product_id: "Home",
    },
  ];
  
  const seedProductTags = () => ProductTag.bulkcreate(producttagData);

  module.exports = seedProductTags