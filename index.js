/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(time){
  let hour = time.split(':')
  let hourNew = parseInt(hour, 10)
  if(hourNew < 12){
    return "Good Morning"
  } else if(hourNew < 17){
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
}
function displayMessage(word){
  let greeting = greet(word)
  let element = document.getElementById("greeting")
  element.innerText=word
}