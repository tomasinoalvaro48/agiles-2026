class SumaDeStrings {
  Sumar(numeros: string) {
    const array = numeros.split(',');
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
      suma += parseInt(array[i]);
    }
    return suma;
  }
}

export default SumaDeStrings;
