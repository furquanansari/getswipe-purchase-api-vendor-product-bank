module.exports = (sequelize, Sequelize) => {
    const bank_Details = sequelize.define("bank_Details", {
      bank_ac_no: { type: Sequelize.BIGINT },
      ifsc_code: { type: Sequelize.STRING},
      bank_name: { type: Sequelize.STRING},
      branch_name: { type: Sequelize.STRING},
      upi: { type: Sequelize.STRING },
      notes: { type: Sequelize.STRING },
      default: { type: Sequelize.BOOLEAN }
    });

/*     const fetch_ifsc = sequelize.define("fetch_ifsc", {
      bank_name: { type: Sequelize.STRING},
      branch_name: { type: Sequelize.STRING},
    },
  ); */
  
    return bank_Details;
  };
  