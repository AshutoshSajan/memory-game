var card = document.querySelectorAll(".card");
var container = document.querySelector(".main-container");
var p = document.querySelector(".moves");

var ul = document.querySelector(".main-container");
let gameData = [`<li class='card bomb fas fa-bomb' data-key=1></li>`,
		`<li class='card bomb fas fa-bomb' data-key=1></li>`,
		`<li class='card cycle fas fa-bicycle' data-key=2></li>`,
		`<li class='card cycle fas fa-bicycle' data-key=2></li>`,
		`<li class='card fas fa-bolt' data-key=3></li>`,
		`<li class='card fas fa-bolt' data-key=3></li>`,
		`<li class='card fab fa-telegram-plane' data-key=4></li>`,
		`<li class='card fab fa-telegram-plane' data-key=4></li>`,
		`<li class='card fas fa-cube' data-key=5></li>`,
		`<li class='card fas fa-cube' data-key=5></li>`,
		`<li class='card fas fa-gem' data-key=6></li>`,
		`<li class='card fas fa-gem' data-key=6></li>`,
		`<li class='card fas fa-leaf' data-key=7></li>`,
		`<li class='card fas fa-leaf' data-key=7></li>`,
		`<li class='card fas fa-anchor' data-key=8></li>`,
		`<li class='card fas fa-anchor' data-key=8></li>`];

ul.innerHTML = gameData.sort(val => 0.5 - Math.random()).join("");

container.addEventListener("click", game);
var count = 0;
var first = 0;
var second = 0;
var move = 0;
var timer = 0;
var min = 0;

// ==============================================================
// main game function
// ==============================================================
function game(e) {
 	if (e.target.classList.contains("card")) {
		if(count == 0) {
			first = e.target;
			count = count + 1;
		  first.classList.add("active");
		} // end of first click
		else if(count == 1){
			second = e.target;
			second.classList.add("active");
			count = 0;
		}
	}
	function hide(){
		if(first.dataset.key == second.dataset.key){
			move = move + 1;
			first.classList.add("match");
			second.classList.add("match");
		}
		else if (first.dataset.key != second.dataset.key) {
			move = move + 1;
			first.classList.add("wrong");
			second.classList.add("wrong");
			first.classList.remove('active');
			second.classList.remove('active');
		}
		function removeClass(){
			first.classList.remove("wrong");
			second.classList.remove("wrong");
			first = 0;
			second = 0;
		}setTimeout(removeClass, 700);
	}	
	setTimeout(hide, 2000);
}

// ==============================================================
// timer function
// ==============================================================
function gameTimer(){
	timer+=1
	if(timer > 60){
		timer = 0;
		min += 1;
	}
	p.innerText = `${move}moves ${min} min ${timer}sec`;
}
setInterval(gameTimer, 1000);
