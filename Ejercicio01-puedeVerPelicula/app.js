function puedeVerPelicula(edad, tieneAutorizacion) {
    if(edad >= 15) {
        return console.log(true)
    }
    else if(tieneAutorizacion) {
        return console.log(true)
    }
    else {
        return console.log(false)
    }
}

puedeVerPelicula(12, false) // false
puedeVerPelicula(12, true)  // true
puedeVerPelicula(16, false) // true
puedeVerPelicula(18, true)  // true