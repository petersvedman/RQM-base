/* Chuck Norris sees you */
console.log("Im working just fine");
var chuckNorris = "",
  chuckStatus = "";
threeChucked = [];
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
function chuckStrings(origin){
	var curindex=0, lastindex=0;
	var finns = true;
	var foo=[];
	while (finns){
		curindex = origin.indexOf(".", lastindex);
		if (curindex !== -1){
			foo.push(str.slice(lastindex,curindex));
      console.log("f");
		}
		else {finns = false;}
		lastindex=curindex;
	}
	console.log(foo);
}
// Function fixQuote fixes the &quote problem
function fixQuote(stru) {
  return stru.split("&quot;").join("\"");
}

$(document).ready(function() {
  $("button").click(function() {
    $.getJSON("http://api.icndb.com/jokes/random", function(chuckNorris, chuckStatus) {
      $("#test").text(chuckNorris.value.joke);
      console.log(chuckStatus);
      threeChucked = threeCut(fixQuote(chuckNorris.value.joke));
      console.log(threeChucked);
      chuckStrings(fixQuote(chuckNorris.value.joke));
      $("#sent1").text(threeChucked[0]);
      $("#sent2").text(threeChucked[1]);
      $("#sent3").text(threeChucked[2]);
    });
  });
});