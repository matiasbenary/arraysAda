
const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];

const nombreP = nombres[4];
nombreP// 

console.log( nombres.length); 

//Por elementos
for(const nombre of nombres){
  console.log(nombre);  
}

const edificios = ["casa","iglesia","depto","casa quinta"];

for(const edificio of edificios){
  console.log(edificio);
}

//Por indice
for(const nombre in nombres){
  console.log(nombre);
  console.log(nombres[nombre]);
}




const frutas = ["Manzana", "Banana"]
//saca el ultimo elemento
console.log(frutas.pop());
//agrega en el ultimo lugar
console.log(frutas.push("Pera"));

console.log(frutas);

//agrega en el primer lugar
console.log(frutas.unshift("Kiwi"));
//saca el primero
console.log(frutas.shift());

console.log(frutas);