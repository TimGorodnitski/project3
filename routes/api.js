const router = require("express").Router();
const Snippet = require("../client/models/Snippet");

router.post("/save", function(req, res) {
  // as long as req.body matches what the model expects, this should insert into the database
 Snippet.create(req.body)
  .then(() => {
    res.json(true);
  })
  .catch((err) => {
    // if not, we can at least catch the error
    res.json(err);
  });
});

router.get("/snippets", function(req, res) {
  // as long as req.body matches what the model expects, this should insert into the database
 Snippet.find()
  .then((allSnippets) => {
    res.json(allSnippets);
  })
  .catch((err) => {
    // if not, we can at least catch the error
    res.json(err);
  });
});

module.exports = router;