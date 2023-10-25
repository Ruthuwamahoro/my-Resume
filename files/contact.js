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




function sendEmail(){
  Email.send({
        Host : "smtp.gmail.com",
        Username : "uwamarith@gmail.com",
        Password : "0782789005",
        To : 'uwamarith@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New contact Form Enquiry",
        Body : "Name: " +document.getElementById("name").value 
        + "<br> Email: " + document.getElementById("email").value
        + "<br> Phone no: " + document.getElementById("phone").value
        + "<br> Message: " + document.getElementById("message").value
    }).then(
      message => alert("Message sent successfully")
    );
}