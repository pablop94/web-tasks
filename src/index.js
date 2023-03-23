require('dotenv').config()
const express = require('express');
const app = express();
const routes = require('./routes')

const PORT = process.env.PORT;
const HOST = process.env.HOST;

// Static Middleware
app.set('view engine', 'ejs');

routes.configure(app)

app.listen(PORT, HOST, function (err) {
  if (err) console.log(err);
  console.log("Server listening on", HOST, PORT);
});