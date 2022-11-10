// Create a namespace for our app:
const pokemonApp = {};

// An initializer function! The first thing that will be called, and it will start all other parts of our app up and running.
pokemonApp.init = () => {
  pokemonApp.getPokemon();
};

// A function for our API call! This will go get the art from the Rijksmuseum
pokemonApp.getPokemon = () => {
  // Create a new URL object, add query (search) parameters, and then make the fetch call.
  const url = new URL(`https://pokeapi.co/api/v2/pokemon/1/`);

  url.search = new URLSearchParams({});

  fetch(url)
    .then((results) => results.json())
    .then((data) => {
      console.log(data);
      pokemonApp.chosenPokemon(data);
    });
};

pokemonApp.chosenPokemon = (nameOfPokemon) => {
  pokemonName = nameOfPokemon.name;
  console.log(pokemonName);
  //   document.body.innerHTML = `<h1>${pokemonName}</h1>`;
  pokemonType = nameOfPokemon.types[0].type.name;
  console.log(pokemonType);

  pokemonImage = nameOfPokemon.sprites.other["official-artwork"].front_default;
  console.log(pokemonImage);

  //https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Using_images
  const pImage = document.querySelector(".image img");
  pImage.src = pokemonImage;
  const pName = document.querySelector(".pokemonName");
  pName.innerHTML = pokemonName;
  const pType = document.querySelector(".pokemonType");
  pType.innerHTML = pokemonType;
};

// Call the init function to kick our app off! This will always be at the bottom of our file.
pokemonApp.init();
