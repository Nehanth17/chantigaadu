var root=document.getElementById("main");
var div1=document.createElement('div');
div1.classList.add("card");
div1.align="center";
root.appendChild(div1);
var image=document.createElement('img');
image.src="srkr.png";
image.classList.add('img');
div1.appendChild(image);
var heading =document.createElement('h2');
heading.textContent="Nehanth";
div1.appendChild(heading);
var para=document.createElement('p');
para.textContent="Nehanth@gmail.com";
div1.classList.add("sub");
div1.appendChild(para);
 var a = document.createElement('a');  
 var link = document.createTextNode("This is link"); 
 a.appendChild(link);  
 a.title = "This is Link";
 a.href = "resume1.html";  
div1.appendChild(a);

var div2=document.createElement('div');
div2.classList.add("card");
div2.align="center";
root.appendChild(div2);
var image=document.createElement('img');
image.src="srkr.png";
image.classList.add('img');
div2.appendChild(image);
var heading =document.createElement('h2');
heading.textContent="Dass kishore";
div2.appendChild(heading);
var para=document.createElement('p');
para.textContent="Dass@gmail.com";
div2.classList.add("sub");
div2.appendChild(para);
var a = document.createElement('a');  
 var link = document.createTextNode("This is link"); 
 a.appendChild(link);  
 a.title = "This is Link";
 a.href = "resume2.html";  
div2.appendChild(a);
