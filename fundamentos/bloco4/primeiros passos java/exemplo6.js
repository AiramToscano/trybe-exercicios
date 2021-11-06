function fizzBuzz(array) {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 3 === 0) {
      array[i] = 'fizz';
    } else if (array[i] % 5 === 0) {
      array[i] = 'buzz';
    }else if (array[i] % 3 === 0 || array[i] % 5 === 0) {
      array[i] = 'fizzBuzz';
    } else {
      array[i] = 'bug!';
    }
  }
