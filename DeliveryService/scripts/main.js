//document.getElementById('logbtn').disabled = false;
var logButton = logbtn; /*wir können auf die Elemente zugreifen, 
die mit ID versehen sind, einfach indem wir die Id im Code verwenden.
Ist möglich, weil diese Objektvariablen automatisch angelegt werden. */
logButton.disabled = true;
/* function enableBtn() {
  if (userInput.validity.valueMissing==false) {
    logButton.disabled = false;
  }
} */

function checkLogInputs () {
  if (userInput.value == '' || userPwd.value == '') {
    logButton.disabled = true;
  } else {
    logButton.disabled = false;
  }
}


/* DEN BENUTZER BEGRÜßEN */
/* INPUT.VALUE AUSLESEN UND IN EINER FUNKTION VERWENDEN */
function greetUser(userName) {
  var myOutput = document.getElementById("greetOutput");
  myOutput.innerHTML = "Hallo " + userName;
  //console.log("userInput.value " + userInput.value);
  userInput.value='';
  userPwd.value='';
  
}


/* == userPwd.value == ''
else if (userInput.value !== '' && userPwd.value !== '') {
  logbtn.disabled = 'true';
} */


const vat = 0.19; //value added tax - Mehrwertsteuer
//wirft Fehler zurück. Konstanten sind unveränderbar
/* vat = 0.10; */



var kundeMax = new Kunde("Max", "Mustermann", "gold", "12345");

var isInstance = false;
isInstance = kundeMax instanceof Kunde;
console.log("kundeMax ist Instanz von Kunde? " + isInstance);
/* Ein Beispiel für anonymes Objekt. Sprich angelegt ohne Konstruktor und ohne new Schlüsselwort */
var kunde = {
  //Objekt - geschweifte Klammern und Key:Value Paare durch Komma getrennt
  fname: "Max", //Eigenschaft / Property vom Objekt Kunde
  lname: "Mustermann",
  status: "gold",
  password: "12345",
  getName: function() {
    return fname + lname;
  } //Methode vom Objekt Kunde
};
isInstance = kunde instanceof Kunde;
console.log("kunde ist Instanz von Kunde? " + isInstance);

var hasDiscount = false; //Boolean
var istVerfuegbar = true;

var produkt = {
  descr: "Salat",
  price: 3.5,
  hasDiscount: false,
  istVerfuegbar: true
};

/* HTML Attribute über JS ändern */
/* BILDER MIT KLICK AUSTAUSCHEN */
var myImg = document.querySelector("img");
myImg.onclick = function() {
  var mySrc = myImg.getAttribute("src");
  if (mySrc == "images/food-1.jpg") {
    myImg.setAttribute("src", "images/food-2.jpg");
  } else if (mySrc == "images/food-2.jpg") {
    myImg.setAttribute("src", "images/food-3.jpg");
  } else {
    myImg.setAttribute("src", "images/food-1.jpg");
  }
};



/* ANGEBOT AN EINEN WOCHENTAG ANPASSEN */
/* SWITCH ANWEISUNG */
var datum = new Date();
var day = datum.getDay();
console.log(day);
var angebotOffer = document.getElementById("angebotOffer");
switch (day) {
  case 1:
    angebotOffer.innerHTML = "Sushi";
    break;
  case 2:
    angebotOffer.innerHTML = "Gemüsepfanne";
    break;
  case 3:
    angebotOffer.innerHTML = "Pasta";
    break;
  case 4:
    angebotOffer.innerHTML = "Pizza";
    break;
  case 5:
    angebotOffer.innerHTML = "Döner";
    break;
  case 6:
    angebotOffer.innerHTML = "Kartoffelauflauf";
    break;
  case 0:
    angebotOffer.innerHTML = "Eintopf";
    break;
}

var angebot = [
  "Salat",
  "Pizza",
  "Pasta",
  "Eintopf",
  "Kartoffelauflauf",
  "Döner",
  "Gemüsepfanne",
  "Backwaren",
  "Sushi",
  "Pilzpfanne"
];

/* CHECKBOX ZUR GERICHTAUSWAHL */
/* HTML MIT DER FUNKTION INNERHTML DYNAMISCH ERZEUGEN */
var myForm = document.getElementById("offerForm");
for (var i = 0; i < angebot.length; i++) {
  myForm.innerHTML +=
    '<p><input name="' +
    angebot[i] +
    '" type="checkbox"><label for="' +
    angebot[i] +
    '">' +
    angebot[i] +
    "</label></p>";
}

function hideCookieDiv() {
  cookieConfirm.style.display = 'none';
}

fetch("http://localhost:3000/profile")
.then(function(response) {
  return response.json();
})
.then(function(myJson) {
   var jsonString  = JSON.stringify(myJson);
   var trimedString = jsonString.trim();
   
   var jsarray = trimedString.split('","');
   console.log(jsarray);

});
// console.log("2. jsstr " + jsonString);


