var name=document.getElementById("name-1019")
var email=document.getElementById("email-1019")
var bodyr = document.getElementById("message-1019")
var submit = document.getElementById("subtn")
submit.addEventListener('click', function() {
	const recipient = 'darelemary@gmail.com';
	const subject = name.value;
	const body = bodyr.value;

	const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

	window.location.href = mailtoLink;
})

// Get the cookie value
var cookieValue = document.cookie.match(/myCookie=([^;]*)/)[1];
console.log(cookieValue); // Output: "helloworld"