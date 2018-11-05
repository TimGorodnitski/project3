const mongoose = require("mongoose");
const router = require("express").Router();
const Snippet = require("../models/Snippet");
const Note = require("../models/Note");
const Article = require("../models/Article");
var User = mongoose.model('User');
const passport = require('passport');


router.post("/save", function (req, res) {

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

router.post("/note", function (req, res) {
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

router.post("/likeArticle", function (req, res) {

  Article.create(req.body)
    .then(() => {
      res.json(true);
    })
    .catch((err) => {
      // if not, we can at least catch the error
      res.json(err);
    });
});

router.get("/notecreated", function (req, res) {
  Note.find()
    .then((allNote) => {
      res.json(allNote);
    })
    .catch((err) => {

      res.json(err);
    });
});

router.get("/snippets/:user", function (req, res) {
  // as long as req.body matches what the model expects, this should insert into the database
  Snippet.find({ creator: req.params.user })
    .then((mySnippets) => {
      res.json(mySnippets);
    })
    .catch((err) => {
      // if not, we can at least catch the error
      res.json(err);
    });
});

router.get("/allsnippets/", function (req, response) {
  // as long as req.body matches what the model expects, this should insert into the database
  Snippet.find({ public: true })
    .then((allSnippets) => {
      response.json(allSnippets);
    })
    .catch((err) => {
      // if not, we can at least catch the error
      res.json(err);
    });
});

router.get("/articles/:id", function (req, res) {
  Article.find({ user: req.params.id })
    .then(function (dbArticle) {
      res.json(dbArticle);
    })
    .catch(function (err) {
      res.json(err);
    });
});

router.post("/articles/:id", function (req, res) {
  Note.create(req.body)
    .then(function (dbNote) {
      return Article.findOneAndUpdate({ _id: req.params.id }, { note: dbNote._id }, { new: true });
    })
    .then(function (dbArticle) {
      res.json(dbArticle);
    })
    .catch(function (err) {
      res.json(err);
    });
});



router.delete("/delete/:id", function (req, res) {
  Snippet.deleteOne({ _id: req.params.id })
    .then(function (snippet) {
      // If we were able to successfully delete a Snippet, send it back to the client
      res.json(snippet);
    })
    .catch(function (err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});
router.delete("/article/:id", function (req, res) {
  Article.deleteOne({ _id: req.params.id })
    .then(function (article) {
      // If we were able to successfully delete a Snippet, send it back to the client
      res.json(article);
    })
    .catch(function (err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});

router.post("/scrape", function (req, res) {
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

router.delete("/notes/:id", function (req, res) {
  Note.findByIdAndRemove(req.params.id, function (err, response) {
    if (err) throw err;
    res.json(response);
  })
})

router.get("/articles", function (req, res) {
  Article.find({})
    .then(function (dbArticles) {
      res.json(dbArticles);
    })
    .catch(function (err) {
      res.json(err);
    });
});

// Authentication Routing


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
        if (err) {
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

var loggedIn = false;
router.get("/auth", (req, res) => {
  if (req.session.user) {
    res.json({
      username: req.session.user.username,
      id: req.session.user._id,
      loggedIn,
    });
  } else if (req.headers.cookie.indexOf('token=') !== -1) {
    const cookie = req.headers.cookie.match(/(?<=token=)[^ ;]*/)[0];
    db.User.findOne({
      where: {
        token: cookie,
      },
    })
      .then((user) => {
        if (user !== null) {
          req.session.user = {
            username: user.userName,
            id: user._id,
            loggedIn,
          };
          res.json(req.session.user);
        } else {
          res.clearCookie('token');
          res.end();
        }
      })
      .catch((err) => {
        res.json(err);
      });
  } else {
    res.end();
  }
}
)


router.post('/login', passport.authenticate('local'),
  function (req, res) {
    User.findOne({ username: req.body.username }).then(user => {
      loggedIn = true;
      req.session.user = user;
      const token = 't' + Math.random();
      res.cookie('token', token, {
        expires: new Date(Date.now() + 999999999),
      }).json(req.session.user);
      User.update({ token }, { where: { id: user.id } }).then(
        (data) => {
          console.log(data);
        },
      );
    }).catch((err) => {
      res.json(err);
    });
  })


module.exports = router;