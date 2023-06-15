const months = ["March", "Jan", "Feb", "Dec"];
const numbers = [1, 30, 4, 21, 100000];
const words = ["réservé", "premier", "communiqué", "café", "adieu", "éclair", "banana"];
const orders = [
  {
    customerName: "Nicolas",
    total: 600,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 1840,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
];

months.sort();
numbers.sort((a, b) => a - b);
words.sort((a, b) => a.length - b.length);
orders.sort((a, b) => b.total - a.total);

console.log(months);
console.log(numbers);
console.log(words);
console.log(orders);