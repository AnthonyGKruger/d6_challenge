<?php
    include '../../config.php'; 

    $result = $conn->query("SELECT `invoice_id` FROM `invoices` ORDER BY `invoice_id` DESC LIMIT 1;");
     
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