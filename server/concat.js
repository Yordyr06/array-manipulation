const numbers1 = [1,2,3,4];
const numbers2 = [5,6,7,8];
const numbers3 = [9,10,11,12];

const response_1 = [...numbers1];
for (let index = 0; index < numbers2.length; index++) {
  const element = numbers2[index];
  response_1.push(element);
};

const response_2 = numbers1.concat(numbers2, numbers3);
const response_3 = [...numbers1, ...numbers2];
const response_4 = [...numbers3, ...'hello world'];

console.log('Concatenando arrays con ciclo for =', response_1);
console.log('Concatenando arrays con metodo concat =', response_2);
console.log('Concatenando arrays con spread operator =', response_3);
console.log('Puntos a tener en cuenta al concatenar con spread operator =', response_4);