const addNum = require("./add");

test("Additionne 2 nombres", () => {
  expect(addNum(1, 2)).toBe(3);
});
