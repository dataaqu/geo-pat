<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  // Get the form data
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  // Validate the form data
  if (empty($name) || empty($email) || empty($message)) {
    // If any field is empty, display an error message
    echo "Please fill in all the required fields.";
  } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    // If the email is invalid, display an error message
    echo "Invalid email format.";
  } else {
    // Sanitize the form data
    $name = htmlspecialchars($name);
    $email = htmlspecialchars($email);
    $message = htmlspecialchars($message);

    // Set up the email
    $to = "datiobashvili1@gmail.com";
    $subject = "New message from $name";
    $body = "Name: $name\nEmail: $email\n\n$message";
    $headers = "From: $email\r\n" . "Reply-To: $email\r\n";

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
      // successfully
      echo "Thank you! Your message has been sent.";
    } else {
      // Error
      echo "Oops! Something went wrong. Please try again later.";
    }
  }
}
?>
