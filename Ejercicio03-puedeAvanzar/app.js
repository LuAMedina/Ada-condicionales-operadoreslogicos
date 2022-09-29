function puedeAvanzar(colorSemaforo) {
    if(colorSemaforo === 'verde') {
        return console.log(true)
    } else if (colorSemaforo === 'rojo' || colorSemaforo === 'amarillo') {
        return console.log(false)
    } else {
        return console.log('Error: color de semáforo inválido')
    }
}

puedeAvanzar('verde')     // true
puedeAvanzar('amarillo')  // false
puedeAvanzar('rojo')      // false
puedeAvanzar('lila')      // 'Error: color de semáforo inválido'