# **Övning: Bygg din egen Bucket List**

## **Introduktion**
I den här övningen ska du skapa en interaktiv webbsida där användaren kan bygga sin egen Bucket List. Målet är att skapa en lista över saker användaren vill göra innan de dör – och låta dem interagera med listan genom att lägga till, ta bort och markera aktiviteter som avklarade.

Den här övningen kommer att täcka följande koncept som ni har lärt er under veckan:
- **Arrayer**: Hantera data (aktiviteter) i en array och använd metoder som `.push()` och `.splice()`.
- **Objekt**: Representera varje aktivitet som ett objekt med egenskaper som namn och status.
- **DOM-manipulation**: Dynamiskt skapa och modifiera HTML-element för att visa och uppdatera listan.
- **Event handling**: Hantera händelser som att lägga till en ny aktivitet, ta bort en aktivitet eller markera en som avklarad.

## **Mål**
Skapa en **Bucket List-app** där användaren kan:
1. Lägga till nya aktiviteter med en beskrivning och kategori (t.ex. "Resa till Japan", kategori: "Resor").
2. Visa aktiviteterna i en lista, grupperade efter kategori.
3. Markera aktiviteter som avklarade eller ta bort dem från listan.

---

## **Steg-för-steg**
#### Exempel på hur du tänka för att lösa uppgiften.
### **1. HTML-struktur**
Skapa en enkel HTML-fil med följande struktur:

```html
<!DOCTYPE html>
<html lang="sv">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bucket List</title>
  <style>
    body {
      font-family: Arial, sans-serif;
    }
    #bucketLists div {
      margin-bottom: 20px;
    }
    ul {
      list-style-type: none;
      padding: 0;
    }
    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 5px 0;
    }
    button {
      margin-left: 10px;
    }
  </style>
</head>
<body>
  <header>
    <h1>Min Bucket List</h1>
  </header>
  <main>
    <form id="bucketForm">
      <input type="text" id="activityName" placeholder="Vad vill du göra?" required />
      <select id="activityCategory">
        <option value="Resor">Resor</option>
        <option value="Äventyr">Äventyr</option>
        <option value="Lärande">Lärande</option>
        <option value="Hobby">Hobby</option>
      </select>
      <button type="submit">Lägg till</button>
    </form>
    <section id="bucketLists"></section>
  </main>
  <script src="script.js"></script>
</body>
</html>
```

### **2. JavaScript-logik**
Skapa en script.js-fil för att lägga till funktionalitet. Följande steg guidar dig igenom de viktigaste delarna.

* Starta med en tom array som håller alla aktiviteter
* Skapa en funktion som ritar upp listan dynamiskt i DOM
* Lägg till en eventlyssnare på formuläret för att lägga till nya aktiviteter
* Skapa en funktion som rensar din lista när sidan laddas om


## **Level-ups**

* **Sortera aktiviteter**: Lägg till en funktion som sorterar aktiviteter alfabetiskt inom varje kategori.
* **Spara data**: Använd localStorage för att spara och läsa in listan automatiskt.
* **Redigera aktiviteter**: Lägg till möjlighet att redigera en aktivitet.


## **Resultat**
När du är klar ska du ha en fullt fungerande Bucket List-app där användaren kan:

* Lägga till aktiviteter med en kategori.
* Markera aktiviteter som klara.
* Ta bort aktiviteter.
* Se aktiviteterna grupperade efter kategori.
  
Lycka till och ha kul med övningen!
