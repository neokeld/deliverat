function numberToString(num) {
  num = Math.round(num * 100) / 100;
  let numToString = String(num);
  if (numToString.indexOf(".") !== -1) {
    numToString = numToString.replace(/\./g, ",");
    if (numToString.length - numToString.indexOf(",") === 2) {
      numToString += "0";
    }
  }
  return numToString;
}

export default numberToString;
