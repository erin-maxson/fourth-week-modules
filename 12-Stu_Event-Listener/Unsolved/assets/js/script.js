var count = 0;
var incrementEl = document.querySelector("#increment");
var decrementEl = document.querySelector("#decrement");
var countEl = document.querySelector("#count");

function setCounterText() {
  countEl.textContent = count;
}

//TODO: Add event listener to increment button
incrementEl.addEventListener("click", function() {
  //If clicking add increment, add number
  count++;
  console.log("incrementEl");
  setCounterText();
} )

//TODO: Add event listener to decrement button 
decrementEl.addEventListener("click", function() {
 //If clicking decrement, decrease number
if (count > 0) {
  count--;
  console.log("decrementEl");
  setCounterText();
}

})
