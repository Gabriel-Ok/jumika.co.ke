<?php
if(isset($_POST["submit"])){

    require "dbconnect.php";
    $user_name=mysqli_real_escape_string($connect,$_POST["username"]);
    $email=mysqli_real_escape_string($connect,$_POST["email"]);
    $password=mysqli_real_escape_string($connect,$_POST["password"]);
    $repeat_password=mysqli_real_escape_string($connect,$_POST["c_password"]);

  if(empty($user_name||$email||$password||$repeat_password)){
     header("location:registe.js=pleae enter all fields");
     exit();
  
    }
    else if(!filter_var($email,FILTER_VALIDATE_EMAIL) && !preg_match("/^[a-zA-Z0-9]*$/",$user_name)){
        header("location: ../signup.php?signup=Invalid email and Username");
        exit();
            }
            else if(!filter_var($email,FILTER_VALIDATE_EMAIL)){
                header("location:register.js= incorect email");
                exit();
            }
            else if(!preg_match("/^[a-zA-Z0-9]*$/,$user_name")){
                header("location: register.js= wrong username");
                exit();
            }
             else if($password!==$repeat_password){
                 header("location: register.js= the two password could not match");
                 exit();
             }
             else{
                 $sql="SELECT Username FROM users WHERE Username=?";
                 $stmt=mysqli_stmt_init($connect);
                 if(mysqli_stmt_prepare($connet,$sql)){
                     header("location:register.js= error connecting to the server");
                     exit();
                 }else{
                     myqli_stmt_bind_param($stmt,"s",$user_name);
                     mysqli_stmt_execute($stmt);
                     mysqli_stmt_store_result($stmt);
                     $resultCheck=mysqli_num_rows($stmt);
                     if($resultCheck>0){
                         header("location: register.js= username already taken");
                         exit();
                     }else{
                         $sql="INSERT INTO users(Username,Email,Password) VALUES(?,?,?);";
                          $stmt=mysqli_stmt_init($connect);
                          if(!mysqli_stmt_prepare($connect,$stmt)){
                              header("location: register.js= error connecting to the server");
                              exit();
                          }else {
                              $hashedPassword=md5($password);
                              mysqli_stmt_bind_param($stmt,"sss",$user_name,$email,$hashedPassword);
                              mysqli_stmt_execute($stmt);
                              header("location: register.j= signup successfully");
                          }
                     }

                 }

             }
        
        
}



?>