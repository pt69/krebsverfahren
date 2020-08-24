var eingabe = { Eingabetext: "DAS VERSCHLUESSELN MIT DEM KREBS IST NICHT SEHR SICHER" };
var krebstext = '';
var settings;

function setup() {
  createCanvas(700,300);
  settings = QuickSettings.create(20, 20, "Krebsverfahren");
  settings.setWidth(width-30);
  settings.bindText("Eingabetext", "DAS VERSCHLUESSELN MIT DEM KREBS IST NICHT SEHR SICHER", eingabe);
  settings.addTextArea("Krebstext", krebstext);
  settings.addButton("Text verschluesseln", function() { textVerschluesseln(); });	
}

function textVerschluesseln() {
    krebstext = '';
    for (var j = 0; j < eingabe.Eingabetext.length; j++) {
      var krebsindex = eingabe.Eingabetext.length - 1 - j;
      krebstext = krebstext + eingabe.Eingabetext[krebsindex];        
    }
  settings.setValue("Krebstext", krebstext);
}