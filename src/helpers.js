function generateSquareStateArray(val) {
  let masterArr = Array(5).fill([]);
  masterArr = masterArr.map(arr => Array(5).fill(val));
  return masterArr;
}

function generateSquareIdArray() {
  let squareIdArray = Array(25);
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      squareIdArray[ (5 * i) + j ] = [ i, j ];
    }
  }
  return squareIdArray;
}

function updateSquareStates(currentState, squareCoordinates) {
  const rowIndex = 0, columnIndex = 1;
  return currentState.squareStates.map((squareStatesRow, squareStatesRowIndex) => {
    return squareStatesRowIndex !== squareCoordinates[ rowIndex ]
      ? squareStatesRow
      : squareStatesRow.map((squareStatesColumn, squareStatesColumnIndex) => {
        return squareStatesColumnIndex !== squareCoordinates[ columnIndex ]
          ? squareStatesColumn
          : !squareStatesColumn
      })
  })
}

export { generateSquareStateArray, generateSquareIdArray, updateSquareStates };