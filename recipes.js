var recipes = [
	"Chili",
	"Chicken & Sausage",
	"Stir Fry",
	"Ham, Peas & Pasta",
	"Chicken & Smashed Potatoes",
	"Falafel",
	"Sloppy Joes",
	"Meatloaf"
];

var numRecipes = recipes.length;

function selectRecipe() {
	var randNum = Math.floor(Math.random() * numRecipes);
	console.log(randNum);
	document.getElementById("selectedRecipe").innerHTML = recipes[randNum];
}