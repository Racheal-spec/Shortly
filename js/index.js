//Define Variables
const shortenBtn = document.getElementById("shorten-btn");
const linkResult =  document.getElementById('result');
//const copyBtn = document.querySelector('.copy-btn');
let newLinks;

//Add eventlistener
document.addEventListener("DOMContentLoaded", showsavedResults);
shortenBtn.addEventListener("click", shortLink);
//copyBtn.addEventListener("click", copyText);
//Save results to local storage
function saveResults(result) {
let results;
if(localStorage.getItem("results") === null ){
results = [];
}else{
results = JSON.parse(localStorage.getItem("results"));
}
results.push(result);
localStorage.setItem("results", JSON.stringify(results));
}


//Generate URL
function genUrl(URL){
let protocols = URL.startsWith('http://')||URL.startsWith('https://')||URL.startsWith('ftp://');
if(!protocols){
newLinks = "http://" + URL;
return newLinks;
} else{
return URL;
}
}
// To Validate Url
function validateUrl(value) {  
return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
}

//Main function
function shortLink(event){
event.preventDefault();

let URL = document.getElementById('input-link').value;
let generateUrl = genUrl(URL);
let validUrl = validateUrl(generateUrl);

//Call the local storage function here

saveResults(generateUrl);
saveResults(linkResult.innerText)

if (validUrl) {

fetch('https://rel.ink/api/links/', {
  method: 'POST',
  body: JSON.stringify({'url':generateUrl}),
  headers: {
      'Content-Type': 'application/json'
    },
  mode: 'cors',
})
.then(response => response.json())
.then(result => {
  document.getElementById('defaultUrl').innerHTML = generateUrl;
  linkResult.innerHTML = '<a href="https://rel.ink/'+result.hashid+'">https://rel.ink/'+ result.hashid +'</a>';
  document.querySelector('.copy-btn').innerHTML = "Copy";
  document.querySelector('.show-div').style.display = "block";
  console.log('Success:', result);
})
.catch(error => {
  console.error('Error:', error);
});
}else{
("Please input a valid Url!"); 
} 

}
/*
// Copy Button
function copyButton(e) {

e.target.innerText = 'Copied';
document.querySelector('.copy-btn').innerHTML = "Copy";
const url = e.target.previousElementSibling.className;
console.log(url);
copyText(url)
}

// Copy Text
function copyText() {
let copyText = document.getElementById("result");
console.log(copyText);
copyText.select();
copyText.setSelectionRange(0, 99999);
document.execCommand("copy");
}
*/

//A function to make the saved results show on the interface

function showsavedResults(result) {
let results;
if(localStorage.getItem("results") === null ){
results = [];
}else{
results = JSON.parse(localStorage.getItem("results"));
}
results.forEach(result => {
let URL = document.getElementById('input-link').value;
let generateUrl = genUrl(URL);
let validUrl = validateUrl(generateUrl);

if (validUrl) {

fetch('https://rel.ink/api/links/', {
  method: 'POST',
  body: JSON.stringify({'url':generateUrl}),
  headers: {
      'Content-Type': 'application/json'
    },
  mode: 'cors',
})
.then(response => response.json())
.then(result => {
  document.getElementById('defaultUrl').innerHTML = generateUrl;
  linkResult.innerHTML= '<a href="https://rel.ink/'+result.hashid+'">https://rel.ink/'+ result.hashid +'</a>';
  document.querySelector('.copy-btn').innerHTML = "Copy";
  document.querySelector('.show-div').style.display = "block";
  console.log('Success:', result);
})
.catch(error => {
  console.error('Error:', error);
});
}else{
("Please enter a valid URL")
} 
})};
