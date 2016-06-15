const User = require('../../models/user');
const LocalStrategy = require('passport-local');


// Create local strategy
const localOptions = { usernameField: 'email' };
module.exports = new LocalStrategy(localOptions, function(email, password, done) {
  // Verify this email and password, call done with the user
  // if it is the correct email and password
  // otherwise, call done with false
  User.findOne({ email: email }, function(err, user) {
    if (err) { return done(err); }
    if (!user) { return done(null, false); }

    // compare passwords - is `password` equal to user.password?
    user.comparePassword(password, function(err, isMatch) {
      if (err) { return done(err); }
      if (!isMatch) { return done(null, false); }

      return done(null, user);
    });
  });
});
/*
A great portion of this code comes directly from Stephen Grider's redux course on Udemy. 
-- https://www.udemy.com/react-redux-tutorial/learn/v4/content --
I highly reccomend checking out his youtube channel 'rally coding' as well.

This file is from a lesson of his on user authorization middleware, it required zero refactoring for the 
purposes of this project, and has been monumental in helping cement my understanding of hiw to apply middleware to code.
The last thing I would want to do is take credit for the work of this excellent instructor 
especially when his tutorials helped me establish a solid foundation for creating full scale apps with the MERN
stack.

*/
