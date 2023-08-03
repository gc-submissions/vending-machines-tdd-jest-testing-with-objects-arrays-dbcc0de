const {
  calculateChange,
  isSufficientPayment,
  calculateTotal,
  addItem,
  removeItem,
} = require("../src/js/cart-functions");

describe("calculateChange", () => {
  test("given total 5 and payment 6, it returns 1", () => {
    expect(calculateChange(5, 6)).toBe(1);
  });
  test("given total 12.30 and payment 13.03, it returns 0.73", () => {
    expect(calculateChange(12.3, 13.03)).toBe(0.73);
  });
});

describe("isSufficientPayment", () => {
  test("Given total 5 and payment 6, it returns true", () => {
    expect(isSufficientPayment(5, 6)).toBe(true);
  });
  test("Given total 10 and payment 7, it returns false", () => {
    expect(isSufficientPayment(10, 7)).toBe(false);
  });
  test("Given total 3 and payment 3, it returns true", () => {
    expect(isSufficientPayment(3, 3)).toBe(true);
  });
});

describe("calculateTotal", () => {
  test("Given an itemsArray of one item with price 4.99, it returns 4.99", () => {
    const oneItemArray = [{ name: "some", price: 4.99 }];
    expect(calculateTotal(oneItemArray)).toBe(4.99);
  });
  test("Given an itemsArray of three items with prices 3.50, 12.99, and 0.03, it returns 16.52", () => {
    const threeItemArray = [
      { name: "some", price: 3.5 },
      { name: "some1", price: 12.99 },
      { name: "some2", price: 0.03 },
    ];
    expect(calculateTotal(threeItemArray)).toBe(16.52);
  });
  test("empty array returns 0", () => {
    const threeItemArray = [];
    expect(calculateTotal(threeItemArray)).toBe(0);
  });
});

describe("addItem", () => {
  test(`"Call addItem with an empty itemsArray, name "Beans" and price 3. Then check that itemsArray has one item in it: { name: "Beans", price: 3 }"`, () => {
    const testArray = [];
    addItem(testArray, "Beans", 3);
    expect(testArray).toEqual([{ name: "Beans", price: 3 }]);
  });
  test(`Create an itemsArray with one item in it: { name: "Beans", price: 3 }. Call addItem with itemsArray, name "Sugar" and price 2. Then check that itemsArray has two items in it: { name: "Beans", price: 3 } and { name: "Sugar", price: 2 }`, () => {
    const testArray = [
      {
        name: "Beans",
        price: 3,
      },
    ];
    addItem(testArray, "Sugar", 2);
    expect(testArray).toEqual([
      { name: "Beans", price: 3 },
      { name: "Sugar", price: 2 },
    ]);
  });
});

describe("removeItem", () => {
  test("Remove the first element from an array of three items", () => {
    const testArray = [
      { name: "Beans", price: 3 },
      { name: "Sugar", price: 2 },
      { name: "Sugar", price: 2 },
    ];
    removeItem(testArray, 0);
    expect(testArray).toEqual([
      { name: "Sugar", price: 2 },
      { name: "Sugar", price: 2 },
    ]);
  });
  test("Remove the last element from an array of three items", () => {
    const testArray = [
      { name: "Beans", price: 3 },
      { name: "Sugar", price: 2 },
      { name: "jelly", price: 2.5 },
    ];
    removeItem(testArray, 2);
    expect(testArray).toEqual([
      { name: "Beans", price: 3 },
      { name: "Sugar", price: 2 },
    ]);
  });
  test("Remove the middle element from an array of three items", () => {
    const testArray = [
      { name: "Beans", price: 3 },
      { name: "Sugar", price: 2 },
      { name: "jelly", price: 2.5 },
    ];
    removeItem(testArray, 1);
    expect(testArray).toEqual([
      { name: "Beans", price: 3 },
      { name: "jelly", price: 2.5 },
    ]);
  });
  test("Remove the only element from an array of three items", () => {
    const testArray = [{ name: "Beans", price: 3 }];
    removeItem(testArray, 0);
    expect(testArray).toEqual([]);
  });
});
