/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(timeString) {
  let integerTime = parseInt(timeString);
  
  if (integerTime < 12) {
    return "Good Morning";
  } else if (integerTime > 12 && integerTime <= 17) {
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
  }

  function displayMessage(timeString) {
    let element = document.querySelector("#greeting");
    element.innerText = timeString;
  }