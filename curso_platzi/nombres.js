const persona1 = {
  nombre: 'jose',
  app: 'montoya',
  edad: 25
}

const persona2 = {
  nombre: 'juan',
  app: 'lopez',
  edad: 24
}

saludador(persona1)

function saludador(persona){
  // let nombre = persona.nombre
  let { nombre } = persona
  // let edad = persona.edad
  let { edad  } = persona
  console.log(`Mi nombre es ${nombre} y tengo ${edad} años`);
}