const { deleteNew } = require("../controllers/NewsController");
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

  insertNew: (author, date, title, image) => {
    return new Promise((accepted, rejected) => {
      db.query(
        "INSERT INTO news (author, date, title, image) VALUES (?, ?, ?, ?)",
        [author, date, title, image],
        (error, results) => {
          if (error) {
            rejected(error);
            return;
          }
          accepted(results.insertCode);
        }
      );
    });
  },

  updateNew: (id, author, date, title, image) => {
    return new Promise((accepted, rejected) => {
      db.query(
        "UPDATE news SET author=?, date=?, title=?, image=? WHERE id=?",
        [author, date, title, image, id],
        (error, results) => {
          if (error) {
            rejected(error);
            return;
          }
          accepted(results);
        }
      );
    });
  },

  deleteNew: (id) => {
    return new Promise((accepted, rejected) => {
      db.query("DELETE FROM new WHERE id=?", [id], (error, results) => {
        if (error) {
          rejected(error);
          return;
        }
        accepted(results);
      });
    });
  },
};
