/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
let t = parseInt(time, 10);
if (t <12) return "Good Morning"
if (t > 17) return "Good Evening"
return "Good Afternoon"
}

function displayMessage(string) {
  document.getElementById("greeting").innerText = string

}

/* Write your implementation of displayMessage() */
