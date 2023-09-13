//! Erstelle mit document.getElementById(“info”).innerHTML eine h1 mit dem Text “Hello World”.

// - getElementById()
// Damit sprechen wir Elemente über die ID an
// id aus dem HTML: info
const info = document.getElementById("info");

document.getElementById("info").innerHTML = "<h1>Hello World</h1>";
// oder: (kurz)
// info.innerHTML = "<h1>Hello World</h1>";

//
// Anzeige in der Console mit diesem Befehl

console.log(document.getElementById("info").innerHTML);
// oder:
console.log(info.innerHTML);

// --------------------

//! Füge noch eine h2 hinzu mit dem Text “How are you?”.
document.getElementById("info").innerHTML += "<h2>How are you?</h2>";
// oder (kurz)
// info.innerHTML += "<h2>How are you?</h2>"; //weil wie eine Variable vergeben haben

//
// Sieh’ dir das Ergebnis über den Live Server an.
console.log(info.innerHTML);

//! Nutze document.getElementById('container').innerHTML, um einen <p>-Tag mit dem Text “start of the element” zu kreieren

const container = document.getElementById("container");

// document.getElementById("container").innerHTML = "<p>start of the element";
// oder kurz:
container.innerHTML = "<p>start of the element"; //weil wie eine Variable vergeben haben

//! Schreibe nun document.write("end of the element")

document.write("end of the element");
// mit end of the elemet wird es automatisch nach ganz unten ans ende gesetzt, egal wie viele elemente noch hinzufügt
