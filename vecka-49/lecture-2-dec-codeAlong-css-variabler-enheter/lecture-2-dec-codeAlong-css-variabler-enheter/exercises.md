Övningar för CSS-Variabler och Enheter

Övning 1: Skapa ett färgtema med CSS-variabler

Uppgift:
Skapa två färgteman (ljust och mörkt) genom att använda CSS-variabler.
Implementera en knapp i HTML som låter användaren växla mellan teman.

Instruktioner:

1.  Deklarera variabler för det ljusa temat i :root:

2.  Skapa en klass för det mörka temat:

3.  Använd variablerna i dina CSS-regler:

4.  Lägg till en knapp i din HTML för att växla tema:

5.Lägg till JavaScript för att hantera temaväxling (valfritt):

Denna övning visar hur kraftfulla CSS-variabler kan vara när det gäller att hantera teman och stilar på ett dynamiskt sätt. Genom att ändra variablerna kan vi enkelt anpassa vår webbplats utseende.

---

Övning 2: Använda olika enheter för responsiv design

Uppgift:
Skapa en layout där elementens storlek ändras baserat på skärmens storlek genom att använda relativa enheter.
Instruktioner:

1.Ställ in basfontstorlek med vw:

2.

3. Använd rem för att ange storlekar:

4. Lägg till media queries för att begränsa fontstorlek:

Genom att använda viewport-enheter kan vi skapa en layout som anpassar sig efter skärmens storlek. Dock kan det vara bra att använda media queries för att sätta gränser och undvika att texten blir för liten eller för stor på extremt små eller stora skärmar.

---

---

---

(
Detta kommer flyttas till tisdagen den 3 december:
Praktisk Övning: Implementera ett Google Font i en HTML/CSS-fil

Mål: Lära sig hur man inkluderar och använder ett typsnitt från Google Fonts i ett projekt.

Steg-för-steg:
Besök Google Fonts:

Gå till Google Fonts.

Välj ett typsnitt:

Sök efter och välj typsnittet "Roboto".

Välj stilar:

Under "Styles" välj "Regular 400" och "Bold 700".

Generera länken:
Klicka på "View selected families" längst ned. Kopiera <link>-taggen som visas under "Embed". Det ska se ut ungefär så här:
{
/_ <link rel="stylesheet" href="https:fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"> _/
}

Inkludera typsnittet i din HTML-fil:

Klistra in <link>-taggen i <head>-sektionen av din HTML-fil, precis ovanför länken till din CSS-fil:

Använd typsnittet i din CSS:

Uppdatera dina CSS-regler för att använda "Roboto":
Alternativt kan du direkt sätta font-family i dina selektorer:

Spara och testa:
Spara dina filer och öppna HTML-filen i din webbläsare för att se det nya typsnittet i aktion.

---

---

---

Typografiövning

Mål: Förstå hur man använder olika typografiska stilar i CSS för att förbättra läsbarheten och utseendet på en webbplats.

Instruktioner:

HTML-struktur: se typografi.html

CSS-stilar: se typografi.css

Experimentera med typografi:

Byt typsnitt:
Prova att ändra font-family till olika webbsäkra typsnitt eller implementera andra Google Fonts.

Justera line-height och letter-spacing:
Se hur förändringar påverkar läsbarheten.

Använd CSS-variabler för typografi:
Deklarera variabler för fontstorlekar och använd dem i dina stilar.

Denna övning ger er möjlighet att praktisera och experimentera med olika typografiska inställningar. Genom att förstå hur olika egenskaper påverkar textens utseende kan ni skapa mer attraktiva och lättlästa webbplatser.

)
