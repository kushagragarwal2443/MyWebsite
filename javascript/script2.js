var text1=["I can C?","I can C++?","I can Bash?","I can Python?"];
var counter1=0;
var elem1=document.getElementById("funfacts2");
var inst=setInterval(change1,1200);
function change1(){
	elem1.innerHTML=text1[counter1];
	counter1++;
	if(counter1>=text1.length){
		counter1=0;
	}
}