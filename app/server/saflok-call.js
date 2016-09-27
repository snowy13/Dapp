//import { HTTP } from 'meteor/http';

Meteor.startup(function () {
	  Meteor.methods({
	    postSaflok: function () {
		     console.log('Called saflok contract');
		     HTTP.call('POST',
                   'http://localhost:3080/deals' , {
                        data: {"id": "Jim", "buyer": "Mike", "seller": "Laura", "amount": 23984},
                        headers: { 'Content-Type': 'application/json'}
                        },
                    function(error, result) {
                        if (error) {
                            console.log('SERVER ERRR');
                            console.log(error);
                        } else
                            console.log('SERVER RESULT');
                            console.log(result);
                        });
	    }

	 
	 })
});

