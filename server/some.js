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

const dates = [
  {
    startDate: new Date(2021, 1, 1, 10),
    endDate: new Date(2021, 1, 1, 11),
    title: "Cita de trabajo",
  },
  {
    startDate: new Date(2021, 1, 1, 15),
    endDate: new Date(2021, 1, 1, 15, 30),
    title: "Cita con mi jefe",
  },
  {
    startDate: new Date(2021, 1, 1, 20),
    endDate: new Date(2021, 1, 1, 21),
    title: "Cena",
  },
];

const newAppointment = {
  startDate: new Date(2021, 1, 1, 8),
  endDate: new Date(2021, 1, 1, 9, 30),
};

const numbers = [1, 2, 3, 4];

let response_1 = false;
for (let index = 0; index < numbers.length; ++index) {
  const element = numbers[index];
  if (element % 2 === 0) {
    response_1 = true;
    break
  };
};

const response_2 = numbers.some(element => element % 2 === 0);
const response_3 = orders.some(item => item.delivered);

console.log('Comprobando numeros pares con ciclo for =', response_1);
console.log('Comprobando numeros pares con metodo some =', response_2);
console.log('Consulta de valores con some =', response_3);

