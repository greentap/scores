
var mCheck = false; 

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		mCheck = true; 
		document.getElementById("dButton").style.height = "300px"; 
		document.getElementById("dButton").style.width = "100%"; 
		document.getElementById("contactNav").innerHTML = "";
		document.getElementById("dButton").style.fontSize = "60px";
		document.getElementById("titleText").style.fontSize= "130px"; 
		document.getElementById("mainCaption").style.fontSize= "45px"; 
		document.getElementById("mainCaption").style.textAlign= "center"; 
		}


function hover(id){
	if(mCheck == false){
		document.getElementById(id).style.color="black";
	}
}

function leave(id){
	if(mCheck == false){
		document.getElementById(id).style.color="white";
	}
}

function contactClick(){
	document.getElementById("mainHtmlId").style.overflow = "visible"; 
}

function hoverText(id){
	if(mCheck == false){
		document.getElementById(id).style.color="#00c853"; 
		document.getElementById("contactNav").style.color="#00c853"; 
		document.getElementById("dButton").style.height = "100px"; 
		document.getElementById("dButton").style.width = "600px"; 
		document.getElementById("dButton").innerHTML = "just download it already";
		document.body.style.background = ("black"); 
		}

}

function leaveText(id){
	if(mCheck == false){
		document.getElementById(id).style.color="white"; 
		document.getElementById("contactNav").style.color="white"; 
		document.getElementById("dButton").style.height = "50px"; 
		document.getElementById("dButton").style.width = "300px"; 
		document.getElementById("dButton").innerHTML = "ANDROID DOWNLOAD";
		document.body.style.background = ("#00c853"); 
		}
}
