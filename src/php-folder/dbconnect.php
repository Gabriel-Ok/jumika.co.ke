<?php
$connect= mysqli_connect("localhost","root","","bunnys");
if(!$connect){
    echo ("error connecting to the db");
}else{
    echo ("connected successfuly");
}
?>