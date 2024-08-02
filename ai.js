search = document.getElementById('search-input')
searchbtn = document.getElementById('search-btn')
imagediv = document.getElementById('image')
document.getElementById('search-btn').addEventListener('click', function() {
const data = JSON.stringify({
	messages: [
		{
			role: 'user',
			content: "You Are Nutrition Coach Now If question Not About Nutrition Reply with:This isnt nutrition question ONLY dont answer Questions that not about nutrition ,question:"+search.value.trim()
		}
	],
	system_prompt: '',
	temperature: 0.9,
	top_k: 5,
	top_p: 0.9,
	max_tokens: 256,
	web_access: false
});

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		childrenimg=imagediv.childNodes;
    	for (var i = childrenimg.length - 1; i >= 0; i--) {
  			childrenimg[i].remove();
		}
		let response = JSON.parse(this.responseText);
		var respondtitle = document.createElement('h2');
		respondtitle.style.textAlign='center'
		respondtitle.textContent="Ai Nutrition Coach Response:"
		respondtitle.style.color = 'white'
		var respond = document.createElement('p');
		respond.textContent=response.result;
		respond.style.color='white'
		respond.style.textAlign='center'
		imagediv.appendChild(respondtitle)
		imagediv.appendChild(respond)


	}
});

xhr.open('POST', 'https://chatgpt-42.p.rapidapi.com/conversationgpt4-2');
xhr.setRequestHeader('x-rapidapi-key', '11516d09c2mshabea7ad1d801a9ep16f3cajsn6f91d5080029');
xhr.setRequestHeader('x-rapidapi-host', 'chatgpt-42.p.rapidapi.com');
xhr.setRequestHeader('Content-Type', 'application/json');

xhr.send(data);
})