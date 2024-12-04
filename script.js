function validateTimeDuration(duration) {
    // Regular expression to validate YYYY-MM - YYYY-MM format
    const durationRegex = /^\d{4}-(0[1-9]|1[0-2])\s*-\s*\d{4}-(0[1-9]|1[0-2])$/;

    // Check if the duration matches the format
    if (!durationRegex.test(duration)) {
        return false;
    }

    // Extract start and end dates
    const [start, end] = duration.split('-').map((d) => d.trim());
    const startYearMonth = start.split('-').map(Number);
    const endYearMonth = end.split('-').map(Number);

    // Validate logical correctness (start date must be earlier than end date)
    if (
        startYearMonth[0] > endYearMonth[0] || // Start year > End year
        (startYearMonth[0] === endYearMonth[0] && startYearMonth[1] > endYearMonth[1]) // Same year, but start month > end month
    ) {
        return false;
    }

    return true;
}
function validateRequiredFields() {
    const requiredFields = [
        { field: document.getElementById('nameField'), name: "Name" },
        { field: document.getElementById('contactField'), name: "Contact" },
        { field: document.getElementById('emailField'), name: "Email ID" },
        { field: document.getElementById('addressField'), name: "Address"},
        { field: document.getElementById('prfield'), name: "pr" },
        { field: document.getElementById('githubField'), name: "git" },
        { field: document.getElementById('imgfield'), name: "Image" },
        { field: document.getElementById('siField'), name: "Skills" },
        { field: document.getElementById('aqField'), name: "Academic Qualifications" },


    ];

    let isValid = true;
    let errorMessage = "Please fill out the following required fields:\n";

    requiredFields.forEach((item) => {
        if (item.field.value.trim() === "") {
            isValid = false;
            errorMessage += `- ${item.name}\n`;
            item.field.style.border = "2px solid red"; // Highlight empty fields
        } else {
            item.field.style.border = ""; // Reset border if filled
        }
    });

    if (!isValid) {
        alert(errorMessage);
    }

    return isValid;
}

//---------Skills----------------
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
//-----------------Projects---------------------
function validateAllDurations1() {
    const durationFields1 = document.getElementsByClassName("prDurationField");
    for (let field of durationFields1) {
        if (!validateTimeDuration(field.value)) {
            alert("Invalid duration format in one or more fields! Please use YYYY-MM - YYYY-MM and ensure the start date is earlier than the end date.");
            field.focus();
            return false;
        }
    }
    return true;
}

function addNewPRField(){
//console.log("Adding new field");

let newNode=document.createElement("textarea");
newNode.classList.add("form-control");
newNode.classList.add("prfield");
newNode.classList.add("mt-2");
newNode.setAttribute("rows",3);
newNode.setAttribute("placeholder","Enter here");

let newDurationNode = document.createElement("input");
newDurationNode.classList.add("form-control", "prDurationField", "mt-2");
newDurationNode.setAttribute("type", "text");
newDurationNode.setAttribute("placeholder", "YYYY-MM - YYYY-MM");

let newLinkNode = document.createElement("input");
newLinkNode.classList.add("form-control", "prLinkField", "mt-2");
newLinkNode.setAttribute("type", "text");
newLinkNode.setAttribute("placeholder", "Enter project link");

let prOb = document.getElementById("pr");
let prAddbuttonOb = document.getElementById("prAddbutton");

prOb.insertBefore(newNode, prAddbuttonOb);
prOb.insertBefore(newDurationNode, prAddbuttonOb);
    prOb.insertBefore(newLinkNode, prAddbuttonOb)
}
//-----------------Work Experience---------------------
function validateAllDurations2() {
    const durationFields2 = document.getElementsByClassName("weDurationField");
    for (let field of durationFields2) {
        if (!validateTimeDuration(field.value)) {
            alert("Invalid duration format in one or more fields! Please use YYYY-MM - YYYY-MM and ensure the start date is earlier than the end date.");
            field.focus();
            return false;
        }
    }
    return true;
}

function addNewWEField(){
    let newNode=document.createElement("textarea");
newNode.classList.add("form-control");
newNode.classList.add("weField");
newNode.classList.add("mt-2");
newNode.setAttribute("rows",3);
newNode.setAttribute("placeholder","Enter here");

let newDurationNode = document.createElement("input");
newDurationNode.classList.add("form-control", "weDurationField", "mt-2");
newDurationNode.setAttribute("type", "text");
newDurationNode.setAttribute("placeholder", "YYYY-MM - YYYY-MM");

let weOb = document.getElementById("we");
let weAddbuttonOb = document.getElementById("weAddbutton");

weOb.insertBefore(newNode, weAddbuttonOb);
weOb.insertBefore(newDurationNode, weAddbuttonOb);
}
//-----------------Academic Qualifications---------------------
function validateAllDurations3() {
    const durationFields3 = document.getElementsByClassName("aqDurationField");
    for (let field of durationFields3) {
        if (!validateTimeDuration(field.value)) {
            alert("Invalid duration format in one or more fields! Please use YYYY-MM - YYYY-MM and ensure the start date is earlier than the end date.");
            field.focus();
            return false;
        }
    }
    return true;
}

