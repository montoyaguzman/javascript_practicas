// Funcion consulta
function requestHandler(req, res) {
  User.findById(req.userId)
}

/*
Tome en cuenta que la linea 3 requier un tiempo de ejecuccion que
NodeJS no esperara.
Lo que debe hacer es implementar una solucion que permita seguir el flujo
de Node y que en cuanto la BD tenga respuesta, esta le sea notificada a
Node.
*/

// Funcion consulta con callbacks
function requestHandler(req, res) {
  User.findById(req.userId, function(err, user){
    if (err) {
      res.send(err)
    } else {
      Tasks.findById(User.taskId, function(err, task) {
        if (err) {
          return res.send(err)
        } else {
          tasks.completed = true;
          tasks.save(function(err){
            if(err) {
              return res.send(err)
            } else { 
              res.send('Task completed')
            }
          })
        }
      });
    }
  })
  // Cualquier sentencia aqui, seguiria su flujo
}
// ==> Callback Hell o Piramide de la muerte