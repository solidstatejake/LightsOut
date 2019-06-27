function generateSquareStateArray(val) {
  let masterArr = Array(5).fill([]);
  masterArr = masterArr.map(arr => Array(5).fill(val));
  return masterArr;
}

function generateSquareCoordinatesArray() {
  let squareCoordinatesArray = Array(25);
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      squareCoordinatesArray[ (5 * i) + j ] = [ i, j ];
    }
  }
  return squareCoordinatesArray;
}

function coordinatesToId(coordinates) {
  return coordinates[ 0 ] * 5 + coordinates[ 1 ];

}

function flipSquare(currentState, squareCoordinates) {
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
  //POSSIBLE REFACTOR MODUS
  // let contigArr = currentState.squareStates.flat();
  // contigArr = contigArr.map((elem, index) => {
  //   if (index === coordinatesToId(squareCoordinates)){
  //     return !elem;
  //   } else return elem;
  // });
  // return contigArr;
}

function flipSiblings(currentState, squareCoordinates) {
  const rowIndex = 0, columnIndex = 1;
  return currentState.squareStates.map((squareStatesRow, squareStatesRowIndex) => {

    if (squareStatesRowIndex === squareCoordinates[ rowIndex ]) {

      if (currentState.squareStates[ squareCoordinates[ rowIndex ] - 1 ] !== undefined) {
        currentState.squareStates[ squareCoordinates[ rowIndex ] - 1 ][ squareCoordinates[ columnIndex ] ] = !currentState.squareStates[ squareCoordinates[ rowIndex ] - 1 ][ squareCoordinates[ columnIndex ] ];
      }
      if (squareStatesRow[ squareCoordinates[ columnIndex ] + 1 ] !== undefined) {
        squareStatesRow[ squareCoordinates[ columnIndex ] + 1 ] = !squareStatesRow[ squareCoordinates[ columnIndex ] + 1 ];
      }
      if (squareStatesRow[ squareCoordinates[ columnIndex ] - 1 ] !== undefined) {
        squareStatesRow[ squareCoordinates[ columnIndex ] - 1 ] = !squareStatesRow[ squareCoordinates[ columnIndex ] - 1 ];
      }
      if (currentState.squareStates[ squareCoordinates[ rowIndex ] + 1 ] !== undefined) {
        currentState.squareStates[ squareCoordinates[ rowIndex ] + 1 ][ squareCoordinates[ columnIndex ] ] = !currentState.squareStates[ squareCoordinates[ rowIndex ] + 1 ][ squareCoordinates[ columnIndex ] ];
      }
    }
    return squareStatesRow;
  })
}


export {
  generateSquareStateArray,
  generateSquareCoordinatesArray,
  flipSquare,
  flipSiblings
};