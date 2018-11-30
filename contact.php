<?php
  // echo json_encode('entra en el php');

  $to = "email@email.com";
  $subject = "Email from website";
  // $name = $_POST["name"];
  $email = $_POST["email"];
  // $texto = $_POST["message"];

  // $message = "Name: $name \n";
  $message= "Email: $email \n";
  // $message.= "\nMessage: $texto \n";

  $header = "From: Email < no-reply@email.com >\r\n"; 
  $header.= "X-Sender: Email < no-reply@email.com >\n";
  $header.= 'X-Mailer: PHP/' . phpversion();
  $header.= "MIME-Version: 1.0\r\n"; 
  $header.= "Content-Type: text/plain; charset=utf-8\r\n"; 
  $header.= "X-Priority: 1\r\n"; 
  
  if(mail($to, $subject, $message, $header)){
    echo json_encode('1');
  }else{
    echo json_encode('0');
  }  
?>
