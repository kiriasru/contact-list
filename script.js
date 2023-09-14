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

function agregarContacto(nombres, apellidos, telefono, ciudad, direccion) {
  const nuevoContacto = {
    id: listaDeContactos.length + 1,
    nombres,
    apellidos,
    telefono,
    ubicaciones: {
      ciudad,
      direccion,
    },
  };
  listaDeContactos.push(nuevoContacto);
  return nuevoContacto;
}

const contacto5 = agregarContacto(
  'Luna Daniela',
  'Vaquedano Solano',
  '33875098',
  'ciudad',
  'direccion'
);


function eliminarContacto(contacto) {
  const index = listaDeContactos.indexOf(contacto);
  if (index !== -1) {
    listaDeContactos.splice(index, 1); 
  }
}

function eliminarContacto(id) {
  const indice = listaDeContactos.findIndex((contacto) => contacto.id === id);

  if (indice !== -1) {
    listaDeContactos.splice(indice, 1);
    return true;
  } else {
    return false;
  }
}

const idAEliminar = 3;
const eliminado = eliminarContacto(idAEliminar);

if (eliminado) {
  console.log(`Se eliminó el contacto con ID ${idAEliminar}`);
} else {
  console.log(`No se encontró el contacto con ID ${idAEliminar}`);
}
