// Funcion consulta con promises
function requestHandler(req, res) {
  User.findById(req.userId)
    .then(function(User){
      Tasks.findById(user.tasksId)
    })
    .then(function(task) {
      tasks.completed = true
      return tasks.save()
    })
    .then(function() {
      res.send('Tasks completed')
    })
    .catch(function(err) {
      res.send(error)
    })
}