FAB-Boilerplate
===============

Richtlijnen Clientside Techniek

Dit document bevat richtlijnen voor web applicaties (front-end).
Het doel is het schrijven van consistente code. Hiermee begrijpen we sneller elkaars code. Zo kunnen we makkelijker samen werken in projecten, deze beter overdraagbaar te maken en sneller werken. Daar worden we allemaal blij van!

De richtlijnen zijn onderverdeeld per techniek: HTML, CSS en Javascript. Daarnaast bevat het nog een algemeen deel.

Algemeen
Opmaak, presentatie en gedrag scheiden. 
Gebruik geen inline css en javascript in HTML en geen css in javascript.
Om grote open source projecten begrijpelijk te houden heeft Google een heel complete set styleguides opgesteld: 

http://google-styleguide.googlecode.com. 

Wij gaan gebruik maken van de styleguides voor HTML/CSS.

HTML/CSS: http://google-styleguide.googlecode.com/svn/trunk/htmlcssguide.xml

Javascript: http://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml

Dit zijn zeer complete richtlijnen met heldere voorbeelden van hoe dingen wel en niet moeten.
In principe houden we deze richtlijnen aan tenzij je een goede reden hebt om het niet te doen.

TODO: Check of er iets van validator voor styling de html en css is

Om te checken welke moderne features door de browser ondersteund worden gebruiken we Modernizr. In de boilerplate wordt een complete developers-versie geladen. Deze versie bevat alle opties maar is relatief zwaar. Bij de oplevering van een project dient deze vervangen te worden door een op maat gemaakte en daardoor lichtere modernizr.js. 
Die kun je hier genereren: http://modernizr.com/download/.

Bestandsnamen
Bestandsnamen worden met kleine letters geschreven en woorden worden gescheiden met een ‘-’. Niet met een underscore of camelCased. Zorg voor beschrijvende namen zodat meteen duidelijk is wat het bestand inhoudt.


Code conventies
Worden per techniek behandeld. Wat wel voor alle technieken geldt is het gebruik van tabs voor indenting, en het aantal spaties in een tab. Hier kunnen we het heel lang over hebben maar laten we er nu voor kiezen 4 spaties per tab voor indenting te gebruiken.


HTML

Structuur
In gist staat een codesnippet van het basistemplate voor een webpagina zoals die ook in github staat, https://gist.github.com/4500578.

Toelichting:
Plaats de link naar de externe CSS-bestanden in  de HEAD.
Plaats zoveel mogelijk Javascript  achteraan in de code, dat is voor de /body. Dit is omdat javascript niet parallel geladen kan worden, hier wordt dus op gewacht.
Is de javascript direct nodig, dus vóór de html, laadt het dan in elk geval na de css.



Best practices
* Gebruik de html-elementen waar ze voor bedoeld zijn. 
* Dus P om paragrafen van elkaar te onderscheiden en geen BR.
* Gebruik DL en BLOCKQUOTE waar van toepassing.
* Plaats items in een lijst-vorm altijd in een UL, OL of DL (zeker ook navigatie!), nooit in een set van DIV’s of P’s.
* Voorzie elk input-veld van een label in combinatie met het for-attribuut (en cursor: pointer;)
* Groepeer input-velden in een fieldset
* Plaats een comment bij het sluiten van (container-)div’s om de code helder te houden.
* Gebruik alt-tags voor plaatjes
* Gebruik title-tags voor links waar nodig



Voorkom Compatibility Mode

IE wil nog wel een spontaan in Compatibility Mode schieten waardoor een webpagina er niet goed uitziet. Voorkom dit door de volgende regel in de head te plaatsen:

    <meta http-equiv="X-UA-Compatible" content="IE=edge">    

Een overzicht met nuttige meta-tags:
http://www.html-5.com/metatags/index.html#viewport-meta-tag


HTML5 tags
Met de komst van HTML5 zijn er nieuwe tags bijgekomen. Voor een overzicht en hoe ze gebruikt moeten worden zie 

http://www.w3schools.com/tags/default.asp.




CSS

