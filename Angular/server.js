//Importing dependencies
const express = require('express');
var path = require('path');

//Starting Express app
const app = express();

//Set the base path to the angular-test dist folder
app.use(express.static(path.join(__dirname, 'dist/smart-shoppers')));
app.use(express.static('/assets'));

//Any routes will be redirected to the angular app
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist/smart-shoppers/index.html'));
});

//Starting server on port 8081
app.listen(8080, () => {
    console.log('Server started!');
    console.log('on port 8080');
});












// const express = require('express');
// const app = express();
// app.use(requireHTTPS);

// app.use(express.static('./dist/smart-shoppers'));
// app.get('/*', function(req, res) {
//     res.sendFile('index.html', {root: 'dist/smart-shoppers/'}
//   );
// });

// app.listen(process.env.PORT || 8080);

// const express = require('express');
// const https = require('https');
// const http = require('http');
// const fs = require('fs');

// const path = require('path');

// const options = {
//     key: fs.readFileSync('key.pem'),
//     cert: fs.readFileSync('cert.pem')
//   };


// const app = express();


// const httpport_local = process.env.PORT || 3000;

// const httpsport_local = process.env.PORT || 8443;

// app.use(express.static(__dirname + '/dist/smart-shoppers'));

// app.get('/*', (req, res) => res.sendFile(path.join(__dirname)));

// const httpserver = http.createServer(app);
// const httpsserver = https.createServer(options, app);
// app.listen(process.env.PORT)

// app.listen(process.env.PORT, () => console.log(`App running on: http://localhost:${process.env.PORT}`));

// httpserver.listen(httpport, () => console.log(`App running on: http://localhost:${httpport}`));

// httpsserver.listen(httpsport, () => console.log(`App running on: https://localhost:${httpsport}`));