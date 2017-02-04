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
function testaKonsollen() {
	console.log('Hej konsollen!')

	console.log('Ett nummer: ' + 42)

	console.log('Ett beräkningsresultat: ' + (42/2 + 9) )

	console.log('Visa flera siffror: ' + 1 + ', ' + 2 + ', ' + 3 + ' SLUT')

	console.log('Ett annat sätt att göra samma sak: %d, %d, %d, %s',
		 1, 2, 3, 'SLUT')

	console.log('Flera rader: \nRad 1 \nRad 2 \nRad 3')
}

function testaVariabler() {
	/* Skapa variabeln "nummer" och tilldela den ett värde */
	var nummer = 1
	console.log(nummer)

	/* Sätt om variabeln */
	nummer = 42
	console.log(nummer)

	/* En liten beräkning  */
	nummer = 19 + 183 / 15
	console.log(nummer)

	/* Använd flera variabler tillsammans */
	var a = 5
	var b = 7

	var c = a * b
	console.log('c = %d', c)

	/* Plussa på en variabel */
	c = c + 1
	console.log('Plussat: ' + c)

	/* En kortare form av samma sak */
	c += 1 
	console.log('Plussat: ' + c)

	/* Ännu kortare */
	c++
	console.log('Plussat: ' + c)

	c -= 1 
	console.log('Dra ifrån: ' + c)

	/* Upprepa beräkning */
	c = 0
	c = c + (a*b)
	console.log('c = %d', c)

	c = c + (a*b)
	console.log('c = %d', c)

	c = c + (a*b)
	console.log('c = %d', c)


}

function testaString() {
	var str = 'Det här är en textsträng'
	console.log(str)

	str = str + " och såhär kan man förlänga den"
	console.log(str)

	var a = 17, b = 89
	str = "Man kan skriva in siffror i strängen såhär: " + a + ", " + b
	console.log(str)

	var str1 = 'Man kan '
	var str2 = 'sätta ihop '
	var str3 = 'strängar såhär'
	var str4 = str1 + str2 + str3
	console.log(str4)
}

function testaVillkor(villkor) {
	if (villkor) {
		console.log('Villkoret är sant!')
	} else {
		console.log('Villkoret är falskt!')
	}
}

function testaIf() {
	var x = 17

	if (x > 10) {
		console.log('Ja, 17 är mer än 10!')
	}

	if (x > 20) {
		/* (Den här koden kommer inte köras alls) */
		console.log('Ja, 17 är mer än 20!')
	}

	if (x > 20) {
		console.log('Ja, 17 är mer än 20!')
	} else if (x > 15 ) {
		console.log('Ja, 17 är mer än 15!')
	} else {
		console.log('Nej, 17 är varken mer än 15 eller 20!')
	}
}

function testaLoopar() {
	/* Ofta vill man repetera kod många gånger. Exempelvis skriva ut en sekvens av nummer: */
	var i = 0
	i = i + 1
	console.log(i)
	i = i + 1
	console.log(i)
	i = i + 1
	console.log(i)
	i = i + 1
	console.log(i)
	i = i + 1
	console.log(i)

	/* En while-loop kör så länge ("while") ett villkor är uppfyllt */
	var j = 0
	while (j < 5) {
		j = j + 1
		console.log("Loop " + j)
	}

	/* Eftersom man ofta vill hålla räkningen på vilket varv man är på finns ett kortare
	    sätt att skriva loopen ovan, kallat en "for"-loop */

	/*   vvvvvvvvv Startvärde */
	/*              vvvvv Villkor för att fortsätta */
	/*                     vvv Vad ska göras med variabeln varje varv */
	for (var k = 0; k < 5; k++) {
		console.log("Loop " + k)
	}
}

function testaFunktioner() {

	/* En enkel funktion */
	function skrivHej() {
		console.log('Hej!')
		console.log('Hejdå!')
	}

	/* Kör funktionen */
	skrivHej()


	/* En funktion med en parameter */
	console.log('\n\n')
	function skrivText(parameter) {
		console.log("Nu kör vi!")
		console.log(parameter)
		console.log("Färdigt!")
	}

	skrivText('Hej hopp!')
	skrivText('Testar igen...')

	/* En funktion med flera parametrar */
	console.log('\n\n')
	function skrivTexter(parameter1, parameter2) {
		console.log("Nu kör vi!")
		console.log(parameter1)
		console.log(parameter2)
		console.log("Färdigt!")
	}

	skrivTexter('Det här är den första texten...', 'och det här är den andra!')

	/* En funktion som returnerar ett värde */
	console.log('\n\n')
	function multiplicera(a, b) {
		return a * b
	}

	console.log(multiplicera(9, 5))

	// Nästlade funktioner
	console.log(multiplicera(3, 7))
	console.log(multiplicera(5, (multiplicera(5, 2))))
	console.log(multiplicera(10, multiplicera(2, (multiplicera(4, 5)))))

	// Kombinera funktioner med variabler och loopar
	function skrivResultat(resultat) {
		console.log('Resultatet är ' + resultat)
	}

	var total = 1
	for (i = 0; i < 11; i++) {
		skrivResultat(total)
		total = multiplicera(total, 2)
	}

	// Kombinera koncepten
	function skrivTabell(vilkenTabell, antal) {
		str = ''
		for (i = 0; i < antal; i++) {
			str += i + '*' + vilkenTabell + ' = ' + multiplicera(i, vilkenTabell) + ' \t';
		}
		console.log(str)
	}

	function skrivMultiplikationstabeller(start, antal_tabeller, antal_per_tabell) {
		for (j = 0; j < antal_tabeller; j++) {
			skrivTabell(start + j, antal_per_tabell)
		}
	}

	console.log('1:ans till 5:ans:')
	skrivMultiplikationstabeller(1, 5, 10)
	console.log('Första halvan av 10:ans till 12:ans')
	skrivMultiplikationstabeller(10, 3, 5)
}

function sidStart() {
	//testaKonsollen();
	//testaVariabler();
	//testaString();
	//testaIf();
	//testaLoopar();
	testaFunktioner();
}

/*** Den här funktionen anropas när du trycker på "Kör" ***/
var testRun = function() {
	//skrivHej();
	//skrivNummer();
	//multiplikationsTabell();
}

var skrivHej = function() {
	skriv('<font color="#f00">HEJ!</font> <br/>')
}


function isOdd (arg) {
	return ((arg % 2) == 1)
}

var skrivNummer = function() {
	antal_loopar = 5

	/* En klassisk for-loop */
	for (i = 0; i < antal_loopar; i++) {
		/* Börja med en tom sträng för varje varv i loopen */
		str = ''

		/* En if/else-sats för att ta reda på om talet är udda */
		if (isOdd(i)) {
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

