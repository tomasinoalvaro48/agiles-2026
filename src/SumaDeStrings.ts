class SumaDeStrings {
  Sumar(numeros: string) {
    let suma = 0;

    if (numeros !== '') {
      const array = numeros.split(',');

      for (let i = 0; i < array.length; i++) {
        suma += parseInt(array[i]);
      }
    }
    return suma;
  }
}

export default SumaDeStrings;
