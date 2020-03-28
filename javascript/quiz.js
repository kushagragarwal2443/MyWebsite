var i=0;
function Count()
{
	i=i+1;
	document.getElementById("value").innerHTML=i+" likes";
}

function add()
{
	var name=document.getElementById("nm").value;
	var skill=document.getElementById("sk").value;
	var lvl=document.getElementById("lvl").value;
	var row=document.getElementById("tbody").insertRow(0);

	var c1=row.insertCell(0);
	var c2=row.insertCell(1);
	var c3=row.insertCell(2);

	c1.innerHTML=name;
	c2.innerHTML=skill;
	c3.innerHTML=lvl;
}