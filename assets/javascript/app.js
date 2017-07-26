var gameObj = {
	not_clicked: true,
	answers: [],
	//need array to define each question box.
};


$(document).on("click","#start",function(){
	//console.log("I've been clicked!");

	//create question div only on first click.
	if(gameObj.not_clicked){

		//need to define form here
		$(".container").append("<div class='q_1'>"+
		"<div class='q_head'><p>Are you lonely?</p></div>"+
		"<div class='q_body'>"+
		"<form id='frm1'>"+
		"<input type='radio' name='gender' value='male'> Male<br>"+
		"<input type='radio' name='gender' value='female'> Female<br>"+
		"<input type='radio' name='gender' value='other'> Other<br>"+
		"<input type='radio' name='gender' value='both'> Both<br>"+
		"</form>"+
		"<button class='button'>Submit</button>"+
		"</div>"+
		"</div>");

		gameObj.not_clicked = false;
	}

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

});