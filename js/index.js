//Define Variables

const inputLink = document.querySelector("#input-link").value;
const shortenBtn = document.querySelector("#shorten-btn");
const urlList = document.querySelector('.url-list');
let newLinks;

//Add eventlistener

shortenBtn.addEventListener('click', shortLink);

//Generate URL
function genUrl(){
let URL = document.getElementById('input-link').value;
let protocols = URL.startsWith('http://')||URL.startsWith('https://')||URL.startsWith('ftp://');
if(!protocols){
  newLinks = "https://" + URL;
  return newLinks;
} else if (URL, data = {}) {
  postData('https://rel.ink/api/links', {
    URL:newLinks
  }).then(data => {
    const shortUrl = "https://rel.ink" + data.hashid;
  } );
  console.log(data);
}
}
// To Validate Url
 function validateUrl(value) {
   
  return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
}

//Main function
function shortLink(){

//prevents browser from refreshing

event.preventDefault();

//Add the resultDiv

const resultDiv = document.createElement("div");
resultDiv.classList.add("links-div");

//Create li(lists and buttons)
const newLists = document.createElement("li");
let generateUrl = genUrl();
let validUrl = validateUrl(generateUrl);
 if (validUrl) {
   newLists.innerText = newLinks;
   resultDiv.appendChild(newLists);
   console.log(newLinks);
 }else{
   newLists.innerHTML = "<i>Please input a valid Url!!</i>"; 
   resultDiv.appendChild(newLists);
}

//Copy button

const copyButton = document.createElement('button');
copyButton.innerHTML = "<p>Copy</p>";
copyButton.classList.add('copy-btn');
resultDiv.appendChild(copyButton);

//Delete Button
const deleteButton = document.createElement('button');
deleteButton.innerHTML = "<p>X</p>";
deleteButton.classList.add('delete-btn');
resultDiv.appendChild(deleteButton);
//Append div to list

urlList.appendChild(resultDiv);
}

 

 

async function postData(url = "", data = {}) {
    const fetchData = await fetch("https://rel.ink/api/links/", {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data)
    });
    return fetchData.json();
  }



/*
//Generate random numbers
function getRandom(){
    let text = "";
    let randomNo ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefgghijklmnopqrstuvwxyz0123456789";
    for(let i=0; i<5; i++){
        text += randomNo.charAt(Math.floor(Math.random()* randomNo.length));
    }
    return text;
}
*/

/*
//Add a random hash to the location bar
 function getHash(){
   if (window.location.hash == ""){
window.location.hash = getRandom();
   }
   const random = getHash();
   console.log(random);
 }
*/
