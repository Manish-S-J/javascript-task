let arrName = [];
let rows = 3;
let columns = 4;

for (let i = 0; i < rows; i++) {
  arrName[i] = [];
  for (let j = 0; j < columns; j++) {
    arrName[i][j] = '*';
  }
}

console.log(arrName);
