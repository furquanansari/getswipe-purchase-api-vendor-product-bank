module.exports = (sequelize, Sequelize) => {
  const product_Details = sequelize.define("product_Details", {
    item_type: { type: Sequelize.STRING },
    item_name: { type: Sequelize.STRING,},
    selling_price: { type: Sequelize.DOUBLE, },
    price_unit: { type: Sequelize.STRING },
    barcode: { type: Sequelize.BIGINT },
    purchase_price_tax: { type: Sequelize.INTEGER },
    purchase_price_no_tax: { type: Sequelize.INTEGER },
    hsn: { type: Sequelize.STRING },
    desc: { type: Sequelize.STRING },
    category: { type: Sequelize.STRING },
    product_image: { type: Sequelize.STRING },
    show_online: { type: Sequelize.BOOLEAN },
    not_for_sale: { type: Sequelize.BOOLEAN },
    opening_qty: { type: Sequelize.INTEGER },
    opening_purchase_price: { type: Sequelize.INTEGER },
    opening_stock_price: { type: Sequelize.INTEGER },
    discount_percent: { type: Sequelize.DOUBLE },
    discount_amount: { type: Sequelize.DOUBLE },
    show_discount_in: { type: Sequelize.BOOLEAN },
    mini_stock_value: { type: Sequelize.INTEGER },
  });

  return product_Details;
};
