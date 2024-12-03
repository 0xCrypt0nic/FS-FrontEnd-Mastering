const fusionArray = require("./fusionArray");

test("Fusionne 2 tableaux", () => {
  let arr1 = [1, 2];
  let arr2 = [3, 4];
  expect(fusionArray(arr1, arr2)).toEqual([1, 2, 3, 4]);
});
