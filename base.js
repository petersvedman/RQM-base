/* Chuck Norris sees you */
console.log("Im working just fine");
var chuckNorris = "",
  chuckStatus = "";
threeChucked = "";

// Function fixQuote fixes the &quote problem
function fixQuote(stru) {
  return stru.split("&quot;").join("\"");
}
// main script section
$(document).ready(function() {
  $("button").click(function() {
    $.getJSON("http://api.icndb.com/jokes/random", function(chuckNorris, chuckStatus) {
      //$("#test").text(chuckNorris.value.joke);
      console.log(chuckStatus);
      //threeChucked = threeCut(fixQuote(chuckNorris.value.joke));
      //console.log(threeChucked);
      threeChucked=fixQuote(chuckNorris.value.joke);
      $("#quote-elem").text(threeChucked);
    });
  });
});