<?php
// Get JSON input from the Angular form
$data = json_decode(file_get_contents('php://input'), true);

$firstname = $data['firstName'];
$lastname = $data['lastName'];
$email= $data['email'];
$phonenumber= $data['phoneNumber'];
$company= $data['company'];
$companywebsite= $data['companyWebsite'];
$message= $data['message'];

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
    // Return a success response to the frontend
    echo json_encode(["status" => "success", "message" => "Email sent successfully!"]);
} else {
    echo json_encode(["status" => "error", "message" => "Email not sent."]);
}
?>
