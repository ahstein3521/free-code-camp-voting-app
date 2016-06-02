const express = require('express');
const bodyParser = require('body-parser');
const cors=require('cors');
const app = express();
const passport=require('passport');
const session=require('express-session')
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:vote/vote');

app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
app.use(bodyParser.urlencoded({extended:false}));


require('./routes/ballotRoute')(app)
require('./routes/authRoute')(app)




// Server Setup
const port = process.env.PORT || 7777;
app.listen(port);



console.log('Server listening on:', port);


//if logged in: Home route redirects to the /ballots