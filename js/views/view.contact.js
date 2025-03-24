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
    "entry.502134158": formData.name,
    "entry.1295046311": formData.email,
    "entry.660971608": formData.message,
  });

  const googleFormUrl =
  "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfLxa7xChfMyvnP1v0KWeVld0oTfcfxhEqXBqVUJiMjba0jsg/formResponse";
  await fetch(googleFormUrl, {
    method: "POST",
    body: formBody,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    mode: "no-cors",
  });
  var phoneNumber = "917012779827"; 
  var text = `**Name:** ${name}%0A**Email:** ${email}%0A%0A**Message:** ${message}`;
  var url = `https://wa.me/${phoneNumber}?text=${text}`;

  window.open(url, "_blank").focus();
}
