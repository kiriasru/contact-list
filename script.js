const listaDeContactos = [
  {
    id: 1,
    nombres: 'Sofia Nicole',
    apellidos: 'Lopez Almendares',
    telefono: '98203350',
    ubicaciones: {
      ciudad: 'Tegucigalpa',
      direccion: 'Residencial Arturo Quesada',
    },
  },
  {
    id: 2,
    nombres: 'Daniela Raquel',
    apellidos: 'Gogel Aguilar',
    telefono: '33104870',
    ubicaciones: {
      ciudad: 'Tegucigala',
      direccion: 'Residencial La Cañada',
    },
  },
  {
    id: 3,
    nombres: 'Leo Alejandro',
    apellidos: 'Irias Ruiz',
    telefono: '95403981',
    ubicaciones: {
      ciudad: 'Tegucigala',
      direccion: 'Residencial Portal del Bosque',
    },
  },
  {
    id: 4,
    nombres: 'Roslyn Vanessa',
    apellidos: 'Ruiz Coello',
    telefono: '98192098',
    ubicaciones: {
      ciudad: 'Tegucigala',
      direccion: 'Residencial Portal del Bosque',
    },
  },
];


function crearContacto(id, nombres, apellidos, telefono, ciudad, direccion) {
  const nuevoContacto = Object.create(contacto);
  nuevoContacto.id = id;
  nuevoContacto.nombres = nombres;
  nuevoContacto.apellidos = apellidos;
  nuevoContacto.telefono = telefono;
  nuevoContacto.ubicaciones.ciudad = ciudad;
  nuevoContacto.ubicaciones.direccion = direccion;

  return nuevoContacto;
}


const contacto5 = crearContacto(
  5,
  'Luna Daniela',
  'Vaquedano Solano',
  '33809833',
  'Tegucigalpa',
  'Villa Nueva'
);


// Función para eliminar un contacto
function eliminarContacto(contacto) {
  const index = listaDeContactos.indexOf(contacto);
  if (index !== -1) {
    listaDeContactos.splice(index, 1); // Elimina el contacto de la lista
  }
}

