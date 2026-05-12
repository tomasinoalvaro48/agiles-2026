class SumaDeStrings {
  Sumar(numeros: string) {
    let suma = 0;
    if (numeros !== "") {
      const array = numeros.split("\n");
      for (let i = 0; i < array.length; i++) {
        const array2 = array[i].split(",");
        for (let j = 0; j < array2.length; j++) {
          suma += parseInt(array2[j]);
        }
      }
    }
    return suma;
  }
}

export default SumaDeStrings;
