import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CardDialogComponent } from '../card-dialog/card-dialog.component';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.scss'],
})
export class GameInfoComponent implements OnInit, OnChanges {
  cardAction = [
    { "title": "Wie erstellt man eine Liste in HTML?", "description": "Listen in HTML können geordnet (<ol>) oder ungeordnet (<ul>) sein. Jeder Listeneintrag wird mit einem <li> Tag erstellt." },
    { "title": "Was ist der Unterschied zwischen 'display: flex' und 'display: grid' in CSS?", "description": "'display: flex' richtet Elemente in einer Richtung aus, während 'display: grid' Elemente in Zeilen und Spalten ausrichten kann." },
    { "title": "Was sind JavaScript Promises?", "description": "Ein Promise in JavaScript ist ein Objekt, das die Fertigstellung oder das Scheitern einer asynchronen Operation repräsentiert." },
    { "title": "Was ist die Funktion des RouterModule in Angular?", "description": "Das RouterModule in Angular definiert Routen und Routenverhalten in einer Angular-Anwendung." },
    { "title": "Wie erstellt man einen Kommentar in HTML?", "description": "Kommentare in HTML werden mit den Tags <!-- und --> erstellt." },
    { "title": "Wie erstellt man eine Medienabfrage in CSS?", "description": "Medienabfragen in CSS werden mit der @media Regel erstellt und ermöglichen die Anpassung des Layouts an verschiedene Geräte und Bildschirmgrößen." },
    { "title": "Was ist der Unterschied zwischen 'let', 'const' und 'var' in JavaScript?", "description": "'var' deklariert eine Variable global oder lokal im gesamten Funktionsscope. 'let' deklariert eine Variable nur im Blockscope. 'const' ist wie 'let', aber die Variable kann nicht neu zugewiesen werden." },
    { "title": "Was ist der Unterschied zwischen Template-driven Forms und Reactive Forms in Angular?", "description": "Template-driven Forms sind einfach und eignen sich gut für einfache Szenarien. Reactive Forms sind robuster, skalierbarer, wiederverwendbarer und testbarer. Sie eignen sich gut für komplexere Szenarien." },
    { "title": "Wie erstellt man einen 'Anchor link' in HTML?", "description": "'Anchor links' in HTML werden mit dem <a> Tag und dem 'href'-Attribut erstellt. Der Wert des 'href'-Attributs ist eine Raute gefolgt von der ID des Ziel-Elements." },
    { "title": "Wie erstellt man einen Schatten in CSS?", "description": "Schatten in CSS können mit der 'box-shadow'-Eigenschaft für Blockelemente und der 'text-shadow'-Eigenschaft für Text erstellt werden." },
    { "title": "Was ist ein 'closure' in JavaScript?", "description": "Ein 'closure' in JavaScript ist eine Funktion, die Zugriff auf ihr eigenes Scope, das Scope der äußeren Funktion und globale Variablen hat." },
    { "title": "Was ist Dependency Injection in Angular?", "description": "Dependency Injection (DI) in Angular ist ein Designmuster, bei dem eine Klasse ihre Abhängigkeiten von externen Quellen anstatt sie selbst zu erstellen, erhält." },
    { "title": "Wie stellt man Text fett dar in HTML?", "description": "Text kann in HTML fett dargestellt werden mit dem <strong> oder <b> Tag." },
    { "title": "Was sind HTML-Tags?", "description": "HTML-Tags sind die versteckten Schlüsselwörter in einer Web-Seite, die die Webseite für den Webbrowser darstellbar machen." },
    { "title": "Was bedeutet CSS?", "description": "CSS steht für Cascading Style Sheets und wird verwendet, um das Aussehen von Webinhalten zu gestalten und zu formatieren." },
    { "title": "Was ist eine Funktion in JavaScript?", "description": "Eine Funktion ist ein Block von Code, der zur Ausführung einer bestimmten Aufgabe entworfen ist und durch einen Namen aufgerufen werden kann." },
    { "title": "Was ist Angular?", "description": "Angular ist ein Framework zur Erstellung von Webanwendungen, entwickelt von Google." },
    { "title": "Was ist der Zweck von <!DOCTYPE html>?", "description": "Die <!DOCTYPE html> Deklaration muss die erste Zeile in einem HTML-Dokument sein und gibt an, dass das Dokument HTML5 ist." },
    { "title": "Was ist das CSS Box Model?", "description": "Das CSS Box Model ist ein Konzept, das die Gestaltung von Elementen auf einer Webseite definiert, einschließlich Padding, Border und Margin." },
    { "title": "Was ist der Unterschied zwischen == und === in JavaScript?", "description": "Beide sind Vergleichsoperatoren, aber == vergleicht nur den Wert, während === sowohl Wert als auch Typ vergleicht." },
    { "title": "Was ist ein Angular Service?", "description": "Ein Angular Service ist eine Funktion, die daten- oder funktionsorientierte Aufgaben ausführt und innerhalb einer Angular-Anwendung wiederverwendet werden kann." },
    { "title": "Was ist ein HTML-Element?", "description": "Ein HTML-Element ist ein einzelnes Teil eines HTML-Dokuments oder einer HTML-Seite." },
    { "title": "Was ist eine CSS-Klasse?", "description": "Eine CSS-Klasse ist ein Selektor, der dazu dient, Stile auf eine Gruppe von Elementen mit demselben Klassennamen anzuwenden." },
    { "title": "Was ist ein JavaScript-Objekt?", "description": "Ein JavaScript-Objekt ist eine Sammlung von Eigenschaften, wobei jede Eigenschaft aus einem Schlüssel-Wert-Paar besteht." },
    { "title": "Was ist Angular Data Binding?", "description": "Data Binding in Angular ist der Prozess, der eine Verbindung zwischen der Benutzeroberfläche der Anwendung und den Geschäftsdaten herstellt." },
    { "title": "Was ist der Zweck von HTML-Tabellen?", "description": "HTML-Tabellen dienen zur Darstellung von Daten in Tabellenform mit Zeilen und Spalten." },
    { "title": "Was sind CSS-Selektoren?", "description": "CSS-Selektoren sind Muster, die zum Auswählen von Elementen verwendet werden, um ihnen Stile zuzuweisen." },
    { "title": "Was sind JavaScript-Arrays?", "description": "JavaScript-Arrays sind Objekte, die zum Speichern von mehreren Werten in einer einzigen Variable verwendet werden." },
    { "title": "Was ist Angular Dependency Injection?", "description": "Dependency Injection in Angular ist ein Designmuster, bei dem eine Klasse ihre Abhängigkeiten von externen Quellen erhält statt sie selbst zu erstellen." },
    { "title": "Was ist ein HTML-Formular?", "description": "Ein HTML-Formular wird verwendet, um Benutzereingaben zu sammeln und sie normalerweise an einen Server zu senden." },
    { "title": "Was ist der Zweck von 'display: flex' in CSS?", "description": "'display: flex' in CSS wird verwendet, um ein flexibles Layout-Modell zu erstellen, das es einfacher macht, responsive Design-Layouts zu erstellen." },
    { "title": "Was ist eine Promise in JavaScript?", "description": "Ein Promise in JavaScript ist ein Objekt, das die Fertigstellung oder das Scheitern einer asynchronen Operation darstellt." },
    { "title": "Was ist Angular Routing?", "description": "Das Angular Routing-Modul ist ein Service, der eine Navigation von einer Ansicht zur anderen ermöglicht, während der Zustand der Anwendung beibehalten wird." },
    { "title": "Was ist HTML5 Canvas?", "description": "Das HTML5 Canvas-Element wird verwendet, um Grafiken, Spielgrafiken, Kunst, Grafikdiagramme und mehr mithilfe von JavaScript auf einer Webseite zu zeichnen." },
    { "title": "Wie erstellt man ein CSS-Grid-Layout?", "description": "Ein CSS-Grid-Layout kann durch Verwendung der 'display: grid' Eigenschaft auf einem Container-Element erstellt werden." },
    { "title": "Was ist das 'this' Schlüsselwort in JavaScript?", "description": "Das 'this' Schlüsselwort in JavaScript bezieht sich auf das Objekt, in dem es verwendet wird, und sein Wert ändert sich je nach Kontext." },
    { "title": "Was ist ein Angular Module?", "description": "Ein Angular Module ist eine Möglichkeit, Teile einer Angular-Anwendung zu gruppieren. Jede Angular-Anwendung hat mindestens ein Modul, das als Root-Modul bekannt ist." },
    { "title": "Wie bindet man ein Bild in HTML ein?", "description": "Bilder werden in HTML mit dem <img> Tag eingebunden. Der Pfad zum Bild wird in das 'src'-Attribut eingeschrieben." },
    { "title": "Was ist das 'z-index' Eigenschaft in CSS?", "description": "Die 'z-index' Eigenschaft in CSS bestimmt die Reihenfolge der Ebenen entlang der z-Achse. Ein Element mit höherem 'z-index' wird vor einem Element mit niedrigerem 'z-index' angezeigt." },
    { "title": "Was ist 'hoisting' in JavaScript?", "description": "'Hoisting' in JavaScript ist ein Verhalten, bei dem Variablendeklarationen und Funktionserklärungen an den Anfang ihrer umgebenden Funktion oder ihres globalen Kontextes verschoben werden." },
    { "title": "Was sind Angular Observables?", "description": "Observables in Angular sind eine Implementierung des Observer-Designmusters und werden verwendet, um asynchrone oder synchrone Datenströme zu erstellen und zu abonnieren." },
    { "title": "Wie erstellt man einen Hyperlink in HTML?", "description": "Hyperlinks werden in HTML mit dem <a> Tag erstellt. Die URL wird in das 'href'-Attribut geschrieben." },
    { "title": "Wie erstellt man eine Animation in CSS?", "description": "Animationen in CSS werden mit den @keyframes und animation Eigenschaften erstellt." },
    { "title": "Wie schreibt man eine Arrow Funktion in JavaScript?", "description": "Arrow Funktionen in JavaScript bieten eine kürzere Syntax zum Schreiben von Funktionen durch Weglassen des Schlüsselworts 'function' und Hinzufügen eines '=>' Symbols nach den Parametern." },
    { "title": "Was ist ein Angular Pipe?", "description": "Ein Angular Pipe nimmt Daten als Eingabe und transformiert sie in ein gewünschtes Ausgabeformat." },
    { "title": "Wie erstellt man eine Tabelle in HTML?", "description": "Tabellen in HTML werden mit den <table>, <tr> (Tabellenzeile), und <td> (Tabellendaten) Tags erstellt." },
    { "title": "Wie selektiert man ein Element in CSS?", "description": "Elemente in CSS können mit Element-, Klassen- und ID-Selektoren ausgewählt werden." },
    { "title": "Wie erstellt man ein Objekt in JavaScript?", "description": "Ein Objekt in JavaScript kann mit den geschweiften Klammern {} oder dem 'new Object()' Konstruktor erstellt werden." },
    { "title": "Was sind Angular Lifecycle Hooks?", "description": "Lifecycle Hooks in Angular sind Funktionen, die zu bestimmten Zeiten im Lebenszyklus einer Komponente oder eines Direktivs aufgerufen werden." },
    { "title": "Wie erstellt man ein Dropdown-Menü in HTML?", "description": "Dropdown-Menüs in HTML werden mit dem <select> Tag und <option> Tags für jeden Menüpunkt erstellt." },
    { "title": "Was ist der Unterschied zwischen 'em' und 'rem' Einheiten in CSS?", "description": "'em' ist eine relative Einheit in CSS, die auf der Schriftgröße des Elternelements basiert, während 'rem' auf der Schriftgröße des Root-Elements basiert." },
    { "title": "Was sind Prototypen in JavaScript?", "description": "Prototypen in JavaScript sind Mechanismen, über die Objekte von anderen Objekten erben können. Jedes JavaScript-Objekt hat einen Link zu einem Prototyp-Objekt." },
    { "title": "Was ist Angular HttpClient?", "description": "HttpClient ist eine eingebaute Weise in Angular, um HTTP-Anfragen zu machen, die eine vereinfachte API für HTTP-Anfragen und verspricht das Problem der Verschachtelung von Callbacks zu lösen." },
    { "title": "Wie erstellt man ein Formular in HTML?", "description": "Formulare in HTML werden mit dem <form> Tag erstellt. Eingabeelemente wie <input>, <textarea>, <select> etc. werden verwendet, um Benutzereingaben zu sammeln." },
    { "title": "Wie erstellt man einen Hover-Effekt in CSS?", "description": "Hover-Effekte in CSS werden mit dem ':hover' Pseudoklassen-Selektor erstellt." },
    { "title": "Wie fügt man ein Element zu einem Array in JavaScript hinzu?", "description": "Ein Element kann zu einem Array in JavaScript mit der 'push'-Methode hinzugefügt werden." },
    { "title": "Was sind Angular Dekoratoren?", "description": "Dekoratoren in Angular sind spezielle Funktionen, die Metadaten zu Klassen, Methoden, Eigenschaften oder Parametern hinzufügen." },
    { "title": "Was sind die Unterschiede zwischen HTML und XHTML?", "description": "XHTML ist strenger und weniger fehlertolerant als HTML. XHTML ist HTML als XML definiert und muss gut geformt sein." },
    { "title": "Was ist CSS-Spezifität?", "description": "CSS-Spezifität ist ein Gewicht, das auf CSS-Selektoren angewendet wird, um zu bestimmen, welcher Selektor in einem Konflikt Vorrang hat." },
    { "title": "Was sind Funktionen in JavaScript?", "description": "Funktionen in JavaScript sind wieder verwendbare Blöcke von Code, die eine oder mehrere Aktionen ausführen." },
    { "title": "Was ist Angular Data Binding?", "description": "Data Binding in Angular ist die automatische Synchronisation von Daten zwischen Modell und Ansichtskomponenten." },
  ];

  title: string = '';
  description: string = '';
  @Input() card: string | any;

  constructor(public dialog: MatDialog) {}
  
  ngOnInit(): void {}

  ngOnChanges(): void {
    if (this.card) {
      let cardNumber = +this.card.split('_')[1];
      this.title = this.cardAction[cardNumber - 1].title;
      this.description = this.cardAction[cardNumber - 1].description;
    }
  }

  onPickCard(): void {
    this.dialog.open(CardDialogComponent, {
      data: { card: this.card, description: this.description },
    });
  }
}