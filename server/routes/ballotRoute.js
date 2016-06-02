const Ballots = require('../models/ballot');
const User = require('../models/user');

module.exports=function(app){

	app.get('/ballots',function(req,res){
		Ballots.find({},function(err,data){
			if(err){
				return res.status(500).send('Error retrieving data')
			}
			return res.json(data)
		})
	})
	app.get('/ballots/:id',function(req,res){
		Ballots.findOne({_id:req.params.id},function(err,data){
			if(err){
				return res.status(500).send('Error retrieving data')
			}
			return res.json(data)
		})
	})	
	app.post('/ballots',function(req,res){
		
		var body=req.body;
		Ballots.create(body,function(err){
			if(err){
				return res.status(500).send('Error posting new ballot')
			}
			return res.json({new_vote:body})
		})
	})

	app.put('/ballots/:id',function(req,res){

		var id=req.params.id;
		var body=req.body;

		Ballots.findByIdAndUpdate({_id:id},body,{new: true}, function(err){
		if (err) {
            return res.status(500).json({ err: err.message });
          }
          res.json({ message: 'Vote Submitted' });   
		})
	})
	

	app.delete('/ballots/:id', function(req, res) {
	  
	  var id = req.params.id;
	  Ballots.findByIdAndRemove(id, function(err) {
	    if (err) {
	      return res.status(500).json({ error: err.message });
	    }
	    res.json({ message: 'Ballot Deleted' });
	  });
	});
	app.get('/users/show',function(req,res){
		User.find({},function(err,d){
			var results=(err)? err:d;
			res.json(results)
		})
	})
}