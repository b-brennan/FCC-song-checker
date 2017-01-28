
var request = require('request');
request('http://www.azlyrics.com/lyrics/mfdoom/rhymeslikedimes.html', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Print the google web page.
  }
})
