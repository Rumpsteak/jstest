/* Det här är en kommentar */
// Det här är också en kommentar

var counter = 0

/*** Hjälpfunktioner ***/
var skriv = function(htmlText) {
	document.getElementById('testdiv').innerHTML += htmlText;
}

var testRensa = function() {
	counter = 0
	document.getElementById('testdiv').innerHTML = '';
}

/*** Funktioner att leka med ***/
var skrivHej = function() {
	skriv('<font color="#f00">HEJ!</font> <br/>')
}

var skrivNummer = function() {
	/* En for-loop */
	for (i = 0; i < 5; i++) {
		/* Börja med en tom sträng för varje varv i loopen */
		str = ''

		/* En if/else-sats för att ta reda på om talet är udda */
		if (counter % 2 == 1) {
			udda = true
		} else {
			udda = false
		}
		console.log('udda = ' + udda)

		str += 'Nummer '

		if (udda == true) {
			str += "<b>"
		}

		str += counter + '<br/>'

		if (udda == true) {
			str += "</b>"
		}

		counter++

		skriv(str)
	}
}

/*** Den här funktionen anropas när du trycker på "Kör" ***/
var testFunktion = function() {
	console.log('Hej konsollen!')

	skrivHej();
	skrivNummer();
}

var addComment = function() {
	namn = document.getElementById('commentName').value
	kommentar = document.getElementById('commentComment').value

	commentHtml = '<b>' + namn + ':</b> ' + kommentar + '<br/>'
	document.getElementById('commentdiv').innerHTML += commentHtml

	document.getElementById('commentName').value = ''
	document.getElementById('commentComment').value = ''
}
