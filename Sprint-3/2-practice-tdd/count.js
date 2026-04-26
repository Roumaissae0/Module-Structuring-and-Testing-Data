function countChar(str, char) {
  return str.split("").filter(c => c === char).length;
}

module.exports = countChar;