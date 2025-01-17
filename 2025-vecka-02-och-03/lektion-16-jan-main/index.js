// Events, Event handling, default behavior (ev forms om vi hinner)
// tom array för mina katter
let cats = [];

// komma åt elementet vi vill göra något med
const nameEl = document.getElementById('name');
nameEl.addEventListener('change', (event) => {
    console.log(event.target.value);
});

const isCuteEl = document.getElementById('isCute');
isCuteEl.addEventListener('change', (event) => {
    console.log(event.target.checked);
    if (event.target.checked === false) {
        alert('Are you absolutely sure?');
    }
});

const breedSelectEl = document.getElementById('breed');
breedSelectEl.addEventListener('change', (event) => {
    console.log(event.target.value);
});

const radioYesEl = document.getElementById('radio-yes');
radioYesEl.addEventListener('change', (event) => {
    console.log(event.target.checked);
});

const dateEl = document.getElementById('date');
dateEl.addEventListener('change', (event) => {
    console.log(event.target.value);
});

// hantering av när vi trycker på submit
const registerForm = document.getElementById('registerForm');
registerForm.addEventListener('submit', (event) => {
    event.preventDefault(); // förhindrar att sidan laddas om
    const cat = {
        name: nameEl.value,
        isCute: isCuteEl.checked,
        breed: breedSelectEl.value,
        isVaccinated: radioYesEl.checked,
        born: dateEl.value
    };
    cats.push(cat);
    console.log(cats);
    // återståller formuläret
    nameEl.value = "";
    isCute.checked = true;
    breedSelectEl.value = "Ragdoll";
    radioYesEl.checked = false;
    dateEl.value = "";
});