var retOp = document.getElementById("retOp");

function formChecker(){
	document.getElementById("myForm").style.display = "none";
	var name=document.getElementById("formName").value;
	var email=document.getElementById("formEmail").value;
	alert(name+", thank you for your details. We will be in touch via "+email+" shortly.");
	retOp.innerHTML = "<b>Form submitted successfully</b>";
}


