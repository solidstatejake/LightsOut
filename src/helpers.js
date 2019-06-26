function generateArray(val) {
  let masterArr = Array(5).fill([]);
  masterArr = masterArr.map(arr => Array(5).fill(val));
  return masterArr;
}

export { generateArray };