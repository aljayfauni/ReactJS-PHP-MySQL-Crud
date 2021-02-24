<?php

header('Access-Control-Allow-Origin: *');

header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');

header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require 'db_connection.php';


 $postdata =file_get_contents("php://input");

  if(isset($postdata) && !empty($postdata))
  {
    
    $request = json_decode($postdata);




       $username = $request->username;
       $password = $request->password;
  
       

        $query ="INSERT INTO `tbl_users`(`username`,`password`) VALUES ('{$username}','{$password}')";
      
       
        //header('location:../view/index.php');
        if(mysqli_query($conn,$query))
        {

            http_response_code(201);
        }
        else{
            http_response_code(422);
        }
     
        }





