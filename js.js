var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

while (isSunk == false) {
	guess = prompt("Привет! Сыграем в морской бой? Введи число от 0 до 6 и попробуй затопить трехпалубный корабль. Вперед!") ;
	if (guess < 0 || guess > 6) {
		alert("Введи значение от 0 до 6");
	} else {
		guesses = guesses + 1;
		if (guess == location1 || guess == location2 || guess == location3) {
			alert("Попaл");
			hits = hits + 1;
			if (hits == 3) {
				isSunk = true;
				alert("Утопил");
			}
		} else {
			alert("Мимо");
		}
	}
}

var stats = "Ты справился за " + guesses + " попыток. Твоя точность равна " + (3 / guesses);
alert(stats);
