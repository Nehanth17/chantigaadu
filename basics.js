var root=document.getElementById('main');
var div1=document.createElement('div');
div1.classList.add("card");
root.appendChild(div1);
var image=document.createElement('img');
image.scr="images/srkr.png";
image.classList.add('img');
div1.appendChild(image);
var heading =document.createElement('h2');
heading.textContent="gaya";
root.appendChild(heading);
var para=document.createElement('p');
para.textContent="gaya@apssdc";
div1.classList.add("sub");
div1.appendChild(para);