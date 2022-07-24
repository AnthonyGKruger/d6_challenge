<?php
    include '../../config.php';
    
    $result = $conn->query("SELECT `company_name` FROM `clients`");
    
    $resultObj = [];
    
    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
          array_push($resultObj, $row['company_name']);
        }
        echo json_encode($resultObj );
      } else {
        echo "0 results";
      }
      $conn->close();
?>