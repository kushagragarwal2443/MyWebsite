var text=["I love to Code!","I love to Design!","I love to Think!","I love to Innovate!"];
var counter=0;
var elem=document.getElementById("funfacts");
var inst=setInterval(change,1200);
function change(){
	elem.innerHTML=text[counter];
	counter++;
	if(counter>=text.length){
		counter=0;
	}
}
