// El método push agrega uno o varios elementos al final del array original. El método recibe como argumento los valores a agregar. Retorna el número de elementos del array mutado.
const array_a = [1,2,3];
array_a.push(4,5);
console.log(array_a); // [ 1, 2, 3, 4, 5 ]
console.log('-'.repeat(15));

// El método unshift agrega uno o varios elementos al inicio del array original. El método recibe como argumento los valores a agregar. Retorna el número de elementos del array mutado.
const array_b = [3,4,5]
array_b.unshift(1,2)
console.log(array_b) // [ 1, 2, 3, 4, 5 ]
console.log('-'.repeat(15));

// El método pop extrae el elemento del final del array original. El método no recibe ningún argumento. Retorna el elemento extraído, si no se guarda en una variable, el Garbage Collection{target="_blank"} lo elimina.
const array_c = [1,2,3,4]
const lastElement = array_c.pop()
console.log(lastElement) // 4
console.log(array_c) // [ 1, 2, 3 ]
console.log('-'.repeat(15));

// El método shift extrae el elemento del inicio del array original. El método no recibe ningún argumento. Retorna el elemento extraído, si no se guarda en una variable, el Garbage Collection{target="_blank"} lo elimina.
const array_d = [1,2,3,4]
const firstElement = array_d.shift()
console.log(firstElement) // 1
console.log(array_d) // [ 2, 3, 4 ]
console.log('-'.repeat(15))

// El método splice extrae uno o varios elementos del array original a partir del índice y los reemplaza con otro elemento especificado como argumento. Retorna un array con los elementos extraídos, si no se guarda en una variable, el Garbage Collection{target="_blank"} lo elimina.
// El método splice recibe tres argumentos:
  // El índice donde comenzará a cambiar el array.
  // La cantidad de elementos que serán reemplazados.
  // Uno o varios elementos que reemplazarán a los originales del array.

// array.splice(índice, cantidad, items)
// array.splice(índice, cantidad, item1, item2, ..., itemN)

const array_e = [1,2,3,4]
const item_e = array_e.splice(2,1,"tres")
console.log(item_e) // [3]
console.log(array_e) // [ 1, 2, 'tres', 4 ]
console.log('-'.repeat(15))

const array_f = [1,2,3,4]
const item_f = array_f.splice(1,2,"dos", "tres")
console.log(item_f) // [ 2, 3 ]
console.log(array_f) // [ 1, 'dos', 'tres', 4 ]
console.log('-'.repeat(15))