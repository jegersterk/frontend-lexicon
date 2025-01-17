console.log(document);
// spara undan befintligt element
const collageContainerEl = document.querySelector(".collage-container");

const myImageObjects = [
    {
        src: "https://plus.unsplash.com/premium_photo-1707353402057-c95bdddb5b39?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2l0dGVufGVufDB8fDB8fHww",
        altText: "Cute orange kitten",
        textColor: "hotpink"
    },
    {
        src: "https://images.unsplash.com/photo-1498336179775-9836baef8fdf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2l0dGVufGVufDB8fDB8fHww",
        altText: "Cute white kitten",
        textColor: "teal"
    },
    {
        src: "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2l0dGVufGVufDB8fDB8fHww",
        altText: "Cute kitten",
        textColor: "rebeccapurple"
    },
    {
        src: "https://images.unsplash.com/photo-1500174857981-b769ffdc53ce?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8a2l0dGVufGVufDB8fDB8fHww",
        altText: "Cute gray kitten",
        textColor: "aqua"
    }
]

const myBtnEl = document.querySelector("button");
console.log(myBtnEl);
// lägga till eventlyssnare på knappen
myBtnEl.addEventListener("click", (event) => {
    // när vi klickar på knappen exekveras följande kod
    console.log(event);
    // loopa över listan
    myImageObjects.forEach(imageObject => {
        // för varje bild
        console.log(imageObject);

        // här skapar vi det nya elementet, notera att det inte läggs in i DOM:en ännu
        const newImgEl = document.createElement('img');
        // innan vi lägger in elementet på sidan, ändrar vi attribut på det
        newImgEl.setAttribute("src", imageObject.src);
        // newImgEl.src = "./images/image.png";
        newImgEl.setAttribute("alt", imageObject.altText);
        // stylea till elementet med en border mha style
        newImgEl.style.border = `${imageObject.textColor} solid 5px`;
        // vi lägger in ett element genom att förankra det i ett befintligt element
        collageContainerEl.appendChild(newImgEl);

    });
});


let listElem = document.querySelector('ul');

for(let i=0;i<2;i++) {
    let listItem = document.createElement('li');
    listItem.innerHTML = i;
    
    listElem.appendChild(listItem);
}




