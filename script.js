const listaDeContactos = ["Sofia Lopez", "Bruno Romero", "Yury Garcia", "Marissa Perdomo"];

function agregarContacto(nuevoContacto) {
    listaDeContactos.push(nuevoContacto);
}

agregarContacto("Shady Binaeli");

function quitarContacto(removerContacto) {
    const posicion = listaDeContactos.indexOf(removerContacto);
    if (posicion !== -1) {
        listaDeContactos.splice(posicion, 1);
    } 
}

quitarContacto("Bruno Romero");

