
document.querySelector("footer button").addEventListener("click",function(){;
  var audio=new Audio("audio.mp3");
  audio.play();
    var elem2=document.createElement("button");
    elem2.setAttribute("class","cross");
var elem=document.createElement("div");
var ele=document.createElement("img");
ele.setAttribute("src","./images/image-rules.svg");
elem.setAttribute("class","rulebox");
elem2.innerHTML="X";
document.querySelector("body").appendChild(elem);
document.querySelector(".rulebox").appendChild(ele);
document.querySelector(".rulebox").appendChild(elem2);

document.querySelector(".rulebox .cross").addEventListener("click",function(){
document.querySelector("body").removeChild(elem);
 
})
});




var sum="";
window.onload=function(){

console.log("secy");
sum=localStorage.getItem("sum");
if(sum===null) {document.querySelector(".cen .on1 .in h1").innerHTML="0"; sum="0"}
else
document.querySelector(".cen .on1 .in h1").innerHTML=localStorage.getItem("sum");

localStorage.clear();
console.log(localStorage.getItem("sum"));
console.log(document.querySelectorAll(".circle").length);

}




for(var i=0; i<3; i++){
document.querySelectorAll(".circle")[i].addEventListener("click",function(){
    
  var audio=new Audio("audio.mp3");
  audio.play();
  
  
  
  var ans=this.innerHTML;
    var template=document.querySelector(".cen .on2");
var ele=document.querySelector(".cen");
 if (ele.hasChildNodes()) {
    ele.removeChild(ele.children[1]);
  }
var ele1=document.createElement("div");
ele1.setAttribute("class","gen");
var in1ele1=document.createElement("h3");
in1ele1.innerHTML="you picked";
var in2ele1=document.createElement("button");
if(ans==="p"){
in2ele1.setAttribute("class","circle1");

}
else if(ans==="s")
in2ele1.setAttribute("class","circle2");
else
in2ele1.setAttribute("class","circle3");

document.querySelector(".cen").appendChild(ele1);
document.querySelector(".cen .gen").appendChild(in1ele1);
document.querySelector(".cen .gen").appendChild(in2ele1);
if(ans=="p"){
var nose=document.querySelector(".cen .gen .circle1");
renderLinkIcon(nose);
}else if(ans=="s"){
var nose=document.querySelector(".cen .gen .circle2");
renderLinkIcon1(nose);
}else{
  var nose=document.querySelector(".cen .gen .circle3");
renderLinkIcon2(nose);
}


var in1ele2=document.createElement("h3");
in1ele2.setAttribute("class","t1");
in1ele2.innerHTML="The House picked";
var in2ele2=document.createElement("button");
in2ele2.setAttribute("class","general");
document.querySelector(".cen .gen").appendChild(in1ele2);
document.querySelector(".cen .gen").appendChild(in2ele2);


var i=Math.random();
i=i*3;
i=Math.floor(i);
id=setInterval(frame,2000);
var ele= document.querySelector(".cen .gen .general");
function frame(){
  var flag=0;
  if(flag===1){
    clearInterval(id);
  }else{
   if(i===0){
    var audio1=new Audio("./audio/homeappear.mp3");
    audio1.play();
     ele.classList.remove("general");
     ele.classList.add("circle11");
     renderLinkIcon(ele);
     flag=1;
     clearInterval(id);
   }else if(i===1){
    var audio1=new Audio("./audio/homeappear.mp3");
    audio1.play();
    ele.classList.remove("general");
    ele.classList.add("circle12");
    renderLinkIcon1(ele);
    flag=1;
    clearInterval(id);
   }else{
    var audio1=new Audio("./audio/homeappear.mp3");
    audio1.play();
    ele.classList.remove("general");
    ele.classList.add("circle13");
    renderLinkIcon2(ele);
    flag=1;
    clearInterval(id);
   }
   flag=1;
  }
}
var score=document.querySelector(".cen .on1 .in h1");
var recentscore=0;
if(i===0 && ans==="p"){
 // score.innerHTML=recentscore.toString();
}else if(i===0 && ans==="s"){
  recentscore++;
  
}else if(i===0 && ans==="r"){
  recentscore--;
 
}else if(i===1 && ans==="p"){
  recentscore--;
  
}else if(i===1 && ans==="s"){
 // score.innerHTML=recentscore.toString();
}else if(i===1 && ans==="r"){
  recentscore++;
  
}else if(i===2 && ans==="p"){
  recentscore++;
  
}else if(i===2 && ans==="s"){
  recentscore--;
  
}else if(i===2 && ans==="r"){
 // score.innerHTML=recentscore.toString();
}


var temp= Number(sum)+recentscore;
sum=temp.toString();

id3=setInterval(frame3,2725);
function frame3(){
  var audio1=new Audio("./audio/draw.mp3");
  audio1.play();
  score.innerHTML=sum;
  clearInterval(id3);
}

/*id2=setInterval(frame2,3000);
var flag2=0;
function frame2(){
if(flag2===1){
  clearInterval(id2);
}else{
  document.querySelector(".cen").removeChild(ele1);
  back();
  clearInterval(id2);
 flag2=1;
}
}*/

localStorage.setItem("sum",sum);


setTimeout(function(){
  location.reload();
}, 4000);




})
}

 

