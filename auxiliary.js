// Auxiliary functions, saved for later use.
// Function threeCut cut up a quote in three suitable parts and returns them as an array of three strings  
function threeCut(str) {
  var oneStr = "",
    twoStr = "",
    threeStr = "";
  var one = 0,
    two = 0,
    three = 0;
  one = str.indexOf(' ', (str.length * 0.33));
  two = str.indexOf(' ', (str.length * 0.60));
  return [str.slice(0, one), str.slice(one, two), str.slice(two, str.length)];
}
// Function chuckStrings separates the quote into strings and returns them as an array for later use
function chuckStrings(origin) {
  var cur = 0, last = 0;
  var foo = [];
  var bar = true;
  while (bar) {
    cur = origin.indexOf(".", last);
    if (cur == -1) {bar = false;}
    if (bar) {foo.push(origin.slice(last, cur + 1));}
    last = cur + 1;
  }
  return foo;
}
// Function fixQuote fixes the &quote problem
function fixQuote(stru) {
  return stru.split("&quot;").join("\"");
}

