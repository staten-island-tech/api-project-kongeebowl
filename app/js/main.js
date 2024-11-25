import "../css/style.css";
import { DOMSelectors } from "./dom";

async function getData() {
  try {
    const response = await fetch(
      "https://botw-compendium.herokuapp.com/api/v3/compendium/all"
    );
    if (response.status != 200) {
      throw new Error(response);
    } else {
      const data = await response.json();
      addCards(data);
    }
  } catch (error) {
    console.log(error);
    console.log("big fat error dzsljnc");
  }
}

getData();

function addCards(data) {
  const apiData = data.data;

  apiData
    .sort((a, b) => a.id - b.id)
    .forEach((obj) => {
      DOMSelectors.box.insertAdjacentHTML(
        "beforeend",
        `
      <div class="card w-1/5 h-[17vw] bg-blue-500 rounded-3xl flex flex-col items-center justify-around m-8 border-2 border-black font-hylia text-xl">
            <h2 class="card-title">${obj.name}</h2>
            <img src="${obj.image}" alt="${obj.description}" class="object-contain w-full h-48" />
            <p class="text-base">${obj.id}</p>
            <button class="bg-white rounded-xl w-[6vw] border-black border-2">Read More</button>
          </div>
       
      `
      );
    });
}

function cards(filteredCards) {
  clear();
  filteredCards.sort((a, b) => a.id - b.id).forEach((card) => addCards(card));
}

function sortCards() {}

function clear() {
  DOMSelectors.box.innerHTML = "";
}

/* function clear() {
  DOMSelectors.box.innerHTML = "";
}

function sortGnomes(trait, minimum) {
  return gnomes
    .filter((gnome) => gnome[trait] >= minimum)
    .sort((a, b) => b[trait] - a[trait]);
}



function displayCards() {
  gnomeCards(gnomes);

  DOMSelectors.allGnomes.addEventListener("click", (event) => {
    event.preventDefault();
    gnomeCards(gnomes);
  });

  DOMSelectors.rizzButton.addEventListener("click", (event) => {
    event.preventDefault();
    const rizzLords = sortGnomes("rizz", 8);
    gnomeCards(rizzLords);
  });

  DOMSelectors.hotnessButton.addEventListener("click", (event) => {
    event.preventDefault();
    const looksmaxxer = sortGnomes("looks", 8);
    gnomeCards(looksmaxxer);
  });

  DOMSelectors.wizButton.addEventListener("click", (event) => {
    event.preventDefault();
    const wizard = sortGnomes("magic", 8);
    gnomeCards(wizard);
  });

  DOMSelectors.swolButton.addEventListener("click", (event) => {
    event.preventDefault();
    const beachBum = sortGnomes("strength", 9);
    gnomeCards(beachBum);
  });
}

displayCards();
 */
