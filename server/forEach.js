const letter = ['a', 'b', 'c'];
letter.forEach(item => console.log(item));

const app = document.getElementById('app');
const todo = [
  'Tarea 1',
  'Tarea 2',
  'Tarea 3'
];

todo.forEach(item => {
  app.innerHTML += `<input type="checkbox">${item} <br>`;
});