const number = [1, 2, 3, 4, 5];

let sumFor = 0;
for (let index = 0; index < number.length; index++) {
  const element = number[index];
  sumFor = sumFor + element;
};
console.log('Suma con ciclo for =', sumFor);

const sumReduce = number.reduce((sum, element) => sum + element);
console.log('Suma con metodo reduce =', sumReduce);