##### Podstawy JSa - odcinek nr 1 #####

console.log('no to chyba wiadomo co robi hehe')

ale mamy również
console.warn('Uwaga!') /zwraca uwage w konsoli, na zołto
console.warn('Bład') /zwraca bład na czerwono
console.dir(someBtn) /gdy chcemy poznac szczegóły jakiegoś obiektu

/Grupowanie wielu tekstóww (console.log etc) w konsoli w jedną grupę
console.group('Nazwa grupy');
console.log('Ala ma kota');
console.log('Kot ma Alę');
console.groupEnd(); /kończenie grupy

console.groupCollapsed(); /zrobi to samo co w.w lecz bedzie zwinieta w konsoli


##### TYPY DANYCH / DATA TYPES #####
parseInt(str, system_liczbowy); -> console.log( parseInt("24px", 10)); /parsuje tekst na liczbę całkowitą
parseFloat(str);  /parsuje tekst na liczbę, może zawierać litery
Number(str);  /konwertuje tekst na liczbę


##### ZMIENNE / VARIABLES #####
/hoisting zmiennych lub całego kodu w JS, czyli wyrzocanie deklaracji zmiennej var na samą góre, a dopiero poźniej przypisywanie jej wartości. Dlaczego zmieniono var na inne wyraźenia?
	- var można nadpisać kazdym innym podaniem nazwy funkcji, podobnie jak let (ktore też jest zmienną) oraz const(ktore oznacza stałą, czyli nie możemy jej w prosty sposob nadpisać)
	- problem zasięgu(scope) lokalnego oraz globalnego -> podana funkcja dwukrotnie zwroci 50, zamiast 30 i 50
					function testVar() {
				    var a = 30;
				    if (true) {
				        var a = 50;
				        console.log(a); /50
				    }
				    console.log(a); /50
					}
					testVar(); /50 50

	Zmienne zadeklarowane za pomocą słowa var mają zasięg nie blokowy a funkcyjny. Oznacza to, że ich zasięg definiowany jest przez klamry najbliższej funkcji. W powyższym przykładzie na początku funkcji deklarujemy zmienną a, a w instrukcji if nie deklarujemy nowej zmiennej, a zmieniamy tą samą zmienną, bo jej zasięg określa funkcja testVar.

	let -> zmienna zastępujaca var, nie dziala wraz z hoistingiem, co oznacza ze trzeba ją zadeklarowac przed jej wywyołaniem, np.:
		let myVar = 23;
		console.log(myVar);

		Zmienna działa także podobnie jak const w block scope - zakresie blokowym {}, a nie funkcyjnym!

	const -> zmienna stała, waźne zeby pamietac, że chodzi tutaj o brak możliwosci przypisywania stałej nowej wartości(nadpisywania), a nie zmiany składowej, czyli dodania elementu dla tablicy, np.:
		const name = "Barnej"
		name = "Janusz" /błąd

		const tab = [1,2,3];
		tab[3] = 4
	 	-> tab = [1,2,3,4] /i to jest okay


##### MATH FUNCKJE /Math. #####
	 src: http://kursjs.pl/kurs/super-podstawy/math.php


##### STRING - TYPY REFERENCYJNE/PROSTE #####
tworzenie typu referencyjnego za pomocą let,const,var odbywa sie normalnie poprzez podpisanie: let text1 = "abc" -> stworzy typ referencyjny
 let text1 = new String("abc") -> stworzy obiekt o typie String, czyli nie bedzie typem referencyjnym właściwie, lecz jedynie pozornie

 //deklaracja za pomocą literału
const text1 = "abc";
const text2 = "abc";
console.log(text1 == text2); //true

//deklaracja za pomocą konstruktora
const text1 = new String("abc");
const text2 = new String("abc");
console.log(text1 === text2); //false, ponieważ porównujemy 2 obiekty, a nie wartości
console.log(typeof text1); //object
/ RÓŻNICA

const text = "Ala ma kota, a kot ma dałna";

charAt() -> metoda charAt służy do pobrania znaku na danej pozycji. Zasady są te same co przy tablicach. Pierwsza litera ma index 0, a ostatnia text.length-1 (bo liczymy od 0 pozycji), np.:  text.charAt(0) -> "A"

toUpperCase() -> console.log(text.toUpperCase()); //ALA MA KOTA
toLowerCase() -> console.log(text.toLowerCase()); //ala ma kota

/Połączenie 2 metod zeby powiekszyc pierwszą litere imienia
const text = "marcin";
console.log( text.charAt(0).toUpperCase() + text.slice(1) ); //Marcin

/Metoda indexOf służy do podawania pozycji szukanego fragmentu w tekście. Jeżeli zwróconą wartością jest -1, to szukanego tekstu nie ma
indexOf() -> "Ala ma kota".indexOf("kot"); -> 7

slice() -> funkcja wycina dane wyrazenie od (start, stop), czyli: console.log(url.slice(url.lastIndexOf("/")+1, url.lastIndexOf(".")) );     -> przykladowaNazwaPliku

