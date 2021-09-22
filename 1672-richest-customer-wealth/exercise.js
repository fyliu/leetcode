var maximumWealth = function(accounts) {
  let wealth = []
  for(let i = 0; i < accounts.length; i++) {
    wealth[i] = (accounts[i]).reduce((sum, x) => (sum + x))
  }
  return wealth.reduce((max, x) => (x > max ? x : max))
};

module.exports = maximumWealth
