/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
// Definition der Klasse 'Kunde'
class Kunde {
    // Konstruktor zum Initialisieren der Eigenschaften eines Kunden
    constructor(name, adresse, email, telefonnummer) {
        this.name = name;
        this.adresse = adresse;
        this.email = email;
        this.telefonnummer = telefonnummer;
    }

    // Methode zur Anzeige der Kundendaten
    anzeigen() {
        console.log(`Kundendaten:`);
        console.log(`Name: ${this.name}`);
        console.log(`Adresse: ${this.adresse}`);
        console.log(`E-Mail: ${this.email}`);
        console.log(`Telefonnummer: ${this.telefonnummer}`);
    }

    // Beispiel einer Methode, die das Update der Adresse ermöglicht
    adresseAktualisieren(neueAdresse) {
        this.adresse = neueAdresse;
        console.log(`Die Adresse von ${this.name} wurde auf "${this.adresse}" aktualisiert.`);
    }
}

// Erstellen eines neuen Kunden-Objekts
const kunde1 = new Kunde('Max Mustermann', 'Musterstraße 1, 12345 Musterstadt', 'max@beispiel.de', '0123456789');

// Aufrufen der Methode zur Anzeige der Kundendaten
kunde1.anzeigen();

// Aktualisieren der Adresse des Kunden
kunde1.adresseAktualisieren('Neue Musterstraße 2, 67890 Neue Stadt');

// Anzeige der aktualisierten Kundendaten
kunde1.anzeigen();

if(kunde1.benutzername == benutzername &&kunde1.kennwort == kennwort){
console.log ("die zugangsdaten wurden korrekt eingegeben.")
}else{
	console.log("die zugangsdaten wurden nicht korrekt eingegeben.")
}

'use strict';

// Das Modul express wird mit der Funktion require einer Konstanten namens express zugwiesen.

const express = require('express');

// Der Body-Parser ermöglicht es uns, Daten aus dem Kundenformular auf dem Server entgegenzunehmen.
// Der Body-Parser wird im Terminal mit dem Befehl 'npm install -g body-parser' installiert.

const bodyParser = require('body-parser');

// Die Anweisungen werden von oben nach unten abgearbeitet. Der Wert 3000 wird von rechts nach links 
// zugewiesen an die Konstante namens PORT. Das einfache Gleichheitszeichen lässt sich also übersetzen
// mit "... wird zugewiesen an ..."

const PORT = 3000;

// Der Wert '0.0.0.0' wird zugewiesen an eine Konstante namens HOST 
const HOST = '0.0.0.0';

// App

const app = express();

// Es wird der App bekanntgegeben, wo die styles zu finden sind.
app.use(express.static('public'))
app.set('view engine', 'ejs')

// Der Bodyparser wird in der app eingebunden.

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {

	// res ist die Antwort des Servers an den Browser.
	// send() ist die Anweisung etwas an den Browser zu senden
	// 'Hello ...' ist der Wert, der an die Anweisung send() übergeben wird
	//res.send('Hello remote world!\n');

	// Das res-Objekt kann noch mehr als nur eine Zeichenkette an den
	// Browser zu senden. Das res-Objekt kann mit der Funktion render()
	// eine HTML-Datei an den Browser senden.
	res.render('index.ejs',{});
});

// Wenn im Browser die Adresse .../agb aufgerufen wird, wird der Server aufgefordert,
// die angefragte Seite an den Browser zurückzugeben.
// Der Server arbeitet dazu die Funktion app.get('agb)... ab.
app.get('/agb', (req, res) => {

	// Der Server gibt die gerenderte EJS-Seite an den 
	// Browser zurück.
	res.render('agb.ejs',{});
});

app.get('/hilfe', (req, res) => {
	res.render('hilfe.ejs',{});
});

app.get('/kontenuebersicht', (req, res) => {
	res.render('kontenuebersicht.ejs',{});
});

app.get('/profil', (req, res) => {
	res.render('profil.ejs',{});
});

app.get('/postfach', (req, res) => {
	res.render('postfach.ejs',{});
});

app.get('/kreditBeantragen', (req, res) => {
	res.render('kreditBeantragen.ejs',{});
});

app.get('/ueberweisungAusfuehren', (req, res) => {
	res.render('ueberweisungAusfuehren.ejs',{});
});

// Die Funktion app.get('/geldAnlegen...) wird abgearbeitet, wenn der Benutzer die Seite geldAnlegen
// im Browser ansurft.

app.get('/geldAnlegen', (req, res) => {

	// Die Serverantwort an den Browser wird gerendert an den Browser zurückgegeben.
	// Dazu wird die Funktion render() aufgerufen. 

	res.render('geldAnlegen.ejs',{

		// In der geldAnlegen.ejs gibt es die Variablen Betrag und Laufzeit.
		// Der Server übergibt die folgenden Werte an den Browser:

		Betrag:120,
		Laufzeit:2,
		Meldung: ""
	})
});

// Die Funktion app.post('/geldAnlegen...) wird abgearbeitet, wenn der Kunde auf dem Formular den Absenden-Button klickt.

app.post('/geldAnlegen', (req, res) => {

	// Die Werte, die der Kunde im Formular eingegeben hat, werden an den Server gesendet.
	// Der Wert der Variablen Betrag wird aus dem body der Kundenanfrage (req) ausgelesen und zugewiesen an die lokale Variable
	// namens betrag.

	let betrag = req.body.Betrag;
	console.log("geldAnlegen: Gewünschter Betrag: " + betrag + " Euro")

	let laufzeit = req.body.Laufzeit;
	console.log("geldAnlegen: Gewünschte Laufzeit: " + laufzeit + " Jahre")

	let zinssatz = 0.1

	let zinsen = betrag * zinssatz;

	res.render('geldAnlegen.ejs',{
		Betrag: betrag,
		Laufzeit: laufzeit,
		Meldung: "Ihre Zinsen betragen: " + zinsen
	});
});

app.get('/login', (req, res) => {
	res.render('login.ejs',{
		<p><%=Meldung%></p>
	});
});



// Mit listen() wird der Server angewiesen, auf den angegebenen Host und
// Port zu lauschen.  
app.listen(PORT, HOST);

// Mit der Anweisung console.log() wird dem Server-Administrator auf der
// Konsole angezeigt, was der Server macht. Der Programmierer schreibt dazu 
// in die runden Klammern den Ausdruck, der auf der Konsole angezeigt
// werden soll. Die Werte der beiden Konstanten HOST und PORT werden in den
// Ausdruck übergeben. Ein Verb mit anschließenden runden Klammern steht
// immer für eine Anweisung etwas zu tun. 
console.log(`Running on http://${HOST}:${PORT}`);

//require('./uebungen/01-grundlagen.js');
//require('./uebungen/03-objekte.js');
//require('./klausuren/klausur20240930.js');
//require('./uebungen/04-funktionen.js');