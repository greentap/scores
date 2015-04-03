
function hover(id){
	document.getElementById(id).style.color="black";
}

function leave(id){
	document.getElementById(id).style.color="white";

}

function hoverText(id){
	document.getElementById(id).style.color="#00c853"; 
	document.getElementById("contactNav").style.color="#00c853"; 
	document.getElementById("dButton").style.height = "100px"; 
	document.getElementById("dButton").style.width = "600px"; 
	document.getElementById("dButton").innerHTML = "just download it already";
	document.body.style.background = ("black"); 


}

function leaveText(id){
	document.getElementById(id).style.color="white"; 
	document.getElementById("contactNav").style.color="white"; 
	document.getElementById("dButton").style.height = "50px"; 
	document.getElementById("dButton").style.width = "300px"; 
	document.getElementById("dButton").innerHTML = "ANDROID DOWNLOAD";
	document.body.style.background = ("#00c853"); 


}