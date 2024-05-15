<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // reCAPTCHA verification
    $recaptcha_secret = '6LdWBt4pAAAAADpJLw3riZ3QY9s8YCgV13tKJZqs';
    $recaptcha_response = $_POST['g-recaptcha-response'];
    
    // Make the API request
    $response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$recaptcha_secret&response=$recaptcha_response");
    $response_keys = json_decode($response, true);

    // Debugging statements
    error_log(print_r($response_keys, true));

    if (!$response_keys["success"] || $response_keys["score"] < 0.5) {
        echo "reCAPTCHA verification failed. Please try again.";
        exit;
    }

    // Collect form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $company = $_POST['company'];
    $message = $_POST['message'];

    // Email details
    $to = "semaanceline@hotmail.com";
    $subject = "[celine-semaan] Contact Form Inquiry";
    $body = "
        <html>
        <head>
        <title>Contact Form Inquiry</title>
        </head>
        <body>
        <p><strong>Name:</strong> $name</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Company:</strong> $company</p>
        <p><strong>Message:</strong><br>$message</p>
        </body>
        </html>
    ";
    $headers = "From: $email\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo "Email successfully sent.";
    } else {
        echo "Email sending failed.";
    }
}
?>
