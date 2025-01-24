// Pseudo-kod: Vad vi vill att sidan ska göra
// 1. Vi behöver ett formulär där användaren kan lägga till nya aktiviteter i bucket list.
// 2. När formuläret skickas in ska aktiviteten läggas till i en array som lagrar alla aktiviteter.
// 3. Vi behöver en funktion som renderar aktiviteterna i arrayen som en lista i DOM.
// 4. Aktiviteterna ska grupperas efter kategori.
// 5. Varje aktivitet i listan ska ha två knappar:
//    a. En knapp för att markera aktiviteten som klar eller ej klar.
//    b. En knapp för att ta bort aktiviteten från listan.
// 6. När en aktivitet markeras som klar/ej klar eller tas bort ska listan uppdateras dynamiskt i DOM.

let bucketList = [];

function renderBucketList() {
  const bucketListsDiv = document.getElementById('bucketLists');
  bucketListsDiv.innerHTML = '';

  const categories = {};
  bucketList.forEach((activity) => {
    if (!categories[activity.category]) {
      categories[activity.category] = [];
    }
    categories[activity.category].push(activity);
  });

  for (let category in categories) {
    const categoryDiv = document.createElement('div');
    categoryDiv.innerHTML = `<h3>${category}</h3>`;
    const ul = document.createElement('ul');

    categories[category].forEach((activity) => {
      const li = document.createElement('li');
      li.textContent = activity.name;

      const doneButton = document.createElement('button');
      doneButton.textContent = activity.done ? '✓' : '○';
      doneButton.addEventListener('click', () => {
        activity.done = !activity.done;
        renderBucketList();
      });

      const deleteButton = document.createElement('button');
      deleteButton.textContent = '✘';
      deleteButton.addEventListener('click', () => {
        const categoryActivities = categories[activity.category];
        const activityIndex = categoryActivities.indexOf(activity);
        if (activityIndex > -1) {
          categoryActivities.splice(activityIndex, 1);
          bucketList = bucketList.filter((item) => item !== activity);
        }
        renderBucketList();
      });

      li.appendChild(doneButton);
      li.appendChild(deleteButton);
      ul.appendChild(li);
    });

    categoryDiv.appendChild(ul);
    bucketListsDiv.appendChild(categoryDiv);
  }
}
// Hämta formulärelementet och lägg till en eventlyssnare

const bucketForm = document.getElementById('bucketForm');
bucketForm.addEventListener('submit', (event) => {
  event.preventDefault(); // förhindra omrendering av sidan vid submit

  const activityName = document.getElementById('activityName').value.trim();
  const activityCategory = document.getElementById('activityCategory').value;

  if (activityName === '') {
    alert('Du måste ange en aktivitet!');
    return;
  }
  bucketList.push({
    name: activityName,
    category: activityCategory,
    done: false,
  });
  bucketForm.reset();
  renderBucketList();
});

renderBucketList();
