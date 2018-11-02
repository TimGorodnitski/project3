const mongoose = require("mongoose");
const router = require("express").Router();
const Snippet = require("../client/models/Snippet");
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


// Authentication Routing

router.get('/login', (req, res) => {
  const flashMessages = res.locals.getMessages();
  console.log(flashMessages);

  if (flashMessages.error) {
    res.render('login', {
      showErrors: true,
      errors: flashMessages.error
    });
  } else {
    res.render('login', {user: req.user, errors: []});
  }
});

router.get('/signup', (req, res) => {
  const flashMessages = res.locals.getMessages();
  console.log('FLASH MESSAGES========================', flashMessages.error);
  let errorsArray = flashMessages.error || [];
  console.log('value to be passed in', errorsArray);
  res.render('signup', {user: req.user, errors: errorsArray});
});

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