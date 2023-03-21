const tasks = require('./tasks')

function configure(app){
  app.get('/', function (req, res, next) {
    res.render('index.html');
  })
  
  app.get('/lock', function (req, res, next) {
      console.log('lock received')
      tasks.lock()
  })
}

module.exports = {
  configure,
}