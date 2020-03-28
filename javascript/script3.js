var text2=["Inspired by BILL GATES.","Inspired by STEVE JOBS.","Inspired by SUNDAR PICHAI.","Inspired by SACHIN." ];
var counter2=0;
var elem2=document.getElementById("funfacts3");
var inst=setInterval(change2,1200);
function change2(){
	elem2.innerHTML=text2[counter2];
	counter2++;
	if(counter2>=text2.length){
		counter2=0;
	}
}
