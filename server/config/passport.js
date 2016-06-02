const passport = require('passport');
const jwtLogin=require('./Strategies/jwt.strategy')
const localLogin=require('./Strategies/local.strategy')



passport.use(jwtLogin);
passport.use(localLogin);