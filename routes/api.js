const mongoose = require("mongoose");
const router = require("express").Router();
const Snippet = require("../models/Snippet");
const Note = require("../models/Note");
const Article = require("../models/Article");
var User = mongoose.model('User');
const passport = require('passport');


router.post("/save", function(req, res) {

  let d = new Date();
  req.body.createdAt = d.toDateString();
  const snippet = req.body;

  // as long as req.body matches what the model expects, this should insert into the database
 Snippet.create(snippet)
  .then(() => {
    res.json(true);
  })
  .catch((err) => {
    // if not, we can at least catch the error
    res.json(err);
  });
});

router.post("/note", function(req, res) {
  let d = new Date();
  req.body.createdAt = d.toDateString();
  const notes = req.body;
  // as long as req.body matches what the model expects, this should insert into the database
 Note.create(notes)
  .then(() => {
    res.json(true);
  })
  .catch((err) => {
    // if not, we can at least catch the error
    res.json(err);
  });
});

router.post("/likeArticle", function(req, res) {


 Note.create(notes)
  .then(() => {
    res.json(true);
  })
  .catch((err) => {
    // if not, we can at least catch the error
    res.json(err);
  });
});

router.get("/notecreated", function(req, res) {
 Note.find()
  .then((allNote) => {
    res.json(allNote);
  })
  .catch((err) => {

    res.json(err);
  });
});

router.get("/snippets", function(req, response) {
  // as long as req.body matches what the model expects, this should insert into the database
 Snippet.find({public:true})
  .then((allSnippets) => {
    response.json(allSnippets);
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

router.get("/snippets/:user", function(req, res) {
  // as long as req.body matches what the model expects, this should insert into the database
 Snippet.find({creator: req.params.user})
  .then((mySnippets) => {
    res.json(mySnippets);
  })
  .catch((err) => {
    // if not, we can at least catch the error
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

// Authentication Routing


router.post('/login', passport.authenticate('local'), 
  function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.json(req.user);
  })


router.post('/signup', (req, res, next) => {
  console.log("/signup post: " + req.body);

  req.checkBody('username', 'Username is required.').notEmpty();
  req.checkBody('password', 'Password is required.').notEmpty();

  req.getValidationResult().then((result) => {
    if (result.isEmpty() === false) {
      //bad
      console.log('errors is empty', result.isEmpty());
      result.array().forEach((error) => {
        req.flash('error', error.msg);
      });
      res.redirect('/');
    } else {

      //good
      const user = new User({
        username: req.body.username,
        password: req.body.password
      });

      user.save((err) => {
        if(err) {
          console.log('There was an error saving the user.', err);
          if (err.message.indexOf('duplicate key error') > -1) {
            req.flash('error', 'Username already in use.');
          } else {
            req.flash('error', 'There was a problem with your registration.');
          };
          console.log(req.flash);
          res.redirect('/');
        } else {
          next();
        }
      });
    }
  })

}
, passport.authenticate('local', {
  successRedirect: '/',
})
);

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});


module.exports = router;