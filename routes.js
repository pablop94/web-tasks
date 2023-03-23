const tasks = require('./tasks')

function configure(app) {
  app.get('/', function (req, res, next) {
    res.render('index.html');
  })

  registerTask(app, "lock")
  registerTask(app, "shutdown")
}

function registerTask(app, task_name){
  app.get(`/${task_name}`, function (req, res, next) {
    console.log(`${task_name} received`)
    tasks[task_name]()
  })
}

module.exports = {
  configure,
}