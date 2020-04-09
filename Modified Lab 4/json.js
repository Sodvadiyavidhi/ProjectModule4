// JavaScript Document


//		var requestURL = 'https://sodvadiyavidhi.github.io/ScriptLab/weird.json';
//		var request = new XMLHttpRequest();
//		request.open('GET', requestURL);
//		request.responseType = 'json';
//		request.send();
//		request.onload = function() {
//			var weirdDeal = request.response;
//			console.log(weirdDeal);
//			weirdthings(weirdDeal);
//		};
//fetching the data from git hub
fetch('https://sodvadiyavidhi.github.io/ScriptLab/weird.json')
 .then(function(response){ 
    //returning the json response 
    return response.json();
  })
  //adding functionality 
  .then(function weirdthings(jsonObj){
			let weirdthings = jsonObj.weirdthings;
			//creating new elements to set the data fetched from the github
			for (let i = 0; i < weirdthings.length; i++) {
				let article = document.createElement('article');
				let h2 = document.createElement('h2');
				let img = document.createElement('img');
				let p1 = document.createElement('p');
				let list = document.createElement('ul');
        let section = document.querySelector('section');
				img.setAttribute('src', 'https://sodvadiyavidhi.github.io/ScriptLab/Image/' + weirdthings[i].image);
				img.setAttribute('alt', weirdthings[i].name);
				h2.textContent = weirdthings[i].name;
				p1.textContent = 'Price: ' +
        weirdthings[i].price;
				let detail = weirdthings[i].detail;
				for (let x = 0; x < detail.length; x++) {
					let listItem = document.createElement('li');
					listItem.textContent = detail[x];
					list.appendChild(listItem);
				}
				article.appendChild(img);
				article.appendChild(h2);
				article.appendChild(p1);
				article.appendChild(list);
				section.appendChild(article);
				}
    });