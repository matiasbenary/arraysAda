//Definí una función obtenerMenor que tome por parámetro un array de números numeros y devuelva el menor de ellos. Ejemplo:
// si tengo que ver todos los elementos del array no voy a tener un return dentro del bucle
//
const obtenerMenor = (numeros) =>{
  let min = Infinity; // es un numero conceptual mas grande de todos
  for(const numero of numeros){
    // 1000000 > 5
    console.log({min,numero,resultado:min > numero});
    if(min > numero){
      min = numero;
    }
  }
  return min;
}
// const arrayNumeros = [1,2];
// console.log(obtenerMenor(arrayNumeros));
console.log(obtenerMenor([5, 7, 99, 34, 54, 2, 12]));

/*
Definí una función contiene que reciba como argumentos un número numero y un array de números numeros y devuelva si el número se encuentra en dicho array.
*/
const contiene = (numeroAEncontrar,numeros) =>{
  for(const numero of numeros){
    if(numeroAEncontrar === numero){
      return true;
    }
  }
  return false;
}

console.log(contiene(54, [5, 7, 99, 3, 4, 50, 2, 12]))

/*
Definí una función gano que reciba como argumento un array tragamonedas  con 5 símbolos y nos indique si son iguales. Si el array tiene más de 5 símbolos, sólo debe comparar los 5 primeros.
*/
// 1 regla que si el primero va definir como deben ser el resto. Una vez que encuentre alguno diferente retorna falso
// 2 tiene que para a la vuelta 5
// contadador que vaya incrementado en 1 por vuelta
// usar indice
// const gano = (tragamonedas)=>{
//   const simboloPrimero = tragamonedas[0];
//   let contador = 0;
//   for(const simbolo of tragamonedas){
//     if(simbolo !== simboloPrimero){
//       return false;
//     }

//     contador++;
//     if(contador === 5){
//       return true;
//     }
//   }
// }

const gano = (tragamonedas)=>{
  const simboloPrimero = tragamonedas[0];
  for(const simbolo in tragamonedas){
    if(tragamonedas[simbolo] !== simboloPrimero){
      return false;
    }

    if(simbolo === '4'){
      return true;
    }
  }
}



console.log(gano(['⭐', '⭐️', '⭐️', '💫', '✨']) );
console.log(gano(['💫', '💫', '💫', '💫', '💫']) );
console.log(gano(['💫', '💫', '💫', '💫', '💫', '⭐️']));

/*
Definí una función separar que tome por parámetro un string con emojis de perros y gatos y devuelva un string con los perros agrupados por un lado y los gatos por otro.

1. crear dos arreglos y juntarlos
2. 101010010100 -> 1 -> 01 ->011 -> 0011
crear un array nuevo

*/