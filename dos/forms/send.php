<?php
require 'PHPMailer/PHPMailerAutoload.php';

//Create a new PHPMailer instance
mail = new PHPMailer();
mail->IsSMTP();
 
//Configuracion servidor mail
mail->From = "xatruchtech@gmail.com"; //remitente
mail->SMTPAuth = true;
mail->SMTPSecure = 'tls'; //seguridad
mail->Host = "smtp.gmail.com"; // servidor smtp
mail->Port = 587; //puerto
mail->Username ='xatruchtech@gmail.com'; //nombre usuario
mail->Password = 'Alimaster91'; //contraseña

//Agregar destinatario
mail->AddAddress($_POST['email']);
mail->Subject = $_POST['subject'];
mail->Body = $_POST['message'];

//Avisar si fue enviado o no y dirigir al index
if (mail->Send()) {
    echo'<script type="text/javascript">
           alert("Email Sent. Thank you!");
        </script>';
} else {
    echo'<script type="text/javascript">
           alert("Unable to send, try again!");
        </script>';
}
?>
