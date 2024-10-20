<?php
// Function to sanitize input
function sanitize_input($data) {
    return htmlspecialchars(stripslashes(trim($data)));
}

// Initialize response array
$response = array("status" => "error", "message" => "Something went wrong");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get data from form and sanitize
    $firstname = sanitize_input($_POST['first-name'] ?? '');
    $lastname = sanitize_input($_POST['last-name'] ?? '');
    $email = sanitize_input($_POST['email'] ?? '');
    $phonenumber = sanitize_input($_POST['phone-number'] ?? '');
    $company = sanitize_input($_POST['company'] ?? '');
    $companywebsite = sanitize_input($_POST['companywebsite'] ?? '');
    $message = sanitize_input($_POST['message'] ?? '');

    // Check required fields
    if (!empty($email) && !empty($firstname) && !empty($lastname)) {
        $to = "contact@rapdservice.co.uk";
        $subject = "New Lead Alert - Mail From RAPD Website";
        $txt = "First Name: $firstname\r\n"
             . "Last Name: $lastname\r\n"
             . "Email: $email\r\n"
             . "Phone Number: $phonenumber\r\n"
             . "Company: $company\r\n"
             . "Company Website: $companywebsite\r\n"
             . "Message: $message";

        $headers = "From: noreply@rapdservice.co.uk\r\n"
                 . "CC: contact@rapdservice.co.uk";

        // Attempt to send the email
        if (mail($to, $subject, $txt, $headers)) {
            // Success response
            $response['status'] = 'success';
            $response['message'] = 'Email sent successfully!';
        } else {
            // Failure to send email
            $response['message'] = 'Failed to send email.';
        }
    } else {
        // Missing required fields
        $response['message'] = 'Required fields are missing (email, first name, or last name).';
    }
} else {
    $response['message'] = 'Invalid request method.';
}

// Return JSON response
header('Content-Type: application/json');
echo json_encode($response);
?>
