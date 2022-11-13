// Create a namespace for our app:
const pokemonApp = {};
// console.log(document.querySelector(".pokemonBalls"));
// const info = document.querySelector(".pokemonImage");
// console.log(info);
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
      console.log(data);
      // document.querySelector("#chosenPokemon").innerHTML = "";
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
  // pokemonName.classList.add("pokemonName");
  pokemonName.innerText = nameOfPokemon.name;
  const pokemonType = document.createElement("p");
  // pokemonType.classList.add("pokemonType");
  pokemonType.innerText = nameOfPokemon.types[0].type.name;
  const pokemonImage = document.createElement("img");
  // pokemonImage.classList.add("pokemonImage");
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
  // document.querySelector("#movesList").append(pokemonMoveOne);

  // const movesTitle = docment.createElement(`<h3>Moves:</h3>`);
  // document.querySelector("pokemonMoves").append(movesTitle);
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
    // console.log(selection);
    pokemonApp.getPokemon(selection);
  });
};

// Call the init function to kick our app off! This will always be at the bottom of our file.
pokemonApp.init();
