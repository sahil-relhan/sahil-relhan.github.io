var ID;
var buttons = document.querySelectorAll(".button");
for(var i = 0; i<buttons.length ; i++){
	buttons[i].addEventListener("mouseover", handler_focusIn);
	}

var inputs = document.querySelectorAll(".input");
for(var i = 0; i<inputs.length ; i++){
	inputs[i].addEventListener("click", handler_click );
}
var label_tb1 = document.getElementById("day_1");
var label_tb2 = document.getElementById("day_2");
var label_tb3 = document.getElementById("day_3");


function handler_focusIn(){
	ID = this.id;
	//console.log(ID);
	focusingIn(ID);
}

function handler_click(){
	ID = this.id;
	click(ID);
}
var tb1 = document.getElementById("tb1");
var tb2 = document.getElementById("tb2");
var tb3 = document.getElementById("tb3");


function focusingIn (id) {
	
	if (id === "day1" ){
	tb1.style.display = 'block';  
	tb2.style.display = 'none';  
	tb3.style.display = 'none'; 

	label_tb1.style.border = '2px solid green';
	label_tb2.style.border = 'none';
	label_tb3.style.border = 'none';

	label_tb1.style.background = '#fff';
	label_tb2.style.background = '#90CAF9';
	label_tb3.style.background = '#90CAF9';
	}
	else if(id === "day2"){
	tb2.style.display = 'block';
	tb1.style.display = 'none';  
	tb3.style.display = 'none';  
	
	label_tb2.style.border = '2px solid green';
	label_tb1.style.border = 'none';
	label_tb3.style.border = 'none';

	label_tb2.style.background = '#fff';
	label_tb1.style.background = '#90CAF9';
	label_tb3.style.background = '#90CAF9';
		
	}

	else if(id === "day3"){
	tb3.style.display = 'block';
	tb2.style.display = 'none';  
	tb1.style.display = 'none';  

	label_tb3.style.border = '2px solid green';
	label_tb2.style.border = 'none';
	label_tb1.style.border = 'none';
	
	label_tb3.style.background = '#fff';
	label_tb2.style.background = '#90CAF9';
	label_tb1.style.background = '#90CAF9';
	
	}
}
function click(id){

	if (id === "tabone"){
	tb1.style.display = 'block';  
	tb2.style.display = 'none';  
	tb3.style.display = 'none'; 

	label_tb1.style.border = '2px solid green';
	label_tb2.style.border = 'none';
	label_tb3.style.border = 'none';
	
    label_tb1.style.background = '#fff';
	label_tb2.style.background = '#90CAF9';
	label_tb3.style.background = '#90CAF9';
	
	}
	else if(id === "tabtwo"){
	tb2.style.display = 'block';
	tb1.style.display = 'none';  
	tb3.style.display = 'none';  

	label_tb2.style.border = '2px solid green';
	label_tb1.style.border = 'none';
	label_tb3.style.border = 'none';
	
    label_tb2.style.background = '#fff';
	label_tb1.style.background = '#90CAF9';
	label_tb3.style.background = '#90CAF9';
	
	}
	else if(id === "tabthree"){
	tb3.style.display = 'block';
	tb2.style.display = 'none';  
	tb1.style.display = 'none';  
    
    label_tb3.style.border = '2px solid green';
	label_tb2.style.border = 'none';
	label_tb1.style.border = 'none';
	
	label_tb3.style.background = '#fff';
	label_tb1.style.background = '#90CAF9';
	label_tb2.style.background = '#90CAF9';
	
   }
}