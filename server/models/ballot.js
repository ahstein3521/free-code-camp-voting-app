var mongoose=require('mongoose');
var Schema=mongoose.Schema;


var BallotSchema=new Schema({
  author:String,
  title:String,
  options:Array
  
});

module.exports =mongoose.model('Ballot',BallotSchema)