//alert("anu");
function loadjsonfile(file,callback){
	var fileRequest= new XMLHttpRequest();
	fileRequest.overrideMimeType("application/json");
	fileRequest.open("GET",file,true);
	fileRequest.onreadystatechange=function(){
		if (fileRequest.readyState=== 4 && fileRequest.status=="200"){
			callback(fileRequest.responseText);
		
		}
	}
	fileRequest.send();
}
loadjsonfile("day12.json",function(text){
	var data=JSON.parse(text);
	console.log(data);
	details(data.persondata)
	details1(data.cardsdata)
})
var body=document.getElementById('root');
var d= document.createElement("div");
d.classList.add("main");
body.appendChild(d);	
var left=document.createElement("div");
left.classList.add("left");
d.appendChild(left);
var right=document.createElement("div");
right.classList.add("right");
d.appendChild(right);
function details(f){
	var name1=document.createElement("h2");

	name1.textContent=f.mobile;
	d.appendChild(name1);
	left.appendChild(name1);
		var name2=document.createElement("h2");

	name2.textContent=f.name;
	d.appendChild(name2);
	right.appendChild(name2);
}
//to use array
function details1(abc){
	for (var i = 0; i < abc.length; i++) {
		var ul=document.createElement("ul");
		ul.classList.add("myprofile");
		var li=document.createElement("li");
		li.textContent=abc[i].name;
		ul.appendChild(li);
		left.appendChild(ul);

}
	for (var i = 0; i < abc.length; i++) {
		var ul1=document.createElement("ol");
		ul1.classList.add("myprofil");
		var li1=document.createElement("li");
		li1.textContent=abc[i].mobile;
		ul1.appendChild(li1);
		right.appendChild(ul1);
	}
}