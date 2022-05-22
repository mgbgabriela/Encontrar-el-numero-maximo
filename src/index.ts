/*Encontrar el Número Máximo
• Leer valores hasta que se introduzca un cero (0)
• El usuario puede introducir valores positivos y negativos
• Encontrar el máximo de los elementos que se introdujeron
• Analizar cómo cambia el programa para hallar el mínimo*/

let ingresados: boolean = false;
let nro = Number(prompt("Ingrese un número"));
let nroMaximo: number = nro;
while (nro !== 0) {
  ingresados = true;
  if (nro > nroMaximo) {
    nroMaximo = nro;
  }
  nro = Number(prompt("Ingrese un número"));
}
if (ingresados) {
  console.log("El número máximo es ", nroMaximo);
}
