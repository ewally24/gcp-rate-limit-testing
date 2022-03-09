// allow for env file
require('dotenv').config();
// Packages (required)
const exp = require ('express');
const path = require ('path');
const http = require ('http');
// Files (required)
const express = require('./configs/express');
// SSL keys for dev env
// const options = {
//     key: fs.readFileSync(path.resolve(__dirname, 'configs/key.pem')),
//     cert: fs.readFileSync(path.resolve(__dirname,  'configs/cert.pem')),
// };

// Initiate express file
const app = express();

// Set __dirname for directories
app.use(exp.static(__dirname + "../../"));
app.use(exp.static(__dirname + "../"));
app.use(exp.static(__dirname + "/public"));


// Server Initialization
const httpServer = http.createServer(app);

httpServer.listen(2400, "127.0.0.1", () => console.log('Test page running on:', 'http://127.0.0.1:2400/'));


