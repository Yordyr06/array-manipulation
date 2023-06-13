const matrix_A = [[1,2,3], [4,5,6], [7,8,9]];
const matrix_B = [1, 2, [3, 4], 5, 6];
const matrix_C = [1, 2, [3, 4, [[5, 6]]], [7, 8]];
const matrix_D = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]

const response_1 = [];
for (let i = 0; i < matrix_A.length; i++) {
  const array = matrix_A[i];
  for (let j = 0; j < array.length; j++) {
    const element = matrix_A[i][j];
    response_1.push(element);
  };
};

const response_2 = matrix_B.flat();
const response_3 = matrix_C.flat(2);
const response_4 = matrix_D.flat(Infinity);

console.log('Aplanando arrays multidimencionales con ciclo for =', response_1);
console.log('Aplanando arrays multidimencionales con metodo flat =', response_2);
console.log('Aplanando arrays multidimencionales (indicando profundidad) con metodo flat =', response_3);
console.log('Aplanando arrays multidimencionales (usando la palabra reservada Infinity) con metodo flat =', response_4);