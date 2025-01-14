![](poster.png)

## Bibblan

1. Skapa ett objekt som innehåller data om en bok, nycklar som kan inkluderas är `title`, `author`, `numPages`.

2. Skapa en array av objekt med flera stycken böcker

3. Skapa en funktion som söker efter en titel i arrayen, om den hittar en så returneras objektet annars `null`. Låt funktionen ta emot arrayen med bok-objekt och söktermen som parametrar.


## Letter Frequency
Räkna tecken i en sträng och organisera detta i ett objekt.
Skapa en funktion som tar en sträng som input och ger ett objekt som output.

Varje tecken är sin egna nyckel i objektet och värdet på nyckeln är antalet av det tecknet. Dvs, för varje tecken ska det finnas en nyckel i objektet och värdet på den nyckeln ska vara antal förekomster av det tecknet.

Denna övning kräver dynamiska nycklar.

```js
letterFrequency("kalle") // => {"k": 1. "a": 1, "l": 2, "e": 1}
letterFrequency("aaaa") // => {"a": 4}
letterFrequency("ni talar bra latin") // => {"n": 2, "i":2, " ":3, "t":2, "a":4,"l": 2,"r":2", "b":1 }
```


## User Register
För samtliga uppgifter nedan, ladda ner och utgå från users.js genom att lägga till 
`<script src="users.js">` innan er script-tag. Då har du en global variabel `users` som innehåller alla användare.

### filterByCountry

Skapa en funktion som tar emot listan på användare och en landskod och returnerar en ny lista innehållande endast användare med den landskoden.

### listEmails

Skapa en funktion som tar emot listan på användare och returnerar en lista innehållandes endast användarnas emailaddresser

### Utmaning! - Reformat Emails
Chefen på bolaget vill att alla användare ska få nya e-mailaddresser.
Just nu följer deras e-mail formatet `förnamn.efternamn@example.com` 
men chefen vill att de ska följa formatet `efternamn.förnamn@evilcorp.countrydomain`.

Skapa en funktion som listar alla e-mail-adresser enligt det nya formatet.

| Land | Nat | Domän |
| ---- | ---- | ---- |
| Frankrike | FR | .fr |
| Schweiz | CH | .ch |
| Tyskland | DE | .de |
| Norge | NO | .no |
| USA | US | .us |
| Finland | FI | .fi |
| Storbritannien | GB | .uk |
| Nederländerna | NL | .nl |
| Nya Zeeland | NZ | .nz |
| Australien | AU | .au |
| Estland | ES | .ee |
| Irland | IE | .ie |
| Danmark | DK | .dk |
| Brasilien | BR | .br |
| Kanada | CA | .ca |
