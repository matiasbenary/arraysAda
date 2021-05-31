/*
Un ciclo for se repite hasta que una condición especificada se evalúe como false.
for ([expresiónInicial]; [expresiónCondicional]; [expresiónDeActualización])
  instrucción
*/
//const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
const nombres = 'Vanesa';
let nombreAlRevez = "";
for(let i = nombres.length - 1; i >= 0; i--){
  console.log(nombres[i]);
  nombreAlRevez += nombres[i];
}
console.log(nombreAlRevez);

for (let step = 0; step < 5; step++) {
  // Se ejecuta 5 veces, con valores del paso 0 al 4.
  console.log('Camina un paso hacia el este');
}
/*
for...of recorre todos lo elementos del array dentro de su scope(dentro de la llaves)
y la variable declarada es el elemento del array
*/
const nombresCurso = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
for(const nombreCurso of nombresCurso){
  console.log(nombreCurso)
}

/*
for...in recorre todos lo elementos del array dentro de su scope(dentro de la llaves)
y la variable declarada es el indice del array
*/
for(const indice in nombresCurso){
  console.log(indice,nombresCurso[indice])
}
/*
La instrucción do...while se repite hasta que una condición especificada se evalúe como falsa.
do
  expresión
while (condición);
*/

let i = 0; 
do { 
  i += 1; 
  console.log(i); 
} while (i < 5);

/*
Una declaración while ejecuta sus instrucciones siempre que una condición especificada se evalúe como true. 
while (condición)
  expresión
*/
// for (let  n = 0; n < 3; n++) {
let n = 0;
let x = 0;
while (n < 3) {
  n++;
  x += n;
}