const router = require("express").Router();
const Snippet = require("../client/models/Snippet");
const User = require("../client/models/User");


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

router.delete("/delete/:id", function(req, res) {

  console.log(req.params.id)
  Snippet.deleteOne({_id: req.params.id})
    .then(function(snippet) {
      // If we were able to successfully delete a Snippet, send it back to the client
      res.json(snippet);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});



module.exports = router;