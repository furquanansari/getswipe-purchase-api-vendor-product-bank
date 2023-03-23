module.exports = (sequelize, Sequelize) => {
  const vendor_Details = sequelize.define("vendor_Details", {
    name: { type: Sequelize.STRING },
    dial_code: { type: Sequelize.STRING },
    phone: { type: Sequelize.BIGINT },
    email: { type: Sequelize.STRING },
    cc_email: { type: Sequelize.STRING },
    gstin: { type: Sequelize.INTEGER },
    company_name: { type: Sequelize.STRING },
    address_line1: { type: Sequelize.STRING },
    address_line2: { type: Sequelize.STRING },
    city: { type: Sequelize.STRING },
    state: { type: Sequelize.STRING },
    pincode: { type: Sequelize.BIGINT },
    notes: { type: Sequelize.STRING },
    tags: { type: Sequelize.STRING },
    tds: { type: Sequelize.BOOLEAN },
    linked_customer: { type: Sequelize.INTEGER },
    opening_balance_type: { type: Sequelize.BOOLEAN },
    opening_balance: { type: Sequelize.DOUBLE },
    balance: { type: Sequelize.DOUBLE },
  });

 

  return vendor_Details;

};
