<?php
    include '../../config.php';
        
    $json = file_get_contents("php://input"); // json string
    $object = json_decode($json);
    $result = $conn->query("SELECT * FROM `clients` WHERE `company_name` ='" . $object->name . "';");
     
    $resultObj = [];
    
    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
          array_push($resultObj, $row);
        }
        echo json_encode($resultObj );
      } else {
        echo "0 results";
      }
      $conn->close();
?>