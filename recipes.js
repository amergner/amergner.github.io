var recipes = [
	"Barbecue Chicken Pizza",
	"Beef Florentine",
	"Beef Stroganoff",
	"Chicken & Sausage",
	"Chicken & Smashed Potatoes",
	"Chicken Burritos",
	"Chicken Cacciatore",
	"Chicken Marsala",
	"Chicken Parmesan",
	"Chicken Pot Pie",	
	"Chili",
	"Crab & Linguine",
	"Crumbly Chicken",
	"Deep Dish Pizza",
	"Fajitas",
	"Falafel",
	"Ham, Peas & Pasta",
	"Hamburgers",
	"Lasagna",
	"Lentil Daal",
	"Meatball Subs",
	"Meatloaf",
	"Pasta Vodka Sauce",
	"Pasties",
	"Pepper Steak",
	"Porcupines",
	"Pork Cutlets",
	"Sloppy Joes",
	"Spaghetti",
	"Stir Fry",
	"Stuffed Shells",
	"Sweet Potato Chili",
	"Tacos",
	"Teriyaki Steak",
	"Tilapia",
	"Tofu, Veggies and Sauce",
	"Tuna Salad",
	"Turkey Burgers",
	"White Lasagna"
];

// Random Recipe Generator

var numRecipes = recipes.length;

function selectRecipe() {
	var randNum = Math.floor(Math.random() * numRecipes);
	console.log(randNum);
	document.getElementById("selectedRecipe").innerHTML = recipes[randNum];
}

// Typing Effect Function
var i = 0;
var txt = 'The RAT KING cordially invites you to the SEWER for a TASTEFUL DINING EXPERIENCE.';
var txt2 = 'How do you ACCEPT this invitation?';
var txt3 = '> With GRATITUDE';
var txt4 = '> With ENTHUSIASM';
var speed = 50;

function typeWriter() {
	if (i < txt.length) {
		document.getElementById("demo").innerHTML += txt.charAt(i);
		i++;
		setTimeout(typeWriter, speed);
	}
}