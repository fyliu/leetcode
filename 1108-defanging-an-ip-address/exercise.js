var defangIPaddr = function(address) {
  return address.replace(/(\w+)\.(\w+)\.(\w+)\.(\w+)/, "$1[.]$2[.]$3[.]$4")
};

module.exports = defangIPaddr
