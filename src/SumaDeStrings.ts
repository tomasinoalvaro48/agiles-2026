class SumaDeStrings {
    Sumar(numeros: string) {
        if (numeros === "") {
            return 0
        }
        else {
            return parseInt(numeros[0]) + parseInt(numeros[2])
        }
    }
}

export default SumaDeStrings