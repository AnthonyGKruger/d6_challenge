<?php
    include "../../config.php";

    $json = file_get_contents("php://input"); // json string
    $object = json_decode($json);

    foreach($object as $invoiceItem){
        $result = $conn->query("INSERT INTO invoices(`invoice_id`,`client_id`,`product_id`,`product_quantity`,`line_total`,`due_date`)
            VALUES('" . $invoiceItem->invoiceId . "','" . $invoiceItem->clientID . "','" . $invoiceItem->productID . "','" 
            . $invoiceItem->productQuantity . "','" . $invoiceItem->lineTotal . "','" . $invoiceItem->dueDate . "');");
     
        $resultObj = [];
    }
    $conn->close();
?>