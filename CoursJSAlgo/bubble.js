const bubbleSort = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    for (let y = 0; y < array.length - 1 - i; y++) {
      if (array[y] > array[y + 1]) {
        [array[y], array[y + 1]] = [array[y + 1], array[y]];
        console.log(array);
      }
    }
  }

  console.log(array);
};

bubbleSort([451, 2, 65, 4, 7, 98, 2, 3, 1]);
