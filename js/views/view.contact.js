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

	var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!name || !email || !message) {
      errorDiv.innerHTML = "<strong>Error!</strong> All fields are required.";
      errorDiv.classList.remove("d-none");
      return;
    }

    if (!emailPattern.test(email)) {
      errorDiv.innerHTML = "<strong>Error!</strong> Please enter a valid email address.";
      errorDiv.classList.remove("d-none");
      return;
    }

    errorDiv.classList.add("d-none"); // Hide error if everything is valid


    var phoneNumber = "917012779827"; // Replace with your WhatsApp number (with country code, e.g., 919876543210)
    var text = `Hi I'm ${name}.%0AEmail: ${email}%0A%0AMessage: ${message}`;
    var url = `https://wa.me/${phoneNumber}?text=${text}`;

    window.open(url, "_blank").focus();
  }
