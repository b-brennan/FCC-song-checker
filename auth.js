var request = require('request');
var q = require('q');
var accessToken = 'NONE';

/*
q(request({
  url: 'https://accounts.spotify.com/api/token',
  method: 'POST',
  auth: {
    user: 'cc786c33043441a0b4dbce837c33ef98',
    pass: 'f41fd8b65e174a96b3b4fb89978f120a'
  },
  form: {
    'grant_type': 'client_credentials'
  }
}, function(err, res) {
  var json = JSON.parse(res.body);
  accessToken = json.access_token;
  console.log("Access Token:", json.access_token);
});).then(
request({
  url: 'https://api.spotify.com/v1/users/122958530/playlists/7xfNecdGJwt6oS6STe8T31/tracks',
  auth: {
    'bearer': accessToken
  }
}, function(err, res) {
  console.log(res.body);
});
);
*/

q(function(resolve,reject) {
	request( {
		url: 'https://accounts.spotify.com/api/token',
	  	method: 'POST',
  		auth: {
    		user: 'cc786c33043441a0b4dbce837c33ef98',
    		pass: 'f41fd8b65e174a96b3b4fb89978f120a'
  		},
  		form: {
    	'grant_type': 'client_credentials'
  		}
	} , function(err, data) {
  		if (err) {
				deferred.reject();
			}
			token = JSON.parse(res.body);
            console.log(token);
			deferred.resolve();
	});

deferred.promise.then(
	function() {
        console.log("Resolved!");
		request({
            url: 'https://api.spotify.com/v1/users/122958530/playlists/7xfNecdGJwt6oS6STe8T31/tracks',
            auth: {
                'bearer': token.access_token
            }
		}, function(err, res) {
	  	    console.log(res.body);
		})
	});
