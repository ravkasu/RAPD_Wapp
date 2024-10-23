<?php
// Set CORS headers to allow requests from your Angular application
header("Access-Control-Allow-Origin: *"); // Allow requests from any origin. You can specify your domain instead of *
header("Access-Control-Allow-Methods: POST, OPTIONS"); // Allow POST and OPTIONS requests
header("Access-Control-Allow-Headers: Content-Type, Authorization"); // Allow specific headers
header('Content-Type: application/json');

// Handle preflight request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    // Respond to preflight CORS request with 200 OK
    http_response_code(200);
    exit;
}

// Function to sanitize input
function sanitize_input($data) {
    return htmlspecialchars(stripslashes(trim($data)));
}

// Initialize response array
$response = array("status" => "error", "message" => "Something went wrong");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get data from POST request and sanitize
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    $firstname = sanitize_input($data['firstName'] ?? '');
    $lastname = sanitize_input($data['lastName'] ?? '');
    $email = sanitize_input($data['email'] ?? '');
    $phonenumber = sanitize_input($data['phoneNumber'] ?? '');
    $company = sanitize_input($data['company'] ?? '');
    $companywebsite = sanitize_input($data['companyWebsite'] ?? '');
    $message = sanitize_input($data['message'] ?? '');

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
echo json_encode($response);
?>
