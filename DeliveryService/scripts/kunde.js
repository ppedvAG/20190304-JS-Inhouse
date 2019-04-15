/* Konstruktur für Objekt Kunde */
function Kunde(Fname, Lname, Status, Password) {
    this.Fname = Fname;
    this.Lname = Lname;
    this.Status = Status;
    this.Password = Password;
  }
  Kunde.prototype.getName = function() {
    return Fname + Lname;
  };