// Get the modal elements
const modal1 = document.getElementById("myModal1");
const modal2 = document.getElementById("myModal2");
const modal3 = document.getElementById("myModal3");
const modal4 = document.getElementById("myModal4");

// Get the buttons that open the modals
const btn1 = document.getElementById("openModal1");
const btn2 = document.getElementById("openModal2");
const btn3 = document.getElementById("openModal3");
const btn4 = document.getElementById("openModal4");

// Get the close button elements
const closeBtns = document.getElementsByClassName("close");

// When the user clicks the first button, open the first modal 
btn1.onclick = function() {
  modal1.style.display = "block";
  modal1.classList.add("show");
}

// When the user clicks the second button, open the second modal
btn2.onclick = function() {
  modal2.style.display = "block";
  modal2.classList.add("show");
}

// When the user clicks the third button, open the second modal
btn3.onclick = function() {
  modal3.style.display = "block";
  modal3.classList.add("show");
}

// When the user clicks the third button, open the second modal
btn4.onclick = function() {
  modal4.style.display = "block";
  modal4.classList.add("show");
}


// When the user clicks on a close button, close the corresponding modal
for (let i = 0; i < closeBtns.length; i++) {
  closeBtns[i].onclick = function() {
    modal1.style.display = "none";
    modal1.classList.remove("show");
    modal2.style.display = "none";
    modal2.classList.remove("show");
    modal3.style.display = "none";
    modal3.classList.remove("show");
    modal4.style.display = "none";
    modal4.classList.remove("show");
  }
}

// When the user clicks anywhere outside of a modal, close it
window.onclick = function(event) {
  if (event.target == modal1 || event.target == modal2 || event.target == modal3 || event.target == modal4) {
    modal1.style.display = "none";
    modal1.classList.remove("show");
    modal2.style.display = "none";
    modal2.classList.remove("show");
    modal3.style.display = "none";
    modal3.classList.remove("show");
    modal4.style.display = "none";
    modal4.classList.remove("show");
  }
}
