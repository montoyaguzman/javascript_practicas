// Funcion consulta con Asyn - Await
async function requestHandler(req, res) {
  try {
    const user = await User.findById(req.userId)
    const tasks = await Tasks.findById(user.taskId)
    tasks.completed = true
    await tasks.save()
    res.send('Tarea completada')
  } catch(e) {
    res.send(e)
  }
}

// async se coloca al inicio de un metodo que sera sincrono
// await: indica que lo que le sigue se ejecutara cincronamente