function renderLinkIcon(node) {
  const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  const iconPath = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'path'
  );

  iconSvg.setAttribute('width','49');
  iconSvg.setAttribute('height','59');
  iconPath.setAttribute('fill','#3B4262');
  iconPath.setAttribute(
   'd',
   'M47.125 11.832a2.922 2.922 0 00-1.232-.198c-.57.04-1.029.271-1.302.65-1.604 2.248-2.919 6.493-3.979 9.905-.486 1.577-1.14 3.688-1.612 4.69-.493-2.807.064-13.09.28-17.05l.003-.064c.15-2.751.17-3.234.138-3.446-.238-1.509-.843-2.5-1.799-2.943-.966-.45-2.22-.25-3.572.563-.677.41-.865 1.816-1.446 8.19l-.002.028c-.32 3.502-1.058 11.566-1.965 12.91-1.023-1.88-2.431-12.555-3.039-17.176-.425-3.236-.673-5.094-.84-5.655-.35-1.176-1.83-2.176-3.295-2.232-1.22-.06-2.22.56-2.698 1.638-.894.995-.578 4.292.41 12.102.47 3.718 1.44 11.395.83 12.257-1.219-.133-3.31-4.942-6.215-14.299-.816-2.62-1.068-3.408-1.318-3.753-.494-1.202-2.172-2.129-3.676-2.024a3.183 3.183 0 00-.377.049c-.787.156-2.584.881-2.2 4.226 1.06 4.637 2.213 8.041 3.331 11.346l.023.066c.669 1.98 1.302 3.85 1.89 5.925 1.385 4.9.846 7.94.84 7.975-.046.312-.143.503-.288.57a.556.556 0 01-.195.045c-.44.03-1.098-.26-1.437-.45-.776-1.482-4.636-8.544-8.134-9.524l-.126-.037-.127.012c-1.283.121-2.226.606-2.803 1.441-.914 1.32-.535 3.002-.444 3.34l.052.12c.028.051 2.834 5.165 3.268 7.544.374 2.04 2.311 4.25 3.869 6.026l.064.073c.508.58.946 1.083 1.292 1.548 4.519 4.713 11.665 8.677 11.723 8.71.892.657 1.387 1.293 1.44 1.84a.798.798 0 01-.16.58l-.155.162.988.96 18.853-1.324.804-3.684c2.486-10.402 1.967-19.272 1.958-19.33.01-.327.706-3.483 1.266-6.033l.017-.065c1.117-5.08 2.505-11.4 2.772-13.803.116-1.028-.542-1.972-1.675-2.401z'  );
  iconSvg.appendChild(iconPath);

  return node.appendChild(iconSvg);
}

