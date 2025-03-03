/*
Name: 			View - Contact
Written by: 	Okler Themes - (http://www.okler.net)
Theme Version:	9.7.0
*/

async function whatsapp() {
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
    errorDiv.innerHTML =
      "<strong>Error!</strong> Please enter a valid email address.";
    errorDiv.classList.remove("d-none");
    return;
  }

  errorDiv.classList.add("d-none"); // Hide error if everything is valid

  const formData = {
    name: name,
    email: email,
    message: message,
  };
  const formBody = new URLSearchParams({
    // "entry.1042504169": formData.name,
    // "entry.686074173": formData.email,
    // "entry.206193686": formData.message,
  });

  // const googleFormUrl =
    // "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeiHIJVATQlPKILLEd0g8VGIT-e2rllR_wma9cKD1-76mAoKQ/formResponse";
  // await fetch(googleFormUrl, {
  //   method: "POST",
  //   body: formBody,
  //   headers: {
  //     "Content-Type": "application/x-www-form-urlencoded",
  //   },
  //   mode: "no-cors",
  // });
  var phoneNumber = "917012779827"; // Replace with your WhatsApp number (with country code, e.g., 919876543210)
  var text = `**Name:** ${name}%0A**Email:** ${email}%0A%0A**Message:** ${message}`;
  var url = `https://wa.me/${phoneNumber}?text=${text}`;

  window.open(url, "_blank").focus();
}
