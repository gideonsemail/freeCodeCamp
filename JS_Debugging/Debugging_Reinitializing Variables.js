function zeroArray(m, n) {
  // Creates a 2-D array with m rows and n columns of zeroes. if n = 2, array looks like [0,0]
  let newArray = [];//first argument
  let row = [];//start with ane mpty array. 2nd arg.
  for (let i = 0; i < m; i++) {//push m 0s onto the array row.
    // Adds the m-th row into newArray

    for (let j = 0; j < n; j++) {
      // Pushes n zeroes into the current row to create the columns
      row.push(0);//push 0
    }
    // Pushes the current row, which now has n zeroes in it, to the array
    newArray.push(row);
  }
  return newArray;
}

let matrix = zeroArray(3, 2);//since m = 3, need to do this three times to get: [ [0,0], [0,0], [0,0] ].
console.log(matrix);

//The entire point of this challenge was to teach you how to debug existing code that had a small logic error.  Using console.log statements, you could quickly see the following line should be moved from outside the outer for loop to just inside the outer for loop to get the desired result.
