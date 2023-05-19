const words = ["spray", "elites", "limit", "apple", "exuberant"];
console.log('Array original =', words);

const filterFor = []
for (let index = 0; index < words.length; index++) {
  const element = words[index];
  if (element.length >= 6) {
    filterFor.push(element);
  };
}

console.log('Filtrado con ciclo for =', filterFor);

const filterMetod = words.filter(item => item.length >= 6);
console.log('Filtrado con .filter() =', filterMetod);


const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
];

const practicExample = orders.filter(item => item.delivered && item.total >= 100);
console.log('Ejemplo complejo = ', practicExample);

const search = (query) => {
  return orders.filter(item => {
    return item.customerName.toLocaleLowerCase().includes(query);
  });
};

console.log(search('va'));