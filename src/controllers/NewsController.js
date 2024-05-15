const NewsService = require("../services/NewsServices");

module.exports = {
  searchAll: async (req, res) => {
    let json = { error: "", result: [] };
    let news = await NewsService.searchAll();
    for (let i in news) {
      json.result.push({
        id: news[i].id,
        author: news[i].author,
        date: news[i].date,
        title: news[i].title,
        image: news[i].image,
      });
    }
    res.json(json);
  },

  searchAllReverse: async (req, res) => {
    let json = { error: "", result: [] };
    let news = await NewsService.searchAllReverse();
    for (let i in news) {
      json.result.push({
        id: news[i].id,
        author: news[i].author,
        date: news[i].date,
        title: news[i].title,
        image: news[i].image,
      });
    }
    res.json(json);
  },

  searchNew: async (req, res) => {
    let json = { error: "", result: {} };

    let id = req.params.id;
    let New = await NewsService.searchNew(id);

    if (New) {
      json.result = New;
    }
    res.json(json);
  },

  insertNew: async (req, res) => {
    let json = { error: "", result: {} };

    let author = req.body.author;
    let date = req.body.date;
    let title = req.body.title;
    let image = req.file ? req.file.originalname : null;

    if (author && date && title && image) {
      try {
        let NewCode = await NewsService.insertNew(author, date, title, image);
        json.result = {
          id: NewCode,
          author,
          date,
          title,
          image,
        };
      } catch (error) {
        json.error = "Error inserting new";
      }
    } else {
      json.error = "Fields not sent or file not uploaded";
    }
    res.json(json);
  },

  updateNew: async (req, res) => {
    let json = { error: "", result: {} };

    let id = req.params.id;
    let author = req.body.author;
    let date = req.body.date;
    let title = req.body.title;
    let image = req.file ? req.file.originalname : req.body.image;

    if (id && author && date && title) {
      try {
        await NewsService.updateNew(id, author, date, title, image);
        json.result = {
          id,
          author,
          date,
          title,
          image,
        };
      } catch (error) {
        json.error = "Error updating new";
      }
    } else {
      json.error = "Fields not sent or file not uploaded";
    }
    res.json(json);
  },

  deleteNew: async (req, res) => {
    let json = { error: "", result: {} };
    await NewsService.deleteNew(req.params.id);
    res.json(json);
  },
};
