var logForm = document.querySelector("form");

logForm.onsubmit = submit;

function submit() {
  var kunden = [];

  var fname = logForm.elements[0].value;
  console.log("fname: " + fname);
  var lname = logForm.elements[1].value;
  var status = logForm.elements[2].value;
  var pwd = logForm.elements[3].value;

  var neueKunde = new Kunde(fname, lname, status, pwd);

  var index = kunden.length;
  console.log("index: " + index);
  kunden[index] = neueKunde;
  console.log("kunden: " + kunden);
  console.log("Ausgabe aus dem Array: " + kunden[0].Fname);
  /* console.log("Ausgabe aus dem Array: " + kunden[1].Fname); */
}

/* for (let i = 0; i < logForm.length; i++) {
    let value = logForm.elements[i].value;


} */

function check() {
  /* if (!fname.validity.valid || !lname.validity.valid || 
        !pwd.validity.valid || !pwdconfirm.validity.valid) {
        feedback.innerHTML = "Die Pflichtfelder müssen ausgefüllt werden";
    } */
  /* if (!pwd.validity.valid) {
        feedback.innerHTML = "Passwort min 4 max 8 Zeichen mit min einer Zahl";
    } */
  if (pwd.value !== pwdconfirm.value) {
    feedback.innerHTML = "Passwörter stimmen nicht überein";
  }
}
