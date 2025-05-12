let icons1 = document.querySelectorAll(".parts");

icons1.forEach(icon => {
    icon.addEventListener("mouseover", () => {
        icon.style.color = "black"; 
    });

    icon.addEventListener("mouseout", () => {
        icon.style.color = ""; 
    });
});

// box2
let icons2 = document.querySelectorAll(".box4,.box4alt");

icons2.forEach(icon => {
    icon.addEventListener("mouseover", () => {
        icon.style.backgroundColor = "black"
        icon.style.color="white";
    });

    icon.addEventListener("mouseout", () => {
        icon.style.backgroundColor = "";
        icon.style.color="";
    });
});

//box3

// Create a blur overlay

// langbutton
let b1 = true;  // Initial state is true
let box2 = document.querySelectorAll(".box2");

box2.forEach(icon => {
    icon.addEventListener("click", () => {
        if (b1) {
            icon.classList.toggle("translate"); 
            icon.innerHTML = "HI";  
            b1 = false;  
        } else {
            icon.classList.toggle("translate");  
            icon.innerHTML = "EN";
            b1 = true;  
        }
    });
});



// test

let blurOverlay = document.createElement("div");
blurOverlay.style.position = "fixed";
blurOverlay.style.top = "0";
blurOverlay.style.left = "0";
blurOverlay.style.width = "100%";
blurOverlay.style.height = "100%";
blurOverlay.style.background = "rgba(0, 0, 0, 0.2)";
blurOverlay.style.backdropFilter = "blur(5px)";
blurOverlay.style.zIndex = "998";
blurOverlay.style.transition = "backdrop-filter 0.3s ease";

// Show overlay on click
let box3 = document.querySelector("#box3");
box3.addEventListener("click", () => {
    document.body.appendChild(blurOverlay);

    let box03 = document.querySelector(".box03");
    let box02 = document.querySelector(".box02");
    box03.style.display = "block";
    box02.style.display = "block";
});

// Hide overlay on cancel
let cancel = document.querySelector(".cancel");
cancel.addEventListener("click", () => {
    let box03 = document.querySelector(".box03");
    let box02 = document.querySelector(".box02");
    box02.style.display = "none";
    box03.style.display = "none";

    // Remove overlay from DOM
    if (blurOverlay.parentElement) {
        blurOverlay.remove();
    }
});

let prefix = document.querySelector(".prefix");
let passwordInput = document.getElementById("password-input");

prefix.addEventListener("click", () => {
  // Ensure that prefix has an <i> tag inside it.
  const eyeIcon = prefix.querySelector("i");

  if (passwordInput.type === "password") {
    passwordInput.type = "text"; // Show the password
    eyeIcon.classList.remove("fa-eye-slash");
    eyeIcon.classList.add("fa-eye");
  } else {
    passwordInput.type = "password"; // Hide the password
    eyeIcon.classList.remove("fa-eye");
    eyeIcon.classList.add("fa-eye-slash");
  }
});