function renderLinkIcon1(node) {
  const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  const iconPath = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'path'
  );

  iconSvg.setAttribute('width','51');
  iconSvg.setAttribute('height','58');
  iconPath.setAttribute('fill','#3B4262');
  iconPath.setAttribute(
   'd',
   'M13.971 25.702l6.012-8.415c-2.499-.415-7.088-.507-10.846 3.235C3.212 26.421.812 39.163.312 42.248L15.37 57.24c2.711-.232 14.713-1.827 26.279-13.34.122-.249 2.94-2.321.636-4.614-1.1-1.095-2.919-1.074-4.042.044-.572.57-1.461.577-2.021.02-.56-.557-.552-1.443.02-2.012l4.087-4.069c2.076-2.067.119-5.555-2.78-4.717l-3.345 2.851c-.611.53-1.52.439-2.022-.14-.519-.597-.408-1.503.183-2.013 11.687-10.208 9.98-8.979 17.5-15.995 2.809-2.329-.725-6.447-3.493-4.09L28.182 25.45c-.529.448-1.34.457-1.86-.02-.601-.517-.615-1.262-.222-1.85L38.787 3.944c1.854-2.5-1.795-5.277-3.749-2.757L16.28 27.307c-.452.65-1.364.8-1.985.345a1.377 1.377 0 01-.323-1.95z'
  );
    iconSvg.appendChild(iconPath);

  return node.appendChild(iconSvg);
}

function renderLinkIcon2(node) {
  const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  const iconPath = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'path'
  );

  iconSvg.setAttribute('width','49');
  iconSvg.setAttribute('height','59');
  iconPath.setAttribute('fill','#3B4262');
  iconPath.setAttribute(
    'd',
    'M45.06 12.22c-.642-8.096-9.734-7.269-9.734-7.269-3.837-6.765-9.832-1.865-9.832-1.865-4.606-6.63-10.38-.486-10.38-.486-9.957-1.074-9.571 7.066-9.571 7.066-.234 2.588 1.403 10.593 1.403 10.593-1.477-4.614-4.68-.784-4.68-.784-3.94 6.078-.975 9.405-.975 9.405 5.33 6.246 16.688 13.743 16.688 13.743 4.113 2.356 2.373 4.457 2.373 4.457l24.876-4.11.571-4.718c3.782-11.436-.739-26.032-.739-26.032z'
      );   
       iconSvg.appendChild(iconPath);

  return node.appendChild(iconSvg);
}


function renderLink(node) {
  const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  const iconPath = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'path'
  );

  iconSvg.setAttribute('width','317');
  iconSvg.setAttribute('height','278');
  iconPath.setAttribute('fill','none');
  iconPath.setAttribute('stroke','#000');
  iconPath.setAttribute('stroke-width','15');
  iconPath.setAttribute('opacity','.2');
  iconPath.setAttribute(
    'd',
    'M156.5 262 300 8H13z'
      );   
       iconSvg.appendChild(iconPath);
       iconSvg.setAttribute('class','seveg');

  return node.appendChild(iconSvg);
}


/*function back(){
  var tempo=document.createElement("div");
  tempo.setAttribute("class","on2");



  var tempo1=document.createElement("div");
  tempo1.setAttribute("class","paper");
  var but1=document.createElement("button");
  but1.setAttribute("class","circle");
  tempo1.appendChild(but1);
  renderLinkIcon(tempo1);
  
  

  var tempo2=document.createElement("div");
  tempo2.setAttribute("class","scissor");
  var but2=document.createElement("button");
  but2.setAttribute("class","circle");
  tempo2.appendChild(but2);
  renderLinkIcon1(tempo2);




  var tempo3=document.createElement("div");
  tempo3.setAttribute("class","rock");
  var but3=document.createElement("button");
  but3.setAttribute("class","circle");
  tempo3.appendChild(but3);
  renderLinkIcon2(tempo3);

  tempo.appendChild(tempo1);
  tempo.appendChild(tempo2);
  tempo.appendChild(tempo3);
  renderLink(tempo);
  document.querySelector(".cen").appendChild(tempo);

}*/


document.querySelector("footer .res").addEventListener("click",function(){
  var audio=new Audio("./audio/gain.mp3");
  audio.play();
  sum="0";
  localStorage.clear();
  document.querySelector(".cen .on1 .in h1").innerHTML="0";
})
