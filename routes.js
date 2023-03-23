const tasks = require('./tasks')

function configure(app) {
  const tasks = ["lock", "shutdown"]
  app.get('/', function (req, res, next) {
    const port = process.env.PORT;
    const host = process.env.HOST;

    res.render('pages/index', { host, port, tasks: tasks.map(name => ({ name, url: `http://${host}:${port}/${name}/` })) });
  })

  tasks.forEach(name => registerTask(app, name))
}

function registerTask(app, task_name) {
  app.get(`/${task_name}`, function (req, res, next) {
    console.log(`${task_name} received`)
    tasks[task_name]()
  })
}

module.exports = {
  configure,
}