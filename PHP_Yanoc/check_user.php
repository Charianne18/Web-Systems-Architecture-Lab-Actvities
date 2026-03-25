
<?php
header('Content-Type: application/json');

// Trim whitespace and sanitize
$username = isset($_POST['username']) ? trim($_POST['username']) : "";
$username_lower = strtolower($username);

// Hardcoded sample usernames
$taken_usernames = ["admin", "user", "root123"];

if (empty($username)) {
    echo json_encode([
        "available" => false,
        "message" => "Please enter a username"
    ]);
} elseif (in_array($username_lower, $taken_usernames)) {
    echo json_encode([
        "available" => false,
        "message" => "Username '$username' is taken"
    ]);
} else {
    echo json_encode([
        "available" => true,
        "message" => "Username '$username' is available!"
    ]);
}
?>


