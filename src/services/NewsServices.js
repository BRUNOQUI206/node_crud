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

  searchAllReverse: () => {
    return new Promise((accepted, rejected) => {
      db.query("SELECT * FROM news ORDER BY id DESC;", (error, results) => {
        if (error) {
          rejected(error);
          return;
        }
        accepted(results);
      });
    });
  },
};
