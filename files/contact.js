const inputs = document.querySelectorAll(".input");

  function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
  }

  function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
      parent.classList.remove("focus");
    }
  }

  inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
  });

  document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    // Create email body
    const body = "Name: " + name + "\n";
    body += "Email: " + email + "\n";
    body += "Phone: " + phone + "\n";
    body += "Message: " + message;

    // Send email using Email.js
    emailjs
      .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        to_email: "r.uwamahoro@alustudent.com", 
        from_name: name,
        from_email: email,
        message: body,
      })
      .then(function (response) {
        console.log("Email sent:", response);
        // Show a confirmation message
        document.getElementById("confirmation").innerHTML = "Message sent!";
        // Reset the form
        document.getElementById("contactForm").reset();
      })
      .catch(function (error) {
        console.error("Email error:", error);
        // Show an error message
        document.getElementById("confirmation").innerHTML =
          "Oops! Something went wrong. Please try again later.";
      });
  });