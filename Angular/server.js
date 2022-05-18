// const express = require('express');
// const app = express();
// app.use(requireHTTPS);

// app.use(express.static('./dist/smart-shoppers'));
// app.get('/*', function(req, res) {
//     res.sendFile('index.html', {root: 'dist/smart-shoppers/'}
//   );
// });

// app.listen(process.env.PORT || 8080);

const express = require('express');
const https = require('https');
const http = require('http');
const fs = require('fs');

const path = require('path');

const options = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
  };


const app = express();


const httpport = process.env.PORT || 8080;

const httpsport = process.env.PORT || 8443;

app.use(express.static(__dirname + '/dist/smart-shoppers'));

app.get('/*', (req, res) => res.sendFile(path.join(__dirname)));

const httpserver = http.createServer(app);
const httpsserver = https.createServer(options, app);


httpserver.listen(httpport, () => console.log(`App running on: http://localhost:${httpport}`));

httpsserver.listen(httpsport, () => console.log(`App running on: https://localhost:${httpsport}`));