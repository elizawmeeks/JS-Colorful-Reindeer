var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];
var coloredReindeer = "";

var hohohoElement = document.getElementById("reindeer");

for (i = 0; i < reindeer.length; i++){
	coloredReindeer += "<p>" + colors[i] + " " +reindeer[i] + "</p>";
	hohohoElement.innerHTML = coloredReindeer
}