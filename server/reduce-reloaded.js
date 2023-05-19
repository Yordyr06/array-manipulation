const items = [5, 6, 7, 6, 5, 7, 7, 8];
const data = [
  {
    name: "Nicolas",
    level: "low",
  },
  {
    name: "Andrea",
    level: "medium",
  },
  {
    name: "Zulema",
    level: "hight",
  },
  {
    name: "Santiago",
    level: "low",
  },
  {
    name: "Valentina",
    level: "medium",
  },
  {
    name: "Lucia",
    level: "hight",
  },
];

const frecuently = items.reduce((item, repeat) => {
  if (!item[repeat]) {
    item[repeat] = 1;
  } else {
    item[repeat] += 1;
  };

  return item
}, {});

const manipulation = data
  .map(item => item.level)
  .reduce((player, repeat) => {
    if (!player[repeat]) {
      player[repeat] = 1;
    } else {
      player[repeat] += 1;
    };

    return player;
  }, {});

console.log('Histograma de frecuencia con reduce =', frecuently);
console.log('Manipulacion de un array de objeto con reduce =', manipulation);