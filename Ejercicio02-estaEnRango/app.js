function estaEnRango(valor, minimo, maximo) {
    if(valor >= minimo && valor <= maximo) {
        return console.log(true)
    }
    else{
        console.log(false)
    }
}

estaEnRango(3, 1, 10)   // true
estaEnRango(1, 1, 10)   // true
estaEnRango(10, 1, 10)  // true
estaEnRango(12, 1, 10)  // false
estaEnRango(-3, 1, 10)  // false