CSS wordt altijd als een extern document geladen. We doen niet aan inline styles. 
Elk CSS document moet een header bevatten. Hierin staan de gegevens van de maker, een overzicht van de groeperingen binnen het document en een overzicht van de gebruikte standaardwaarden van bijvoorbeeld kleuren en fontgroottes.
De eerder genoemde richtlijnen van Google (http://google-styleguide.googlecode.com/svn/trunk/htmlcssguide.xml) zijn bedoeld voor de CSS. 
Bij Fabrique werken we met Sass en Compass. Wat in de richtlijnen voor CSS staat geldt ook voor hoe we moeten werken in Sass.
TODO: Bij Compass net ff anders

Sections


Om de css flexibel te houden moeten elementen zo gestijld worden dat ze overal op een site geplaatst kunnen worden, onafhankelijke css.
Zorg ervoor dat:
* Een blok of element een unieke naam heeft
* Er geen html-elementen in de CSS-selectoren ( .menu.li ) gebruikt worden (zijn context-afhankelijk)
* Voorkom het nesten van meerdere blokken in CSS
….
Naamgeving

Bepaal de classnaam of het ID van een (blok-)element op basis van wat het element is of doet, niet op hoe het er uit ziet. Mocht de stijl dan wijzigen is de naam nog steeds logisch.
Bijvoorbeeld:
    <ul class="menu">
     …
    </ul>

De naam van een element binnen een blok-element is een samenvoeging van de blok-naam en de element-naam, om niet te diep te hoeven nesten in de css.
Dus:
        
    <ul class="menu">
     <li class=”menu-item”>
       …
     </li>
     <li class=”menu-item”>
       …
     </li>
    </ul>



Best Practices


* Gebruik een global normalize. Dit haalt de verschillen tussen de verschillende browsers weg en helpt voor een meer consistente cross-browser presentatie.
* Maak gebruik van sprites voor alle rollover- en active-states. Dit voorkomt een flikkering en vermindert het aantal HTTP-requests.
* Gebruik zo min mogelijk browser-specifieke stijlen. Waar nodig gebruik een browser-specifiek css document.
* Gebruik waar mogelijk ID ipv class. Beter voor de performance.
* Gebruik zo min mogelijk ‘dure’ selectoren. Vermijd bijvoorbeeld de * (wildcard) en kwalificaties van ID’s: “div#ID”. Beter voor de performance.
* Vermijdt het gebruik van ‘!important’. Slecht voor onderhoudbaarheid.
* Valideer de CSS (http://validator.w3.org/)



@font-face
Voor het tonen van custom fonts zijn verschillende technieken. Wij gebruiken @font-face. Dit is onderdeel van W3C’s CSS Font Module. Dat is goed voor browser-ondersteuning en populariteit. Om het in de bekende browsers te laten werken moet het font in meerdere formaten aangeleverd worden en de bron erbij vermeld worden.
Een goed cross-browser voorbeeld:

    @font-face {
    font-family: 'MyFontFamily';
    src: url('myfont-webfont.eot');                   /* IE9 Compat Modes */
    src: url('myfont-webfont.eot?iefix') format('eot'),        /* IE6-IE8 */
    url('myfont-webfont.woff') format('woff'),         /* Modern Browsers */
    url('myfont-webfont.ttf') format('truetype'), /* Safari, Android, iOS */
    url('myfont-webfont.svg#svgFontName') format('svg');    /* Legacy iOS */
    font-weight: <font-weight>;
    font-style: <font-style>;
    // etc.
    }
Cross-Browser Compatibility
Safari, IE 6-9, IE 9 Compatibility Modes, Firefox, Chrome, iOS, Android, Opera






JAVASCRIPT
Best practices

* Ook javascript staat zoveel mogelijk in externe bestanden.
* Hou het leesbaar. Zorg voor logische namen voor functies en variabelen, niet zo kort mogelijk maar zo duidelijk mogelijk. Voeg witregels tussen blokken code die niet direct met elkaar te maken hebben.
* Gebruik comments goed, niet te weinig maar ook niet te veel, dan is er iets mis met je code.
* Plaats constanten en configuratie-variabelen (zoals lengte van animaties) bovenin de code.
* Schrijf functies zo generiek mogelijk. Gebruik parameters en return-values. Zo kan de functie hergebruikt worden.
* Gebruik zo min mogelijk globale variabelen, denk aan de scope.


Code conventies
Javascript variabelen worden camelCased geschreven. De enige uitzondering hierop is de constructorfunctie, deze begint met een hoofdletter.
Class-namen en ID’s worden met kleine letters en scheidingsstreepjes geschreven, net als in de CSS, waar dezelfde namen gebruikt worden.

Iets over het laden van bestanden en optimalisatie. Bestanden samenvoegen in plugins.js en engine.js?


DEBUGGING
Handige tools:
* Firefox: Firebug, Page Speed, YSlow
* Safari: Web Inspector
* Google Chrome: Developer Tools
* Opera: Dragonfly
* Internet Explorer 6-7: Developer Toolbar
* Internet Explorer 8-10: Developer Tools
* http://www.sublimetext.com/
* http://tools.pingdom.com/fpt/
* http://www.crockford.com/javascript/jsmin.html
* http://www.jslint.com/
* https://github.com/xdissent/ievms
* en... ehm.. andere dingen.
