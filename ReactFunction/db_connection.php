 
 <?php
 
define('DB_HOST', '127.0.0.1:3307');
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_NAME', 'react');

function db_connect()
{
	
	
		$connect = new mysqli(DB_HOST,DB_USER,DB_PASS,DB_NAME);
		
		if ($connect->connect_error) {
    die("Connection failed: " . $connect->connect_error);
}
mysqli_set_charset($connect, "utf-8");
return $connect;
	
}
$conn = db_connect();
?> 