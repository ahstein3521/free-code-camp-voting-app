const express = require('express');
const favicon = require('express-favicon');
const bodyParser = require('body-parser');
const cors=require('cors');
const app = express();
const passport=require('passport');
const session=require('express-session')
const mongoose = require('mongoose');

// require('./secret') uncomment for local build

mongoose.connect(process.env.MONGO_URI);

app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
app.use(bodyParser.urlencoded({extended:false}));


require('./routes/ballotRoute')(app)
require('./routes/authRoute')(app)


const port = process.env.PORT || 7777;
app.listen(port);



console.log('Server listening on:', port);

