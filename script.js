function addNewSIField(){
    let newNode=document.createElement("textarea");
newNode.classList.add("form-control");
newNode.classList.add("siField");
newNode.classList.add("mt-2");
newNode.setAttribute("rows",3);
newNode.setAttribute("placeholder","Enter here");

let siOb = document.getElementById("si");
let siAddbuttonOb = document.getElementById("siAddbutton");

siOb.insertBefore(newNode, siAddbuttonOb);
}

function addNewPRField(){
//console.log("Adding new field");

let newNode=document.createElement("textarea");
newNode.classList.add("form-control");
newNode.classList.add("prfield");
newNode.classList.add("mt-2");
newNode.setAttribute("rows",3);
newNode.setAttribute("placeholder","Enter here");

let prOb = document.getElementById("pr");
let prAddbuttonOb = document.getElementById("prAddbutton");

prOb.insertBefore(newNode, prAddbuttonOb);
}

function addNewWEField(){
    let newNode=document.createElement("textarea");
newNode.classList.add("form-control");
newNode.classList.add("weField");
newNode.classList.add("mt-2");
newNode.setAttribute("rows",3);
newNode.setAttribute("placeholder","Enter here");

let weOb = document.getElementById("we");
let weAddbuttonOb = document.getElementById("weAddbutton");

weOb.insertBefore(newNode, weAddbuttonOb);
}

function addNewAQField(){
    let newNode=document.createElement("textarea");
newNode.classList.add("form-control");
newNode.classList.add("aqField");
newNode.classList.add("mt-2");
newNode.setAttribute("rows",3);
newNode.setAttribute("placeholder","Enter here");

let aqOb = document.getElementById("aq");
let aqAddbuttonOb = document.getElementById("aqAddbutton");

aqOb.insertBefore(newNode, aqAddbuttonOb);
}

function addNewCEField(){
    let newNode=document.createElement("textarea");
newNode.classList.add("form-control");
newNode.classList.add("ceField");
newNode.classList.add("mt-2");
newNode.setAttribute("rows",3);
newNode.setAttribute("placeholder","Enter here");

let ceOb = document.getElementById("ce");
let ceAddbuttonOb = document.getElementById("ceAddbutton");

ceOb.insertBefore(newNode, ceAddbuttonOb);
}

// generatingCV

function generateResume(){
    // console.log("generating Resume");

    let nameField=document.getElementById("nameField").value;//name
    let nameT=document.getElementById("nameT");
    nameT.innerHTML=nameField;
    // document.getElementById("nameT2").innerHTML=nameField;

    let contactField=document.getElementById("contactField").value;//contact
    let contactT=document.getElementById("contactT");
    contactT.innerHTML=contactField;
    document.getElementById("mailT").innerHTML = document.getElementById("emailField").value;
    document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;

    document.getElementById("gitT").innerHTML = document.getElementById("githubField").value; 
    document.getElementById("linkedT").innerHTML = document.getElementById("linkedinField").value;
//   Skills  
let sis=document.getElementsByClassName("siField");
let str="";

for(let e of sis){
    str = str + `<li> ${e.value}</li>`;
}
document.getElementById("siT").innerHTML = str;

// Projects

let prs = document.getElementsByClassName("prfield");
let str1 = "";
for(let e of prs){
    str1+= `<li> ${e.value} </li>`;
}
document.getElementById("prT").innerHTML = str1;
// we
let wes = document.getElementsByClassName("weField");
let str2 = "";
for(let e of wes){
    str2+= `<li> ${e.value} </li>`;
}
document.getElementById("weT").innerHTML = str2;
// aq
let aqs = document.getElementsByClassName("aqField");
let str3 = "";
for(let e of aqs){
    str3+= `<li> ${e.value} </li>`;
}
document.getElementById("aqT").innerHTML = str3;
// ce
let ces = document.getElementsByClassName("ceField");
let str4 = "";
for(let e of ces){
    str4+= `<li> ${e.value} </li>`;
}
document.getElementById("ceT").innerHTML = str4;
//code for setting image
let file=document.getElementById('imgfield').files[0];
console.log(file);

let reader = new FileReader();

reader.readAsDataURL(file);
console.log(reader.result);
//set the image to template
reader.onloadend=function(){
    document.getElementById('imgT').src=reader.result;
}
document.getElementById("cv-form").style.display='none';
document.getElementById("cv-template").style.display='block';
}
//print cv
function printResume(){
    window.print();
}

