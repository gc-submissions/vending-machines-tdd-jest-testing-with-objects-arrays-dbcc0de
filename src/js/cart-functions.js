const calculateChange = (total, payment) => {
  return Math.round((payment - total) * 100) / 100;
};

const isSufficientPayment = (total, payment) => payment >= total;

const calculateTotal = (array) =>
  Math.round(array.reduce((acc, cv) => acc + cv.price, 0) * 100) / 100;

const addItem = (itemsArray, name, price) => {
  itemsArray.push({ name, price });
};

const removeItem = (itemsArray, index) => {
  itemsArray.splice(index, 1);
};

module.exports = {
  calculateChange,
  isSufficientPayment,
  calculateTotal,
  addItem,
  removeItem,
};
