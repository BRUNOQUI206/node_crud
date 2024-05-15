const express = require("express");
const router = express.Router();

const NewsController = require("./controllers/NewsController");

router.get("/news", NewsController.searchAll);
router.get("/newsReverse", NewsController.searchAllReverse);
router.get("/new/:id", NewsController.searchNew);
router.post("/new", NewsController.insertNew);
router.put("/new/:id", NewsController.updateNew);

module.exports = router;
