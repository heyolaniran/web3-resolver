<?php 
namespace App\DataBase;
use PDO;
class DBconnect
{
    public static function Connect()
    {
        $server ="localhost";
        $username="root";
        $pass = "";
        $dbname="ipfs";
      return  $db = new \PDO("mysql:host=$server;dbname=$dbname", $username, $pass);
       
    }
}