class Osoba{
    constructor(ime, prezime, brojTelefona, email){
        this.ime = ime;
        this.prezime = prezime;
        this.brojTelefona = brojTelefona;
        this.email = email;
       
    }
}

var prvaOsoba = new Osoba ("Pero", "Perić", "066/528-589", "pero.peric@gmail.com")
var drugaOsoba = new Osoba ("Marko", "Markovic","066/528-589", "marko.markovic@gmail.com", )
var osobe = [prvaOsoba, drugaOsoba,];


    var tabel = document.getElementById("tabela")
    var headerRed = tabel.innerHTML


    function ispis(){
        tabel.innerHTML = headerRed;
    
        for(var i = 0; i < osobe.length; i++){
            
            tabel.innerHTML += "<tr><td>" + osobe[i].ime + "</td>"
            + "<td>" + osobe[i].prezime + "</td>"
            + "<td>" + osobe[i].brojTelefona + "</td>"
            + "<td>" + osobe[i].email + "</td>"
            + "<td><button onclick='izmjeni(" + i + ")'>Izmjeni</button></td>"
            + "<td><button onclick='izbrisi(" + i + ")'>X</button></td></tr>";
        }
    }
    ispis();
    //create
    function dodajNovuOsobu(){
        var novoIme = document.getElementById("ime").value;
        var novoPrezime = document.getElementById("prezime").value;
        var noviBroj = document.getElementById("brojTelefona").value;
        var noviEmail = document.getElementById("email").value;
       
    
        osobe.push(new Osoba(novoIme, novoPrezime, noviBroj, noviEmail));
        osobe.sort(function(a, b){
            if(a.ime < b.ime) { return -1; }
            if(a.ime > b.ime) { return 1; }
            return 0;
        })
        ispis();
    }

    //delete
    function izbrisi(index){
        osobe.splice(index, 1);
        ispis();
    }
    
    function izmjeni(index) {
        var novoIme = prompt("Unesite novo ime");
        osobe[index] = novoIme;
        ispis();
    }