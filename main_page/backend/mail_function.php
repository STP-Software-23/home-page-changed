<?php

use PHPMailer\PHPMailer\PHPMailer;

require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/OAuth.php';
require 'PHPMailer/src/SMTP.php';
require 'PHPMailer/src/Exception.php';

function mailer($fullname, $email, $subject, $message)
{
    try {
        //code...
    $phpMail = new PHPMailer();
    $phpMail->IsSMTP();
    $phpMail->SMTPDebug = 0;  
    $phpMail->Host = "mail.stp-org.com";
    $phpMail->Port = 25;
    //$phpMail->SMTPAuth   = true;
    $phpMail->SMTPSecure = "tls";
    // $phpMail->Username   = "stp.officially.20@stp-org.com";
    // $phpMail->Password   = "123456789STP";
    $phpMail->Username = 'stp.officially.22@stp-org.com'; // your email
    $phpMail->Password = '{2AlxYCOi$X}'; // you email password

    $phpMail->setFrom($email, $fullname);
    $phpMail->addReplyTo($email, $fullname);
    // $phpMail->addAddress("stp.officially.20@stp-org.com","STP");
    $phpMail->addAddress("stp.officially.22@stp-org.com","STP");
    $phpMail->Subject = $subject;
    $phpMail->Body = $message;
    
    if (!$phpMail->send() )
        echo "<script> alert('was not sent, please check your info again!'); window.location.href = 'http://stp-org.com/';</script>";
    else
        echo "<script> alert('Thank you $fullname, for contacting us!'); 
       window.location.href = 'http://stp-org.com/';</script>";
        
    
    } catch (\Throwable $th) {
        //throw $th;
        echo "<script> alert('Something went wrong!'); </script>";
    }
    
}
