var gameObj = {
	index:0,
	answers: [],
	questions: ["<div class='q_1'>"+
		"<div class='q_head'><p>Are you lonely?</p></div>"+
		"<div class='q_body'>"+
		"<form id='frm1'>"+
		"<input type='radio' name='question' value='yes'> Yes<br>"+
		"<input type='radio' name='question' value='no'> No<br>"+
		"<input type='radio' name='question' value='maybe'> Maybe<br>"+
		"<input type='radio' name='question' value='not_know'> I don't know.<br>"+
		"</form>"+
		"<button class='button'>Submit</button>"+
		"</div>"+
		"</div>",
		"<div class='q_2'>"+
		"<div class='q_head'><p>Are you unhappy?</p></div>"+
		"<div class='q_body'>"+
		"<form id='frm1'>"+
		"<input type='radio' name='question' value='yes'> Yes<br>"+
		"<input type='radio' name='question' value='no'> No<br>"+
		"<input type='radio' name='question' value='maybe'> Maybe<br>"+
		"<input type='radio' name='question' value='not_know'> I don't know.<br>"+
		"</form>"+
		"<button class='button'>Submit</button>"+
		"</div>"+
		"</div>",
		"<div class='q_3'>"+
		"<div class='q_head'><p>4/5 of millenials report feelings of depression, are you one of them?</p></div>"+
		"<div class='q_body'>"+
		"<form id='frm1'>"+
		"<input type='radio' name='question' value='yes'> Yes<br>"+
		"<input type='radio' name='question' value='no'> No<br>"+
		"<input type='radio' name='question' value='maybe'> Maybe<br>"+
		"<input type='radio' name='question' value='not_know'> I don't know.<br>"+
		"</form>"+
		"<button class='button'>Submit</button>"+
		"</div>"+
		"</div>",
		"<div class='q_4'>"+
		"<div class='q_head'><p>4/5 of millenials report feeling anxious about the future, are you one of them?</p></div>"+
		"<div class='q_body'>"+
		"<form id='frm1'>"+
		"<input type='radio' name='question' value='yes'> Yes<br>"+
		"<input type='radio' name='question' value='no'> No<br>"+
		"<input type='radio' name='question' value='maybe'> Maybe<br>"+
		"<input type='radio' name='question' value='not_know'> I don't know.<br>"+
		"</form>"+
		"<button class='button'>Submit</button>"+
		"</div>"+
		"</div>",
		"<div class='q_5'>"+
		"<div class='q_head'><p>For a world that's so connected, would you agree that it feels empty?</p></div>"+
		"<div class='q_body'>"+
		"<form id='frm1'>"+
		"<input type='radio' name='question' value='yes'> Yes<br>"+
		"<input type='radio' name='question' value='no'> No<br>"+
		"<input type='radio' name='question' value='maybe'> Maybe<br>"+
		"<input type='radio' name='question' value='not_know'> I don't know.<br>"+
		"</form>"+
		"<button class='button'>Submit</button>"+
		"</div>"+
		"</div>",
		"<div class='q_6'>"+
		"<div class='q_head'><p>Do you spend more time online than off?</p></div>"+
		"<div class='q_body'>"+
		"<form id='frm1'>"+
		"<input type='radio' name='question' value='yes'> Yes<br>"+
		"<input type='radio' name='question' value='no'> No<br>"+
		"<input type='radio' name='question' value='maybe'> Maybe<br>"+
		"<input type='radio' name='question' value='not_know'> I don't know.<br>"+
		"</form>"+
		"<button class='button'>Submit</button>"+
		"</div>"+
		"</div>",
		"<div class='q_7'>"+
		"<div class='q_head'><p>We've become enslaved to likes on small screens, would you agree?</p></div>"+
		"<div class='q_body'>"+
		"<form id='frm1'>"+
		"<input type='radio' name='question' value='yes'> Yes<br>"+
		"<input type='radio' name='question' value='no'> No<br>"+
		"<input type='radio' name='question' value='maybe'> Maybe<br>"+
		"<input type='radio' name='question' value='not_know'> I don't know.<br>"+
		"</form>"+
		"<button class='button'>Submit</button>"+
		"</div>"+
		"</div>"],
	images: ["url('assets/images/flower.jpg')","url('assets/images/city.jpg')","url('assets/images/dream.jpg')","url('assets/images/balloon.jpg')","url('assets/images/empty.jpg')","url('assets/images/amusements.jpg')","url('assets/images/screens.jpg')"],
	next: function(){
		if(gameObj.index === gameObj.questions.length){

			$(".q_"+(gameObj.index)).remove();
			stopwatch.stop();

			if(setTimeout(function() {confirm("Would you like to play again?");},1250)){
				setTimeout(function(){location.reload();},2150);
			}

		}
		else if(gameObj.index>0){
			$(".q_"+(gameObj.index)).remove();
		}
		$(".container").append(gameObj.questions[gameObj.index]);
		//console.log(gameObj.questions.length + ", " +gameObj.index);
		document.getElementsByClassName("container")[0].style.backgroundImage = gameObj.images[gameObj.index];
	}

	//need array to define each question box.
};

var counter;

var stopwatch = {

	notRunning: true,
	time: 0,
	start: function(){
		if(stopwatch.notRunning){

			counter = setInterval(stopwatch.count,1000);

		}
	},
	stop: function(){
		clearInterval(counter);
	},
	count: function(){
		stopwatch.display();

		stopwatch.time++;

		if(stopwatch.time > 10){

			stopwatch.reset();

			gameObj.index++;
			gameObj.next();

		}

		//console.log(stopwatch.time);

	},
	reset: function(){

		stopwatch.time = 0;

	},
	display: function(){

		var display = 10 - stopwatch.time;

		document.getElementById("countdown").innerText = display;

	}

}


$(document).on("click","#start",function(){
	//create question div only on first click.
	$(".instructions").remove();

	gameObj.next();

	$(".container").append("<div id='countdown'>"+
			"</div>");

	stopwatch.start();

});

$(document).on("click",".button",function(){

	var x = document.getElementById("frm1");
	for (var i = 0; i < x.length; i++) {
		var checked = x.elements[i].checked;
		if (checked) {
			//console.log(x.elements[i].value);
			gameObj.answers.push(x.elements[i].value);
			console.log(gameObj.answers)
		}
	};

	gameObj.index++;
	stopwatch.reset();
	gameObj.next();
});