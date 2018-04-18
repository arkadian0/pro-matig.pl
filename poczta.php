
	<?php 
	$adres = 'pro-matig@wp.pl'; 	// pod ten adres zostanie wysłana 
	$temat = $_POST['subject'];
	$email = $_POST['email'];
	$name = $_POST['imie'];
	$message = htmlspecialchars($_POST['message']);
	$content = "
	$name
	
	
	$message";
	
	$header = 	"From: $email  \nContent-Type:".
			' text/plain;charset="iso-8859-2"';
	
if (mail($adres, $temat,$content,$header))
	{
		echo '<script type="text/javascript">alert(" WIADOMOSC ZOSTAŁA WYSŁANA"); </script>';
        
	
	}
	else {
		echo '<script type="text/javascript">alert(" WIADOMOSC NIE ZOSTAŁA WYSŁANA , SPRÓBUJ JESZCZE RAZ"); </script>';
		
		
  }	
	?>