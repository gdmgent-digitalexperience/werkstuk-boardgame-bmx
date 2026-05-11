document.addEventListener('DOMContentLoaded', function() {
    const opdrachten = [
        "Laat iemand het woord 'Gecko' zeggen.",
        "Laat iemand het woord 'Schildpad' zeggen.",
        "Laat iemand het woord 'Slang' zeggen.",
        "Laat iemand het woord 'Krokodil' zeggen.",
        "Laat iemand het woord 'Kameleon' zeggen.",
        "Laat iemand het woord 'Hagedis' zeggen.",
        "Spreek elke s sissend uit.",
        "Rol je tong op als een lizard.",
        "Kwaak als een kikker",
        "Doe alsof je een vlieg vangt met je tong",
        "Fluister in 'oude slangentaal' (verzin zelf woorden)",
        "Kijk iemand 30 seconden lang niet-knipperend aan, zoals een hagedis.",
        "Houd je lichaam 30 seconden volledig stil, alsof je opgaat in je omgeving.",
        "Maak een sissend geluid telkens wanneer iemand je naam zegt.",
        "Beweeg alleen wanneer niemand naar je kijkt (zoals een schuwe hagedis)",
        "Bewaak een object alsof het je nest is, laat niemand het aanraken (zonder het te verleggen)",
        "Laat iemand stoppen met praten door alleen maar naar hen te staren.",
        "Fluister een waarschuwing alsof je een oude reptielenwachter bent.",
        "Doe alsof je opwarmt in de zon: strek je langzaam uit.",
        "Maak een zacht krassend geluid alsof je over rotsen kruipt.",
        "'Markeer' je territorium door subtiel je hand op een tegel leggen en te blijven bewaken.",
        "Kies een plek als je schuilplaats en keer er steeds naar terug.",
        "Beweeg enkel verder weg van andere spelers op het bord.",
        "Maak een kort, plots geluid om iemand te laten schrikken, en ga dan weer stil.",
        "Reageer overdreven traag, alsof je lichaam koud en loom is.",
        "Beweeg je hoofd schokkerig zoals een hagedis die iets spot.",
        "Doe alsof je ogen lichtgevoelig zijn.",
        "Kopieer iemand zijn gedrag zonder te praten.",
        "Verstop een token van een tegenspeler alsof het een ei is.",
        "Staar in de verte alsof je iets ziet wat anderen niet zien.",
        "Moeras is jouw schuilplaats, beweeg enkel daar naartoe.",
        "Woestijn is jouw schuilplaats, beweeg enkel daar naartoe.",
        "Grassteppe is jouw schuilplaats, beweeg enkel daar naartoe.",
        "Berggebied is jouw schuilplaats, beweeg enkel daar naartoe.",
        "Watergebied is jouw schuilplaats, beweeg enkel daar naartoe.",
        "Regenwoud is jouw schuilplaats, beweeg enkel daar naartoe.",
        "Kijk net langs iemand heen alsof je door hen kijkt.",
        "Reageer op iemand nét te laat, alsof je hersenen trager werken.",
        "Doe alsof je iets 'ruikt' dat anderen niet kunnen waarnemen.",
        "Hou je armen dicht tegen je lichaam alsof je geen ledematen hebt.",
        "Trek je plots volledig samen.",
        "Beweeg alleen je ogen terwijl de rest van je lichaam stil blijft.",
        "Kantel je hoofd langzaam alsof je iets analyseert.",
        "Ga naar verschillende land types in de volgende rondes.",
        "Leg subtiel 1 van jouw tokens bij een tegenspeler.",
        "Beweeg 30 seconden lang in slow motion.",
        "Verander plots volledig van 'persoonlijkheid' (andere reptielensoort vibe).",
        "Laat je armen 'levenloos' hangen terwijl de rest beweegt.",
        "Beweeg in omgekeerde richting van je vorige beurt.",
        "Moeras is gevarengebied, vermijd dit ten alle koste.",
        "Woestijn is gevarengebied, vermijd dit ten alle koste.",
        "Grassteppe is gevarengebied, vermijd dit ten alle koste.",
        "Berggebied is gevarengebied, vermijd dit ten alle koste.",
        "Watergebied is gevarengebied, vermijd dit ten alle koste.",
        "Regenwoud is gevarengebied, vermijd dit ten alle koste.",
        "Beweeg enkel in rechte lijnen (geen gebroken paden).",
        "Blijf dicht bij randen of hoeken van het bord alsof dat veiliger is.",
        "Doe alsof je lichaam niet goed werkt zonder warmte.",
        "Focus je op 1 object in de ruimte en kijk hier 30 seconden onafgebroken naar.",
        "Ga elke ronde dichter naar een tegenspeler alsof het een prooi is.",
        "Negeer deze ronde één specifieke speler volledig, alsof deze een gevaar vormt.",
        "Speel je beurt extra snel zoals een slang.",
        "Kies een speler die jij deze ronde 'observeert' (volg hun acties extra).",
        "Geef een vage hint over je volgende zetten (maar niet duidelijk).",
        "Eindig je beurt op een plek waar je een vorige beurt was geweest.",
        "Neem een korte pauze van 5 seconden vóór je zet (alsof je de omgeving 'test').",
        "Kijk enkel naar het bord tijdens je beurt, niet naar andere spelers (lage oogfocus).",
        "Eindig je beurt op een plek waar je nog niet bent geweest.",
        "Herhaal dezelfde soort actie als je vorige beurt.",
        "Blijf de volgende 3 rondes binnen 10 tegels afstand van de tegel waar je nu staat.",
        "Beweeg in een zig-zag beweging als een slang over het bord.",
        "Klaag over hoe je aan het vervellen bent."
    ];

    const events = [
        "Door uitdroging verliest je iedereen zijn moerasgebieden.",
        "Door hevige zandstormen verliest iedereen zijn woestijngebieden",
        "Door aardbevingen verliest iedereen zijn berglandschappen",
        "Door massale houtkap verliest iedereen zijn regenwoud gebieden",
        "Door uitdroging verliest iedereen zijn watergebieden",
        "Er zit een addertje onder het gras, iedereen verliest zijn grassteppe gebieden",
        "Geef 1 landschap af aan de speler met het minst aantal gronden",
        "Duid 1 persoon aan die jou een landschap moet geven. Deze persoon mag zelf kiezen welke grond hij kiest",
        "Vrijstelling voor 1 van jouw huidige opdrachten, Het landschap waaraan deze gekoppeld is wordt van jou. Als je nog geen opdrachten hebt mag dit event genegeerd worden.",
        "Kies één speler die zijn volgende beurt moet overslaan",
        "Kies 1 niet geclaimd landschap die aan je huidige tegel aangrenst die vanaf nu van jou. Zijn alle omringde landschappen geclaimd, dan mag je dit event negeren",
        "Daag 1 speler uit, gooi om de beurt met de dobbelsteen. Wie het hoogst gooit verdient een landschap naar keuze van de verliezer."
    ];

    const opdrachtButton = document.getElementById('opdrachtButton');
    const eventButton = document.getElementById('eventButton');
    const nextButton = document.getElementById('nextButton');
    const messageElement = document.getElementById('message');
    const contentElement = document.getElementById('content');

    let usedOpdrachten = new Set();
    let usedEvents = new Set();

    function showStartScreen() {
        opdrachtButton.classList.remove('hidden');
        eventButton.classList.remove('hidden');
        nextButton.classList.add('hidden');
        messageElement.textContent = 'Kies een optie:';
        contentElement.textContent = '';
    }

    function showContent(item) {
        opdrachtButton.classList.add('hidden');
        eventButton.classList.add('hidden');
        nextButton.classList.remove('hidden');
        contentElement.textContent = item;
    }

    opdrachtButton.addEventListener('click', function() {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * opdrachten.length);
        } while (usedOpdrachten.has(randomIndex) && usedOpdrachten.size < opdrachten.length);
        
        usedOpdrachten.add(randomIndex);
        messageElement.textContent = 'Opdracht:';
        showContent(opdrachten[randomIndex]);
    });

    eventButton.addEventListener('click', function() {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * events.length);
        } while (usedEvents.has(randomIndex) && usedEvents.size < events.length);
        
        usedEvents.add(randomIndex);
        messageElement.textContent = 'Event:';
        showContent(events[randomIndex]);
    });

    nextButton.addEventListener('click', function() {
        showStartScreen();
    });

    showStartScreen();
});