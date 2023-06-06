const elements = ['Fire', 'Air', 'Water', 'Earth'];
const tittle = 'Curso de Manipulación de Arrays'


let response_1 = '';
const separator = '--';
for (let index = 0; index < elements.length; index++) {
  const item = elements[index];
  if (index === elements.length - 1) {
    response_1 + item;
  } else {
    response_1 + item + separator;
  };
};

const response_2 = elements.join('--');
const url = tittle.toLowerCase().split(' ').join('-');

console.log('Uniendo los valores en un array en un solo string con ciclo for =', response_1);
console.log('Uniendo los valores en un array en un solo string con metodo join =', response_2);
console.log('Uso practico para creacion de url con metodo join =', url);