<?php

    // header('Access-Control-Allow-Origin: http://localhost:3000'); // for dev purposes
    
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
    // echo "Connected successfully";

    $result = $conn->query("SELECT `company_name` FROM `clients`");
    
    $resultObj = [];
    
    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
          array_push($resultObj, $row['company_name']);
          // print_r($row['company_name']);
        }
        echo json_encode($resultObj );
      } else {
        echo "0 results";
      }
      $conn->close();
?>