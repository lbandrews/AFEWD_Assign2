

var menuContainer = document.getElementById("menuitems");
var btn = document.getElementById("btn");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");


btn.addEventListener("click", function(){
	var request = new XMLHttpRequest();
request.open('GET','https://selene.hud.ac.uk/u1355938/afw2/json/starters.json');
request.onload = function() {
	var ourStarters = JSON.parse(request.responseText);
	renderHTML(ourStarters);
};
request.send();
});

function renderHTML(starters)
{
	document.getElementById("menuitems").innerHTML = "";
	var htmlString = "";
	
	for (i = 0; i < starters.length; i++)
	{
		htmlString += "<p><h3>" + starters[i].name + "</h3> <h4>Price: " + starters[i].price + ".</h4><h4>" + starters[i].description + "</h4></p><hr>"
	}
	
	
	menuContainer.insertAdjacentHTML('beforeend', htmlString );		
}

btn1.addEventListener("click", function(){
	var request = new XMLHttpRequest();
request.open('GET','https://selene.hud.ac.uk/u1355938/afw2/json/pizza.json');
request.onload = function() {
	var ourPizza = JSON.parse(request.responseText);
	renderHTML(ourPizza);
};
request.send();
});

function renderHTML(pizza)
{
	document.getElementById("menuitems").innerHTML = "";
	var htmlString = "";
	
	for (i = 0; i < pizza.length; i++)
	{
		htmlString += "<p><h3>Toppings: " + pizza[i].name + "</h3> <h4>Price: " + pizza[i].price + ".</h4><h4>" + pizza[i].description + "</h4></p><hr>"
	}
	
	
	menuContainer.insertAdjacentHTML('beforeend', htmlString );		
}

btn2.addEventListener("click", function(){
	var request = new XMLHttpRequest();
request.open('GET','https://selene.hud.ac.uk/u1355938/afw2/json/crepes.json');
request.onload = function() {
	var ourDesserts = JSON.parse(request.responseText);
	renderHTML(ourDesserts);
};
request.send();
});

function renderHTML(desserts)
{
		document.getElementById("menuitems").innerHTML = "";

	var htmlString = "";
	
	for (i = 0; i < desserts.length; i++)
	{
		htmlString += "<p><h3>" + desserts[i].name + "</h3> <h4>Price: " + desserts[i].price + ".</h4><h4>" + desserts[i].description + "</h4></p><hr>"
	}
	
	
	menuContainer.insertAdjacentHTML('beforeend', htmlString );		
}

btn3.addEventListener("click", function(){
	document.getElementById("menuitems").innerHTML = "";
	
});



	