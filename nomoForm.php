<?PHP
include "nomoHeader.php";
?>

<form action='process_form.php' method='post'>
Name <input type='text' name='fullname' value=" <?php echo isset($_POST['fullname']) ? $_POST['fullname']: ""; ?>"  required><br>
Email* <input type='email' name='email' required><br>
Message <textarea name='comment' placeholder='Enter comments here.'></textarea><br>
<input type='submit' name='submit' value='Submit'>
<p id='disclaimer'>*Only the artist will see your email</p>
</form>

<script> 
	// Change background color
	ctx.fillStyle = "#dee";
	ctx.fillRect(0,0,phone.width,phone.height);
</script>
<?PHP
include "nomoFooter.php"
?>