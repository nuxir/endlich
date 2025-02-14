/*
Name: 			View - Contact
Written by: 	Okler Themes - (http://www.okler.net)
Theme Version:	9.7.0
*/

function whatsapp() {
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();
    var errorDiv = document.getElementById("whatsapp-error");

    if (!name || !email || !message) {
      errorDiv.classList.remove("d-none"); 
      return;
    } else {
      errorDiv.classList.add("d-none"); 
    }

    var phoneNumber = "7012779827"; // Replace with your WhatsApp number (with country code, e.g., 919876543210)
    var text = `Hello, my name is ${name}.%0AEmail: ${email}%0A%0AMessage: ${message}`;
    var url = `https://wa.me/${phoneNumber}?text=${text}`;

    window.open(url, "_blank").focus();
  }
