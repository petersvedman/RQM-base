/* Chuck Norris sees you */
console.log("Im working just fine");
var chuckNorris = "";
var chuckStatus = "";
var threeChucked = "";

// Function fixQuote fixes the &quote problem
function fixQuote(stru) {
  return stru.split("&quot;").join("\"");
}
// main script section
$(document).ready(function() {
	// Load a joke from the API
        $.getJSON("http://api.icndb.com/jokes/random", function(chuckNorris, chuckStatus) {
        console.log(chuckStatus);
        threeChucked = fixQuote(chuckNorris.value.joke);
        $("#quote-elem").text(threeChucked);
		 });
	  
	// On new-button click load a new joke  
	  $("button.new-button").click(function() {
        $.getJSON("http://api.icndb.com/jokes/random", function(chuckNorris, chuckStatus) {
          console.log(chuckStatus);
          threeChucked = fixQuote(chuckNorris.value.joke);
          $("#quote-elem").text(threeChucked);
        });
      });
	  // On tweet.button click load tweet page
      $("button.tweet-button").click(function(e) {
         e.preventDefault();
		 var loc = threeChucked;
        //We trigger a new window with the Twitter dialog, in the middle of the page
         window.open('http://twitter.com/share?url=' + loc + '&text=' + threeChucked + '&', 'twitterwindow', 'height=450, width=550, top=' + ($(window).height() / 2 - 225) + ', left=' + $(window).width() / 2 + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
        });
      });