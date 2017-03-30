

var menuContainer = document.getElementById("drinksitems");
var btn = document.getElementById("btn");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");

btn.addEventListener("click", function(){
	var request = new XMLHttpRequest();
request.open('GET','https://selene.hud.ac.uk/u1355938/afw2/json/prosecco.json');
request.onload = function() {
	var ourProsecco = JSON.parse(request.responseText);
	renderHTML(ourProsecco);
};
request.send();
});

function renderHTML(prosecco)
{
	document.getElementById("drinksitems").innerHTML = "";
	var htmlString = "";
	
	for (i = 0; i < prosecco.length; i++)
	{
		htmlString += "<p><h3><u>" + prosecco[i].name + "</u></h3><h4>" + prosecco[i].price + ".</h4><h4> Price:" + prosecco[i].description + "</h4></p><hr>"
		
	}
	
	
	menuContainer.insertAdjacentHTML('beforeend', htmlString );		
}

btn1.addEventListener("click", function(){
	var request = new XMLHttpRequest();
request.open('GET','https://selene.hud.ac.uk/u1355938/afw2/json/mojitos.json');
request.onload = function() {
	var ourMojitos = JSON.parse(request.responseText);
	renderHTML(ourMojitos);
};
request.send();
});

function renderHTML(mojitos)
{
	document.getElementById("drinksitems").innerHTML = "";
	var htmlString = "";
	
	for (i = 0; i < mojitos.length; i++)
	{
		htmlString += "<p><h3><u>" + mojitos[i].name + "</u></h3><h4>" + mojitos[i].price + ".</h4><h4> Price: " + mojitos[i].description + "</h4></p><hr>"
		
	}
	
	
	menuContainer.insertAdjacentHTML('beforeend', htmlString );		
}


btn2.addEventListener("click", function(){
	var request = new XMLHttpRequest();
request.open('GET','https://selene.hud.ac.uk/u1355938/afw2/json/sours.json');
request.onload = function() {
	var ourSours = JSON.parse(request.responseText);
	renderHTML(ourSours);
};
request.send();
});

function renderHTML(sours)
{
	document.getElementById("drinksitems").innerHTML = "";
	var htmlString = "";
	
	for (i = 0; i < sours.length; i++)
	{
		htmlString += "<p><h3><u>" + sours[i].name + "</u></h3><h4>" + sours[i].price + ".</h4><h4> Price:" + sours[i].description + "</h4></p><hr>"
		
	}
	
	
	menuContainer.insertAdjacentHTML('beforeend', htmlString );		
}

btn3.addEventListener("click", function(){
	document.getElementById("drinksitems").innerHTML = "";
	
});



	