const inputLink = document.querySelector("#input-link");
const shortenBtn = document.querySelector("#shorten-btn");
let newLinks;
//Generate random numbers
function getRandom(){
    let text = "";
    let randomNo ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefgghijklmnopqrstuvwxyz0123456789";
    for(let i=0; i<5; i++){
        text += randomNo.charAt(Math.floor(Math.random()* randomNo.length));
    }
    return text;
}
//Generate URL
function genUrl(){
  let URL = document.getElementById('input-link').value;
let protocols = URL.startsWith('http://')||URL.startsWith('https.//')||URL.startsWith('ftp://');
if(!protocols){
  newLinks = "http://" + URL;
  console.log(newLinks);
  return newLinks;
} else{
return URL;
  }
}
//Add a random hash to the location bar
 function getHash(){
   if (window.location.hash == ""){
window.location.hash = getRandom();
   }
   const random = getHash();
   console.log(random);
 }



/*
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
*/



