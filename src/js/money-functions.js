const formatCurrency = (amount) => {
  const convertedMoney = Math.round(amount * 100) / 100;
  if (amount < 0) {
    return `-$${Math.abs(convertedMoney).toFixed(2)}`;
  }
  return `$${convertedMoney.toFixed(2)}`;
};

const getCoins = (cents) => {
  let counter = cents;
  let quarterCounter = 0;
  let dimeCounter = 0;
  let nickelCounter = 0;
  let pennyCounter = 0;
  if (cents) {
    quarterCounter += Math.floor(counter / 25);
    counter -= quarterCounter * 25;
    if (counter) {
      dimeCounter += Math.floor(counter / 10);
      counter -= dimeCounter * 10;
      if (counter) {
        nickelCounter += Math.floor(counter / 5);
        counter -= nickelCounter * 5;
        pennyCounter += counter;
      }
    }
  }
  return {
    quarters: quarterCounter,
    dimes: dimeCounter,
    nickels: nickelCounter,
    pennies: pennyCounter,
  };
};

module.exports = { formatCurrency, getCoins };
