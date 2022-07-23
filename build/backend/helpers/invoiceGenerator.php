<?php

    // header('Access-Control-Allow-Origin: http://localhost:3000'); // for dev purposes
    // echo "test";
    $json = file_get_contents("php://input"); // json string
    // echo $json;
    // $object = json_decode('{"invoiceId":3,"clientID":1,"productID":3,"productQuantity":1,"lineTotal":13.19,"dueDate":"2022-07-23"}');
    $object = json_decode($json);
    // echo $object;
    
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
    
    // print_r($object);

    foreach($object as $invoiceItem){
        // print_r($invoiceItem);
        $result = $conn->query("INSERT INTO invoices(`invoice_id`,`client_id`,`product_id`,`product_quantity`,`line_total`,`due_date`)
            VALUES('" . $invoiceItem->invoiceId . "','" . $invoiceItem->clientID . "','" . $invoiceItem->productID . "','" 
            . $invoiceItem->productQuantity . "','" . $invoiceItem->lineTotal . "','" . $invoiceItem->dueDate . "');");
     
        $resultObj = [];
    
        
    }
    $conn->close();
    // $result = $conn->query("INSERT INTO invoices(`invoice_id`,`client_id`,`product_id`,`product_quantity`,`line_total`,`due_date`)
    //  VALUES('" . $object->invoiceId . "','" . $object->clientID . "','" . $object->productID . "','" 
    //  . $object->productQuantity . "','" . $object->lineTotal . "','" . $object->dueDate . "');");
     
    // $resultObj = [];
    
    // if ($result->num_rows > 0) {
    //     // output data of each row
    //     while($row = $result->fetch_assoc()) {
    //       array_push($resultObj, $row);
    //     //   print_r($row);
    //     }
    //     echo json_encode($resultObj );
    //   } else {
    //     echo "0 results";
    //   }
    //   $conn->close();
?>