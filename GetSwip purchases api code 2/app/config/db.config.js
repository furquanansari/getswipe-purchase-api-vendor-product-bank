module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "@0root9@",
    DB: "swipe_purchases_copy",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };