function generateSquareStateArray(val) {
  let masterArr = Array(5).fill([]);
  masterArr = masterArr.map(arr => Array(5).fill(val));
  return masterArr;
}

function generateSquareIdArray() {
  let squareIdArray = Array(25);
  for (let i = 0; i < 5; i++) {
    console.log(`i = ${i}`);
    for (let j = 0; j < 5; j++) {
      console.log(`j = ${j}`);
      squareIdArray[ (5 * i) + j ] = [ i, j ];
    }
  }
  return squareIdArray;
}

export { generateSquareStateArray, generateSquareIdArray };