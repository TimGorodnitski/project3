const router = require("express").Router();
const Snippet = require("../client/models/Snippet");
const User = require("../client/models/Users");
const Note = require("../client/models/Note");
const Article = require("../client/models/Article");


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

router.post("/note", function(req, res) {
  // as long as req.body matches what the model expects, this should insert into the database
 Note.create(req.body)
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

router.get("/articles/:id", function(req, res) {
  Article.findOne({ _id: req.params.id })
    .populate("note")
    .then(function(dbArticle) {
      res.json(dbArticle);
    })
    .catch(function(err) {
      res.json(err);
    });
});

router.post("/articles/:id", function(req, res) {
  Note.create(req.body)
    .then(function(dbNote) {
      return Article.findOneAndUpdate({ _id: req.params.id }, { note: dbNote._id }, { new: true });
    })
    .then(function(dbArticle) {
      res.json(dbArticle);
    })
    .catch(function(err) {
      res.json(err);
    });
});


router.delete("/delete/:id", function(req, res) {
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

router.post("/scrape", function(req, res) {

  Article.create(req.body)
  .then(() => {
    res.json(true);
    //console.log("successful")
  })
  .catch((err) => {

    res.json(err);
    //console.log(err)
  });
});

router.delete("/notes/:id", function(req,res){
  Note.findByIdAndRemove(req.params.id, function(err, response){
    if (err) throw err;
    res.json(response);    
  })
})


router.get("/articles", function(req, res) {
  Article.find({})
    .then(function(dbArticles) {
      res.json(dbArticles);
    })
    .catch(function(err) {
      res.json(err);
    });
});




module.exports = router;