const sumWealth = (moneyInBank) => {
  let total = 0
  for(const amount of moneyInBank) {
    total += amount
  }
  return total
}

var maximumWealth = function(accounts) {
  let wealth = []
  for(let i = 0; i < accounts.length; i++) {
    wealth[i] = sumWealth(accounts[i])
  }
  return wealth.reduce((max, x) => (x > max ? x : max))
};

module.exports = maximumWealth
