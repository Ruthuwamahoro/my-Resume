<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $phone = $_POST["phone"];
  $message = $_POST["message"];

  $to = "r.uwamahoro@alustudent.com"; // Replace with your email address
  $subject = "Contact Form Submission from $name";
  $message = "Name: $name\nEmail: $email\nPhone: $phone\nMessage: $message";

  // You can add more headers if needed, like From and Content-Type.
  $headers = "From: $email";

  // Send the email
  mail($to, $subject, $message, $headers);
}
