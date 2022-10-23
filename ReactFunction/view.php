<?php
require 'db_connection.php';
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET,PUT,POST,DELETE,PATCH,OPTIONS');
$users=[];
$query = "Select * from tbl_users";

if($result = mysqli_query($conn,$query)){

    $count_row =0;
    while($row =mysqli_fetch_assoc($result))
    {
        $users[$count_row]['id'] = $row['id'];
        $users[$count_row]['username'] = $row['username'];
        $users[$count_row]['password'] = $row['password'];
        $count_row++;
    }
    echo json_encode($users);
}
else{
    http_response_code(404);
}


?>