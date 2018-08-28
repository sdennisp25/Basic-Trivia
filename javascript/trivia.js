var start = false;
var score = 0;
var total = 8;

function submitAnswers() {

	var q1 = document.forms["quizForm"]["q1"].value;
	var q2 = document.forms["quizForm"]["q2"].value;
	var q3 = document.forms["quizForm"]["q3"].value;
	var q4 = document.forms["quizForm"]["q4"].value;
	var q5 = document.forms["quizForm"]["q5"].value;
	var q6 = document.forms["quizForm"]["q6"].value;
	var q7 = document.forms["quizForm"]["q7"].value;
	var q8 = document.forms["quizForm"]["q8"].value;

	var questions = [q1, q2, q3, q4, q5, q6, q7, q8];
	var answers = ["d", "b", "b", "a", "b", "c", "a", "b"];

	if (q1 === answers[0]) {
		score++;
	}
	if (q2 === answers[1]) {
		score++;
	}
	if (q3 === answers[2]) {
		score++;
	}
	if (q4 === answers[3]) {
		score++;
	}
	if (q5 === answers[4]) {
		score++;
	}
	if (q6 === answers[5]) {
		score++;
	}
	if (q7 === answers[6]) {
		score++;
	}
	if (q8 === answers[7]) {
		score++;
	}
	alert("you scored " + score + " out of " + total);
	if (score > 4) {
		alert("YOU WIN");
		$("#nada").text(score);

	}
	else {
		alert("YOU LOSE");
	}
}


$(document).ready(function () {

	$("#start-game-button").on("click", function () {
		startGame = true;

		var timer = 31;
		var intervalId = setInterval(clock, 1000);

		function clock() {
			timer--;
			console.log("00:" + timer);
			$(".timer").text("00:" + timer);

			if (timer < 10 && timer > 0) {
				$(".timer").text("00:0" + timer);
			}

			else if (timer === 0) {
				$(".timer").text("Times Up!");
				console.log("Times Up!");
				clearInterval(intervalId);

			}
		}
	})


});