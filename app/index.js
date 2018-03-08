const fs = require('fs');
const https = require('https');
const express = require('express');
const morgan = require('morgan');
const options = {
  pfx: fs.readFileSync('certificate.pfx'),
  passphrase: fs.readFileSync('certificatepassword.txt')
};

const app = express();
app.use(morgan('combined'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
});

var listener = https.createServer(options, app).listen(process.env.PORT || 443, function() {
  console.log('listening on port ' + listener.address().port);
});

