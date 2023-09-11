
window.document.getElementById("login").style.visibility = "visible";
window.document.getElementById("sign-up").style.visibility = "hidden";
window.document.getElementById("sentence").style.visibility = "hidden";
window.document.getElementById("sentence-input").style.visibility = "hidden";

const url = "https://api.jsonbin.io/b/61f1e1ecfb3ece3ad7cc72f7"

var usernames = [];
var passwords = [];

function include(file) {
  
  var script  = document.createElement('script');
  script.src  = file;
  script.type = 'text/javascript';
  script.defer = true;
  
  document.getElementsByTagName('head').item(0).appendChild(script);
  
}

include("./Test.js")
/*
const getDB = async () => {
  const response = await fetch(url + "/latest", {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      "secret-key": "$2b$10$uBuMo5fSgD5bg4hnoi5IHuMN34A/pzLjbtB/y3s/4iiL4M5lgcCx6"
    }
  });
  const db = await response.json();
  return db.data;
};


const renderDB = (db) => {
  usernames = [...db.username]
  passwords = [...db.password]
  console.log("helo");
  }

getDB().then((db) => {
  renderDB(db);
})
*/
allSentences = ["The quick brown fox jumped over the lazy dog"]
stringSent = "";


chosenSentence = [];

function myFunction() {
  console.log("got here");
}

var arrayofSent = []

function playTest(allSentences){
  stringSent = allSentences[Math.floor(Math.random()*allSentences.length)];
  for(i = 0; i < stringSent.length; i++){
    chosenSentence.push(stringSent.at(i));
    window.document.getElementById("sentence").append(stringSent.at(i));
  
  }
  console.log(stringSent);
}



var typed = "";
charTyped = [];
window.document.addEventListener('keydown', (event) => {
  charTyped = [];
  typed = window.document.getElementById("typing-input").value;
  window.document.getElementById("typing-input").innerHTML = '';
   window.document.getElementById("sentence").innerHTML = '';
  for(i = 0; i < typed.length; i++){
    charTyped.push(typed.charAt(i));
    console.log(charTyped)
    if(typed.charAt(i) != stringSent.charAt(i)){
      chosenSentence[i] = "<span style='color: red'>"+typed.charAt(i)+"</span>";
      charTyped[i] = " ";
    }
    window.document.getElementById("typing-input").innerHTML += charTyped[i];
    window.document.getElementById("sentence").innerHTML += chosenSentence[i];
  }
  
}, false);









function signin(){
  username = window.document.getElementById("usernameinput").value;
  password = window.document.getElementById("passwordinput").value;
  if(usernames.includes(username) && passwords.includes(password) && window.document.getElementById("login").style.visibility == "visible" && usernames.indexOf(username) == passwords.indexOf(password)){
    window.document.getElementById("usernameinput").value = "";
    window.document.getElementById("passwordinput").value = "";
    window.document.getElementById("login").style.visibility = "hidden";
  }
  else{
    window.document.getElementById("login").style.visibility = "visible";
    window.document.getElementById("sign-up").style.visibility = "hidden";
  }
}


const signup = async() =>{
  
  username1 = window.document.getElementById("usernameinput2").value;
  password1 = window.document.getElementById("passwordinput2").value;
  
  if(window.document.getElementById("sign-up").style.visibility == "visible" && usernames.includes(username1) == false && username1.length != 0 && password1.length != 0){
    /*
    const oldDB = await getDB();
    console.log(oldDB);
    
    oldDB.username.push(username1);
    oldDB.password.push(password1);
    console.log("1" + oldDB.username);
    console.log("pushed")
    const response = await fetch(url , {
      method: "put",
      body: JSON.stringify(oldDB),
      headers: {
        "Content-Type": "application/json",
        "secret-key":     "$2b$10$uBuMo5fSgD5bg4hnoi5IHuMN34A/pzLjbtB/y3s/4iiL4M5lgcCx6"
      }
    })
    const newDB = await response.json();
    renderDB(newDB.data);
    */
    console.log("usernames!");
    console.log(usernames);
    console.log(passwords);
    
    window.document.getElementById("usernameinput").value = "";
    window.document.getElementById("passwordinput").value = "";
    window.document.getElementById("sign-up").style.visibility = "hidden";
  }
  else{
    window.document.getElementById("sign-up").style.visibility = "visible";
    window.document.getElementById("login").style.visibility = "hidden";
  }
}

const playguest = () =>{
  window.document.getElementById("usernameinput").value = "";
  window.document.getElementById("passwordinput").value = "";
  window.document.getElementById("login").style.visibility = "hidden";
  window.document.getElementById("sign-up").style.visibility = "hidden";
  window.document.getElementById("sentence").style.visibility = "visible";
  window.document.getElementById("sentence-input").style.visibility = "visible";
  playTest(allSentences);
}


