search = document.getElementById('search-input')
searchbtn = document.getElementById('search-btn')
imagediv = document.getElementById('image')
banner = document.getElementById("banner")
document.getElementById('search-btn').addEventListener('click', function() {
const data = JSON.stringify({
	ingredients: search.value.trim()
});

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
    let response = JSON.parse(this.responseText);
    	childrenimg=imagediv.childNodes;
    	for (var i = childrenimg.length - 1; i >= 0; i--) {
  			childrenimg[i].remove();
		}
		var imagetext = document.createElement('h2');
		imagetext.textContent = "Image:"
		imagetext.style.textAlign='center'
		imagetext.style.marginBottom='10px'
		imagetext.style.marginTop='10px'
		imagetext.style.animation = 'fade-in'
		imagetext.style.color="white"
		var img = document.createElement('img');
		img.src = response.hints[0].food.image
		img.style.width = '200px';
		img.style.height = '200px';
		img.style.animation = 'fade-in'
		imagediv.appendChild(imagetext)
		imagediv.appendChild(img)
		var nametext = document.createElement('h2');
		nametext.textContent = "Name:"
		nametext.style.textAlign='center'
		nametext.style.marginBottom='10px'
		nametext.style.marginTop='10px'
		nametext.style.animation = 'fade-in'
		nametext.style.color="white"
		var name = document.createElement('h3')
		name.textContent=search.value
		imagediv.appendChild(nametext)
		imagediv.appendChild(name)
		name.style.animation = 'fade-in'
		name.style.color="white"
		var restext = document.createElement('h2');
		restext.textContent = "Nutrients:"
		restext.style.textAlign='center'
		restext.style.marginBottom='10px'
		restext.style.marginTop='10px'
		restext.style.animation = 'fade-in'
		restext.style.color="white"
		imagediv.appendChild(restext)
		for (let [key, value] of Object.entries(response.hints[0].food.nutrients)) {
    		var results = document.createElement('h3');
    		results.style.animation = 'fade-in'
    		results.style.color="white"
    		results.textContent = key+":"+value;
    		imagediv.appendChild(results);

		}
		banner.style.background="linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(OIF.jpg);"
		banner.style.backgroundSize="cover"
		backgroundPosition="center"
	}

});

xhr.open('POST', 'https://recipe-food-nutrition15.p.rapidapi.com/food-database');
xhr.setRequestHeader('x-rapidapi-key', '3ad3187edemsh8eb2f410731dd18p1e4f70jsnf1b292062653');
xhr.setRequestHeader('x-rapidapi-host', 'recipe-food-nutrition15.p.rapidapi.com');
xhr.setRequestHeader('Content-Type', 'application/json');

xhr.send(data);

})
