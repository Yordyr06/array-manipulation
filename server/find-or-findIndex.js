const numbers = [1, 30, 41, 29, 50, 60];

const products = [
  {
    name: "Pizza",
    price: 12,
    id: '🍕'
  },
  {
    name: "Burger",
    price: 23,
    id: '🍔'
  },
  {
    name: "Hot dog",
    price: 34,
    id: '🌭'
  },
  {
    name: "Hot cakes",
    price: 355,
    id: '🥞'
  },
];

let response_1 = undefined;
for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i];
  if (element === 30) {
    response_1 = element;
    break;
  };
};

// const response_2 = numbers.find(item => item === 29);
const response_2 = products.find(item => item.id === '🍔');
const response_3 = products.findIndex(item => item.id === '🌭');

console.log('Buscando elementos con ciclo for =', response_1);
console.log('Buscando elementos con metodo find =', response_2);
console.log('Buscando posicion de elemento con metodo findIndex =', response_3);