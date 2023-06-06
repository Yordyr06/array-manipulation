const pets = [ "cat", "dog", "bat" ];
const fruits = ["apple", "pear", "pineapple", "grape"];
const string = "Hello world"

let response_1 = false;
for (let index = 0; index < pets.length; index++) {
  const element = pets[index];
  if (element === 'dog') {
    response_1 = true;
    break;
  };
};

const response_2 = fruits.includes('pear');
const response_3 = string.includes('hello');

console.log('Consultando elementos de un array con ciclo for =', response_1);
console.log('Consultando elementos de un array con metodo includes =', response_2);
console.log('Consultando palabras de un string con metodo includes =', response_3);