function addNewAQField(){
    let newNode=document.createElement("textarea");
newNode.classList.add("form-control");
newNode.classList.add("aqField");
newNode.classList.add("mt-2");
newNode.setAttribute("rows",3);
newNode.setAttribute("placeholder","Enter here");
let newDurationNode = document.createElement("input");
newDurationNode.classList.add("form-control", "aqDurationField", "mt-2");
newDurationNode.setAttribute("type", "text");
newDurationNode.setAttribute("placeholder", "YYYY-MM - YYYY-MM");

let aqOb = document.getElementById("aq");
let aqAddbuttonOb = document.getElementById("aqAddbutton");

aqOb.insertBefore(newNode, aqAddbuttonOb);
aqOb.insertBefore(newDurationNode, aqAddbuttonOb);
}
//-----------------Certifications---------------------
function addNewCEField(){
    let newNode=document.createElement("textarea");
newNode.classList.add("form-control");
newNode.classList.add("ceField");
newNode.classList.add("mt-2");
newNode.setAttribute("rows",3);
newNode.setAttribute("placeholder","Enter here");
let newLinkNode = document.createElement("input");
newLinkNode.classList.add("form-control", "ceLinkField", "mt-2");
newLinkNode.setAttribute("type", "text");
newLinkNode.setAttribute("placeholder", "Enter certification link");


let ceOb = document.getElementById("ce");
let ceAddbuttonOb = document.getElementById("ceAddbutton");

ceOb.insertBefore(newNode, ceAddbuttonOb);
ceOb.insertBefore(newLinkNode, ceAddbuttonOb)
}

// generatingCV

function generateResume(){

    if (!validateRequiredFields()) {
        return; // Stop if validation fails
    }
    // console.log("generating Resume");
    document.getElementById('cv-template').style.display = "block";
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
let durations = document.getElementsByClassName("prDurationField");
    let links = document.getElementsByClassName("prLinkField");

let str1 = "";
// for(let e of prs){
//     str1+= `<li> ${e.value} </li>`;
// }
for (let i = 0; i < prs.length; i++) {
    let description = prs[i].value;
    let duration = durations[i].value;
    let link = links[i].value;

    str1+= `
    <li style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
        <div>
            <p><strong>${description}</strong></p>
            <p><a href="${link}" target="_blank">${link}</a></p>
        </div>
        <p class="text-secondary">${duration}</p>
    </li>`;
}

document.getElementById("prT").innerHTML = str1;

// we
let wes = document.getElementsByClassName("weField");
let durations2 = document.getElementsByClassName("weDurationField");
let str2 = "";
for (let i = 0; i < wes.length; i++) {
    let description = wes[i].value;
    let duration2 = durations2[i].value;
    str2+= `
    <li style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
        <div>
            <p><strong>${description}</strong></p>
        </div>
        <p class="text-secondary">${duration2}</p>
    </li>`;
}
document.getElementById("weT").innerHTML = str2;
// aq
let aqs = document.getElementsByClassName("aqField");
let durations3 = document.getElementsByClassName("aqDurationField");
let str3 = "";
for (let i = 0; i < aqs.length; i++) {
    let description = aqs[i].value;
    let duration3 = durations3[i].value;
    str3+= `
    <li style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
        <div>
            <p><strong>${description}</strong></p>
        </div>
        <p class="text-secondary">${duration3}</p>
    </li>`;
}
document.getElementById("aqT").innerHTML = str3;
// ce
let ces = document.getElementsByClassName("ceField");
let links4 = document.getElementsByClassName("ceLinkField");
let str4 = "";
for (let i = 0; i < ces.length; i++) {
    let description = ces[i].value;
    let link4 = links4[i].value;

    str4+= `
    <li style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
        <div>
            <p><strong>${description}</strong></p>
            <p><a href="${link4}" target="_blank">${link4}</a></p>
        </div>
    </li>`;
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
//------------------------
if (!validateAllDurations1()) {
    return; // Abort resume generation if validation fails
}
if (!validateAllDurations2()) {
    return; // Abort resume generation if validation fails
}
if (!validateAllDurations3()) {
    return; // Abort resume generation if validation fails
}

}
//print cv
function printResume(){
    window.print();
}


