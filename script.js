const contacto1 = {
  id: 1,
  nombres: 'Sofia Nicole',
  apellidos: 'Lopez Almendares',
  telefono: '98203350',
  ubicaciones: {
    ciudad: 'Tegucigalpa',
    direccion: 'Residencial Arturo Quesada'
  },
};

const contacto2 = {
  id: 2,
  nombres: 'Daniela Raquel',
  apellidos: 'Gogel Aguilar',
  telefono: '33104870',
  ubicaciones: {
    ciudad: 'Tegucigala',
    direccion: 'Residencial La Cañada'
  },
};

const contacto3 = {
  id: 3,
  nombres: 'Daniela Raquel',
  apellidos: 'Gogel Aguilar',
  telefono: '33104870',
  ubicaciones: {
    ciudad: 'Tegucigala',
    direccion: 'Residencial La Cañada'
  },
};

// Función para crear un contacto
function crearContacto(id, nombres, apellidos, telefono, ciudad, direccion) {
  const nuevoContacto = Object.create(Contacto); // Crea un nuevo objeto basado en la estructura de Contacto
  nuevoContacto.id = id;
  nuevoContacto.nombres = nombres;
  nuevoContacto.apellidos = apellidos;
  nuevoContacto.telefono = telefono;
  nuevoContacto.ubicaciones.ciudad = ciudad;
  nuevoContacto.ubicaciones.direccion = direccion;

  // Devuelve el nuevo objeto de contacto
  return nuevoContacto;
}

// Supongamos que tienes una lista de contactos
const listaDeContactos = [];

// Función para eliminar un contacto
function eliminarContacto(contacto) {
  const index = listaDeContactos.indexOf(contacto);
  if (index !== -1) {
    listaDeContactos.splice(index, 1); // Elimina el contacto de la lista
  }
}

