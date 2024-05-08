const db = require("../db");

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

  searchNew: (id) => {
    return new Promise((accepted, rejected) => {
      db.query("SELECT * FROM news WHERE id = ?", [id], (error, results) => {
        if (error) {
          rejected(error);
          return;
        }
        if (results.length > 0) {
          accepted(results[0]);
        } else {
          accepted(false);
        }
      });
    });
  },
};
