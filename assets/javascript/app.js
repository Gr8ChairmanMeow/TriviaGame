var gameObj = {
	not_clicked: true,
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
		"<div class='q_head'><p>Are you happy?</p></div>"+
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
	images: ["url('assets/images/flower.jpg')","url('assets/images/city.jpg')"],
	next: function(){
		if(gameObj.index>0){
			$(".q_"+(gameObj.index)).remove();
		}
		$(".container").append(gameObj.questions[gameObj.index]);
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
	//gameObj.not_clicked = false;

	/*if(gameObj.not_clicked){

		

	}
	else{

		alert("You have started already!");
		
	}*/

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