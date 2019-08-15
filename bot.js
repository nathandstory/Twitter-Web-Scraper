//bot.js

const cheerio = require('cheerio');
const URL = require('url-parse');
const request = require('request');
const twit = require('twit');
const configTwitter = require('./configTwitter.js');
const Twitter = new twit(configTwitter);

//Twitter.post(
//	'statuses/update',
//	{ status: 'Hello World!' },
//	(err, data, response) => {console.log(err, data, response);}
//	)
Twitter.get('search/tweets', { q: 'chainlink', count: 1}, function(err, data, response) {
  console.log(data)
})

makeHTTPRequest()

function makeHTTPRequest(){
request("https://coinmarketcap.com", (err, response, body) => {
  if (err) { return console.log(err); }
  console.log("Status code: " + response.statusCode);
  var cont = cheerio.load(body); 
  //console.log("Page title: " + cont('h1').text());
  const cryptoTable = cont('.table floating-header  no-footer dataTable').find('tbody');
  
  console.log(cryptoTable.html());
});
}

setInterval(makeHTTPRequest, 10000)
