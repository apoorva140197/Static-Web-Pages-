<?php
    ini_set( 'display_errors', 1 );
    error_reporting( E_ALL );
	
    $email_to = "vermahimanshu2908@gmail.com";
    $email_subject = "Online query received";
 
    function died($error) {
        echo "We are very sorry, but there were error(s) found with the form you submitted. ";
        echo "These errors appear below.<br /><br />";
        echo $error."<br /><br />";
        echo "Please go back and fix these errors.<br /><br />";
        die();
    }
 
 
      // validation expected data exists
    if(!isset($_POST['name']) ||
        !isset($_POST['email']) ||
        !isset($_POST['mobile']) ||
        !isset($_POST['message'])) {
        died('We are sorry, but there appears to be a problem with the form you submitted.');       
    }
 
    $field_name = $_POST['name']; // required
    $field_email = $_POST['email']; // required
    $field_mobile = $_POST['mobile']; // required
    $field_message = $_POST['message']; // required
 
    $error_message = "";
	
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
	if(!preg_match($email_exp,$field_email)) {
    $error_message .= 'The Email Address you entered does not appear to be valid.<br />';
	}
  
	$mobile_exp='/^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/';
    if(!preg_match($mobile_exp,$field_mobile)) {
    $error_message .= 'The Mobile Number you entered does not appear to be valid.<br />';
	}
  
    $string_exp = "/^[A-Za-z .'-]+$/";
	if(!preg_match($string_exp,$field_name)) {
    $error_message .= 'The Name you entered does not appear to be valid.<br />';
	}

  if(strlen($field_message) < 2) {
    $error_message .= 'The Message you entered do not appear to be valid.<br />';
  }
 
  if(strlen($error_message) > 0) {
    died($error_message);
  }
 
    $email_message = "Form details below: \n\n";
 
     
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }
 
    $email_message .= "Name: ".clean_string($field_name)."\n";
    $email_message .= "Email: ".clean_string($field_email)."\n";
    $email_message .= "Mobile: ".clean_string($field_mobile)."\n";
    $email_message .= "Comments: ".clean_string($field_message)."\n";
 
// create email headers
$headers = 'From: '.$field_email."\r\n".
'Reply-To: '.$field_email."\r\n" .
'X-Mailer: PHP/' . phpversion();
if(mail($email_to, $email_subject, $email_message, $headers)){ 
	echo "Test email sent";
	?>
	<script language="javascript" type="text/javascript">
        alert('Thank you for the message. We will contact you within 24 Hours.');
        window.location = 'index.html';
	</script>
	<?php
}
else {
	echo "Test email Not sent";
	?>
    <script language="javascript" type="text/javascript">
        alert('Message failed. Please, send an email seperately.');
        window.location = 'index.html';
    </script>
	<?php
}
?>