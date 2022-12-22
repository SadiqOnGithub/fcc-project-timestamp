var express = require('express');
var cors = require('cors');

const { errorHandler } = require('./middleware/errorHandler');


// configs
var app = express();
app.use(cors({ optionsSuccessStatus: 200 }));  // some legacy browsers choke on 204


// middleware
// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));


//routes
app.get("/", (req, res) => res.sendFile(__dirname + '/views/index.html') );
app.use('/api', require('./router/timestamp'))


// errors
app.use(errorHandler);


// listen for requests :)
var listener = app.listen(process.env.PORT, () => {
	console.log('Your app is listening on port ' + listener.address().port);
});
