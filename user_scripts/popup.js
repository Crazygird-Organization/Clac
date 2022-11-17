let doPopup = false; 

if (/\bCrOS\b/.test(navigator.userAgent)) {
    doPopup = true;
} else {
    doPopup = false;
}


function surveyInitialize() {
    if (doPopup == true) {
        let userOS = 1;
        localStorage.setItem("userOS", JSON.stringify(userOS));
    }
    if (doPopup == false) {
        let userOS = 0;
        localStorage.setItem("userOS", JSON.stringify(userOS));
    }
}

function surveyBuild() {
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
}