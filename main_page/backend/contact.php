<?php

include "./mail_function.php";

if (isset($_POST['submit'])) {

  $fullname = $_POST['fullname'];
  $email = $_POST['email'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];

  mailer($fullname, $email, $subject, $message);

  
}
?>
