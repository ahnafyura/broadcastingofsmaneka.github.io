function emailSend(){

	var userName = document.getElementById('name').value;
	var phone = document.getElementById('phone').value;
	var email = document.getElementById('email').value;

	var messageBody = "Name " + userName +
	"<br/> Phone " + phone +
	"<br/> Email " + email;
	Email.send({
    Host : "smtp.elasticemail.com",
    Username : "ahnafforyou@gmail.com",
    Password : "4D829320C0E062BD454EB752D2F726D17161",
    To : 'broadcast.smaneka@mtsn4malang.sch.id',
    From : "ahnafforyou@gmail.com",
    Subject : "This is the subject",
    Body : messageBody
}).then(
  message => {
  	if(message=='OK'){
  		swal("Secussful", "Submited to broadcast.smaneka@mtsn4malang.sch.id", "success");
  	}
  	else{
  		swal("Error", "You clicked the button!", "error");
  	}
  }
);
}