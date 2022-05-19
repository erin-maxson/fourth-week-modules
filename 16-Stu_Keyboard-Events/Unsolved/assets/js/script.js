var code = document.getElementById('code');
var codeID = document.querySelector("#code");
var keyID = document.querySelector("#key");
var statusID = document.querySelector("#status");

function keydownAction(event) {
  // TODO: Complete keydown function
console.log(event);
codeID.innerHTML = event.key;
keyID.innerHTML = event.code;
statusID.innerHTML = "KEYDOWN Event";
}

function keyupAction() {
  document.querySelector("#status").innerHTML = "KEYUP Event";
}

document.addEventListener("keyup", keyupAction);
// TODO: Add Event Listener for "keydown" event

document.addEventListener("keydown", keydownAction);