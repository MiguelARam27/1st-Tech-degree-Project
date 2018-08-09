// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes
var quotes = [
  //object 1
  {
    quote:'object 1',
    source:'',
    citation:'',
    year:''
  },
  //object 2
  {
    quote:'object 2',
    source:'',
    citation:'',
    year:''
  },
  //object 3
  {
    quote:'object 3',
    source:'',
    citation:'',
    year:''
  },
  //object 4
  {
    quote:'object 4',
    source:'',
    citation:'',
    year:''
  },
  //object 5
  {
    quote:'object 5',
    source:'',
    citation:'',
    year:''
  }

];



// Create the getRandomQuuote function and name it getRandomQuote
function getRandomQuote(array){
  var randomNumber =Math.floor(Math.random()*array.length);
  return array[randomNumber].quote;

};/*


var isSource=false;

function keyCheck(index){
  if(quotes[index].source !== ''){
    isSource=true;
  }


}
*/
// Create the printQuote funtion and name it printQuote
function printQuote(){
var quote = getRandomQuote(quotes);
var stringOfQuoteProperties = "<p class=\"quote\">"+quote+"</p>"
/*<p class=\"source\"> [source here]
  <span class="citation"> [citation here] </span>
  <span class="year"> [year here] </span>
</p>"
*/

document.getElementById('quote-box').innerHTML = stringOfQuoteProperties;

}


// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
