const db = require("../db.js");

module.exports = {
  searchAll: () => {
    return new Promise((accepted, rejected) => {
      db.query("SELECT * FROM news", (error, results) => {
        if (error) {
          rejected(error);
          return;
        }
        accepted(results);
      });
    });
  },
};