substr() -> Metoda substr(start, dlugosc) służy do pobierania kawałka tekstu. Pierwszym jej parametrem jest początek pobieranego kawałka tekstu, a drugi opcjonalny wskazuje długość pobieranego tekstu. Jeżeli drugi parametr nie zostanie podany, wówczas pobierany kawałek będzie pobierany do końca tekstu. np -> console.log(text.substr(0, 3)) /Ala


split() -> metoda dzieli tekst na czesc, (znak, długość) w wyniku zwraca tablicę. Miejsce podziału w parametrze znak.

replace() -> metoda replace(ciag_szukany, zamieniony) zamienia szukany kawałek tekstu na inny tekst. -> text.replace("Ala", "Ola"); const textChanged = text.replace(/Al/g,"Ol"); zamieni wszystkie 'Ale' na 'Ole', a nie tylko jedna jak wyzej

encodeURI() -> encodeURI ujednolicony identyfikator zasobów. encodeURI(text); /Ala%20ma%20kota%2C%20a%20kot%20ma%20Al%u0119..
decodeURI() -> dekodowanie funkcji encodeURI


##### OPERATOR WARUNKOWY - if #####
if (true) {
	do something
} else {
	do smoething else
}

const x = (wyrażenie) ? zwróć_jeżeli_wyrażenie_true : zwróć_jeżeli_wyrażenie_false -> skrócona wersja ifa
const number = (i > 0)? 'dodatnia' : 'ujemna';

switch -> Instrukcja switch jest kolejnym sposobem testowania warunków działającym na zasadzie przyrównania wyniku do podanych przypadków.
	
	switch (wyrażenie) {
    case przypadek1:
        //fragment wykonywany gdy rezultat wyrażenia jest równy rezultat1 - potrzebuje break;
        break;
    case przypadek2:
        //fragment wykonywany gdy rezultat wyrażenia jest równy rezultat2 - potrzebuje break;
        break;
    default:
        //fragment wykonywany gdy powyższe rezultaty nie są równe rezultatowi wyrażenia - nie potrzebuje break;
} ->
switch (number) {
    case 1: console.log('Numer rowny jest jeden');
        break;
    case 23: console.log('Numer rowny jest twentyfour');
        break;
    default:
        console.log('Nie wiem ile to sie równa');
}
/ Pobiera wartość(.value) z okna formularzu #formAge
const age = document.getElementById('formAge')
  numbAge = parseInt(age, 10);
    (numbAge >= 18 && !isNaN(ageNr))?console.log('you\'re mature, access submited'):console.log('access denied')


###### LOOP - PĘTLE #####
for (let i=0; i<10; i++){ kod/console.log('bede sie uczył js kurłaaaaa') } -> wykonuje kod i-ta liczbe razy;
	for (zainicjowanie licznika;  wyrażenie testujące koniec pętli;  zwiększenie/zmniejszenie licznika) {
    kod który zostanie wykonany pewną ilość razy
}

let i = 1;
while (i<=10) {kod/console.log('nic nie wiem'); i++;} ->  w pętli tego typu nie definiujemy ani początkowego licznika, ani nie definiujemy zmiany licznika. Musimy te rzeczy zrobić ręcznie;
while (wyrażenie-sprawdzające-zakończenie-pętli) {
    ...fragment kodu który będzie powtarzany...};

##PETLA W PETLI / LOOP IN DA LOOP BABY ##-> zwróci listę 10(0-9) logów ogolnych i 6(0-5) wewnetrznych w nich
for (let i=0; i<10; i++) {

    console.log('%c Główna pętla nr: ' + i, 'color:red');

    for (let y=0; y<6; y++) {
        console.log('%c Pętla wewnętrzna nr: ' + y, 'color:blue');
    }
}
/Bardzo ważne jest by pętle wewnętrzne miały inny licznik niż główna pętla. W przeciwnym razie praktycznie zawsze czeka mnie zawieszenie strony.

!!!!!!!!!!!!!!!!!\n = LF (Line Feed) / Used as a new line character in Unix/Mac OS X!!!!!!!!!!!!!!!!!!!!!!!!!!!

let str = "";
for (var i=0; i<6; i++) {
    for (var j=0; j<6; j++) {
        str += "*";
    }
    str += "\n";
}
console.log(str);

/WYNIK:
******
******
******
******


#### FUNKCJE - FUNCTION() #####
/wyrażenie funkcyjne -> funkcja anonimowa przypisana do konkretnej zmiennej
const functionName = function() {
	code/ console.log(;tutaj wpisujemy kod funkcji);
}

/fat arrow constructor -> krotka wersja 'function', dobre do programowania funkcyjnego, prostych i czystych wielu funkcji, oraz rozwiazuje problem z this;
const multi = (a,b,c) => {
	return a*b*c
}

const multi2 = (a,b,c) +> a*b*c;