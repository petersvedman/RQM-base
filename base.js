/* Chuck Norris sees you */
console.log("Im working just fine");
var chuckNorris = "",
  chuckStatus = "";
  threeChucked=[];
// Function threeCut cut up a quote in three suitable parts and returns them as an array of three strings  
function threeCut(str) {
	var oneStr="", twoStr="", threeStr="";
	var one=0, two=0, three=0;
	one = str.indexOf(' ',(str.length/5)*1)
	two = str.indexOf(' ',(str.length/5)*2);
	three = str.indexOf((' ', str.length/5)*3);
	//console.log (one, two, three, str.slice(0,one), str.slice(one,two), str.slice(two, str.length));
	return [str.slice(0,one), str.slice(one,two), str.slice(two, str.length)];
}  
  
$(document).ready(function() {
  $("button").click(function() {
    $.getJSON("http://api.icndb.com/jokes/random", function(chuckNorris, chuckStatus) {
      $("#test").text(chuckNorris.value.joke);
      console.log(chuckStatus);
	  threeChucked=threeCut(chuckNorris.value.joke);
	  console.log(threeChucked);
    });
  });
});