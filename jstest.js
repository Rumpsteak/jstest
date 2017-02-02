/* Det här är en kommentar */
// Det här är också en kommentar

/* Globala variabler */
var counter = 0

/***********************/
/*** Hjälpfunktioner ***/
/***********************/
var skriv = function(htmlText) {
	document.getElementById('testdiv').innerHTML += htmlText;
}

var testRensa = function() {
	counter = 0
	document.getElementById('testdiv').innerHTML = '';
}

/*******************************/
/*** Funktioner att leka med ***/
/*******************************/
var skrivHej = function() {
	skriv('<font color="#f00">HEJ!</font> <br/>')
}


var skrivNummer = function() {
	antal_loopar = 5

	/* En klassisk for-loop */
	for (i = 0; i < antal_loopar; i++) {
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
	//multiplikationsTabell();
}


var addComment = function() {
	namn = document.getElementById('commentName').value
	kommentar = document.getElementById('commentComment').value

	commentHtml = '<b>' + namn + ':</b> ' + kommentar + '<br/>'
	document.getElementById('commentdiv').innerHTML += commentHtml

	document.getElementById('commentName').value = ''
	document.getElementById('commentComment').value = ''
}


var multiplikationsTabell = function() {
	width = parseInt(document.getElementById('multWidth').value)
	height = parseInt(document.getElementById('multHeight').value)

	str = ''
	str += '<h3>Multiplikationstabell ' + width + 'x' + height + '</h3>'
	str += '<table border="1px">'
	
	for (y = 1; y < height+1; y++) {
		str += '<tr>'
		for (x = 1; x < width+1; x++) {
			var produkt = x * y

			/* Beräkna om vi ska ha en speciell färg */
			if (x == y) {
				klass = 'kvadratcell'
			} else if (x == 1 || y == 1) {
				klass = 'kantcell'
			} else {
				klass = 'standardcell'
			}

			str += '<td class="' + klass + '">'
			str += produkt
			str += '</td>'
		}
		str += '</tr>'
	}
	str += '</table>'
	skriv(str)
}

