<?php
    // $servername = "localhost";
    // $username = "u313581005_d6";
    // $password = "D6_challenge";
    // $db = "u313581005_d6_challenge";

    $servername = "localhost";
    $username = "root";
    $password = "293593";
    $db = "d6_challenge";
    
    // Create connection
    $conn = new mysqli($servername, $username, $password, $db);
    
    // Check connection
    if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
    }