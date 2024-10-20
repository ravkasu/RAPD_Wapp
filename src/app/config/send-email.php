<?php
//get data from form  

$firstname = $_POST['first-name'];
$lastname = $_POST['last-name'];
$email= $_POST['email'];
$phonenumber= $_POST['phone-number'];
$company= $_POST['company'];
$companywebsite= $_POST['companywebsite'];
$message= $_POST['message'];
$to = "contact@rapdservice.co.uk";
$subject = "New Lead Alert - Mail From RAPD Website";
$txt ="First Name = ". $firstname . "\r\n  
    Last Name = ". $lastname . "\r\n  
    Email = " . $email . "\r\n  
    Phone Number = ". $phonenumber . "\r\n 
    Company = ". $company . "\r\n   
    Company Website = ". $companywebsite . "\r\n  
    Message =" . $message;
$headers = "From: noreply@rapdservice.co.uk" . "\r\n" . "CC: contact@rapdservice.co.uk";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:/thankyou");
?>