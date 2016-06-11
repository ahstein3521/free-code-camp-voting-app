const passport = require('passport');
const jwtLogin=require('./strategies/jwt.strategy')
const localLogin=require('./strategies/local.strategy')



passport.use(jwtLogin);
passport.use(localLogin);