function esVocal(letra) {
    if(letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
        return console.log(true)
    } else {
        return console.log(false)
    }
}

esVocal('a') // true
esVocal('n') // false