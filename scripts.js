// Create a namespace for our app:
const pokemonApp = {};

// An initializer function! The first thing that will be called, and it will start all other parts of our app up and running.
pokemonApp.init = () => {
  // pokemonApp.getPokemon();

  pokemonApp.getUserInput();
};

// A function for our API call! This will go get the art from the Rijksmuseum
pokemonApp.getPokemon = (pokemonPick) => {
  // Create a new URL object, add query (search) parameters, and then make the fetch call.
  const url = new URL(`https://pokeapi.co/api/v2/pokemon/${pokemonPick}`);

  url.search = new URLSearchParams({});

  fetch(url)
    .then((results) => results.json())
    .then((data) => {
      document.querySelector(".pokemonBalls").innerHTML = "";
      document.querySelector(".pokemonImage").innerHTML = "";
      document.querySelector(".pokemonName").innerHTML = "";
      document.querySelector(".pokemonType").innerHTML = "";
      document.querySelector("#movesList").innerHTML = "";
      pokemonApp.chosenPokemon(data);
    });
};

pokemonApp.chosenPokemon = (nameOfPokemon) => {
  const pokemonName = document.createElement("h2");

  pokemonName.innerText = nameOfPokemon.name;
  const pokemonType = document.createElement("p");

  pokemonType.innerText = nameOfPokemon.types[0].type.name;
  const pokemonImage = document.createElement("img");

  pokemonImage.src =
    nameOfPokemon.sprites.other["official-artwork"].front_default;
  pokemonImage.alt = "pokemon Image";

  const contgratsMessage = document.createElement("h2");
  contgratsMessage.textContent = "Congratulations!! You Chose:";

  const moveTitle = document.createElement("h3");
  moveTitle.textContent = "Moves:";

  // add them to the selected div within main page
  document.querySelector(".pokemonBalls").appendChild(contgratsMessage);
  document.querySelector(".pokemonImage").append(pokemonImage);
  document.querySelector(".pokemonName").append(pokemonName);
  document
    .querySelector(".pokemonType")
    .append(`Type: ${pokemonType.innerText}`);

  // added list of move tyes
  document.querySelector(".pokemonType").append(moveTitle);
  for (let i = 0; i < 4; i++) {
    const pokemonMoves = document.createElement("li");
    pokemonMoves.innerText = nameOfPokemon.moves[i].move.name;
    document.querySelector("#movesList").append(pokemonMoves);
  }
};

// Function will get users input
pokemonApp.getUserInput = () => {
  // Want to get the value in the options list to select a pokemon
  document.querySelector("#Pokemon").addEventListener("change", function () {
    const selection = this.value;

    pokemonApp.getPokemon(selection);
  });
};

// Call the init function to kick our app off! This will always be at the bottom of our file.
pokemonApp.init();

// Hamburger menu on the main page

const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".navBar");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navBar.classList.toggle("active");
});

document.querySelectorAll(".navLink").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navBar.classList.remove("active");
  })
);
