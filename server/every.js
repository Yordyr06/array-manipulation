const team = [
  {
    name: "Nicolas",
    age: 12,
  },
  {
    name: "Andrea",
    age: 8,
  },
  {
    name: "Zulema",
    age: 2,
  },
  {
    name: "Santiago",
    age: 18,
  },
];

const numbers = [1, 30, 41, 29, 10, 13];

let response_1 = true;
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element >= 40) {
    response_1 = false; 
  };
};

const response_2 = numbers.every(item => item >= 40);

console.log('Validando el valor absoluto de todos los numberos con ciclo for', response_1);
console.log('Validando el valor absoluto de todos los numberos con metodo every', response_2);

function teamValidation() {
  const validation = team.every(member => member.age > 15);
  if (validation) {
    console.log('Approve Team');
  } else {
    console.error('Reject Team');
  };
};

teamValidation();