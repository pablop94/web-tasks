require('dotenv').config()
const express = require('express');
const app = express();
const path = require('path');
const routes = require('./routes')

const PORT = process.env.PORT;
const HOST = process.env.HOST;
 
// Static Middleware
app.use(express.static(path.join(__dirname, 'public')))

routes.configure(app)

app.listen(PORT, HOST, function (err) {
    if (err) console.log(err);
    console.log("Server listening on", HOST, PORT);
});