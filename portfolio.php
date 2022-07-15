<?php

    $fName = $_POST['fName'];
    $lName = $_POST['lName'];
    $country = $_POST['country'];
    $email = $_POST['email'];
    $comment = $_POST['comment'];

    $host = 'localhost';
    $db = 'portfolio';
    $user = 'root';
    $pass = '';
    $dsn = "mysql:host=$host;dbname=$db;charset=UTF8";
    
    $pdo = new PDO($dsn, $user, $pass);

   

    try{
    
        if($pdo)
	    {
		    echo "database is connected \n";
	    }

        $insertQuery="insert into user(fName,lName,country,email,comment) 
                                values(:fName,:lName,:country,:email,:comment)";

        $statement=$pdo->prepare($insertQuery);

        $statement->execute([
            ':fName'=>$fName,
            ':lName'=>$lName,
            ':country'=>$country,
            ':email'=>$email,
            ':comment'=>$comment
        ]);

        header('Location:home.html');
        exit();

    }
    catch(PDOException $e)
    {
        echo $e->getMessage();
    }
    finally
    {
        unset($pdo);
        unset($statement);
    }
    
?>