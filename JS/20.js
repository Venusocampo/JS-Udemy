// Métodos de propiedad
//Son funciones agrupadas
const reproductor = {
    reproducir : function(id) {
        console.log(`Reproduciendo Canción con el ID: ${id}`)
    },
    pausar: function() {
        console.log(`Pausando...`)
    },
    crearPlaylist : function(nombre) {
        console.log(`Creando la Playlist: ${nombre}`)
    },
    reproducirPlaylist : function(nombre) {
        console.log(`Reproduciendo la Playlist: ${nombre}`)
    }
}

reproductor.borrarCancion = function(id) { //añadiendo propiedades
    console.log(`Eliminando la canción: ${id}`)
}


reproductor.reproducir(3840); // ej cancion con id 3840
reproductor.pausar();
reproductor.borrarCancion(20); // ej cancion id 20
reproductor.crearPlaylist('Trance');
reproductor.reproducirPlaylist('Salsa');