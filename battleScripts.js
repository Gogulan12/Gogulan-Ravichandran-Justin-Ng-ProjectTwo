// Create a namespace for our app:
const pokemonApp = {};

// An initializer function! The first thing that will be called, and it will start all other parts of our app up and running.
pokemonApp.init = () => {
  //   pokemonApp.getPokemon();

  pokemonApp.getUserInput();
};

// A function for our API call! This will go get the art from the Rijksmuseum
pokemonApp.getPokemon = (pokemonPick1, pokemonPick2) => {
  // Create a new URL object, add query (search) parameters, and then make the fetch call.

  /////////////////////////FETCH CALL FOR USER SELECTION//////////////////////////////////////
  const url1 = new URL(`https://pokeapi.co/api/v2/pokemon/${pokemonPick1}`);

  fetch(url1)
    .then((results) => results.json())
    .then((data) => {
      //   console.log(data);
      let x = document.querySelectorAll(".imageContainerOne");
      x.forEach(function (item) {
        item.innerHTML = "";
      });
      //https://stackoverflow.com/questions/27983388/using-innerhtml-with-queryselectorall
      // for (let i = 0; i < x.length; i++) {
      //   x[i].innerHTML = "";
      // }
      let y = document.querySelectorAll(".pokemonName1");
      y.forEach(function (item) {
        item.innerHTML = "";
      });

      pokemonApp.chosenPokemon(data);
      // pokemonApp.userWinner(data);
      // console.log(data);
    });

  /////////////////////////FETCH CALL FOR COMPUTER SELECTION//////////////////////////////////////
  const url2 = new URL(`https://pokeapi.co/api/v2/pokemon/${pokemonPick2}`);

  fetch(url2)
    .then((results) => results.json())
    .then((data) => {
      //   console.log(data);
      let x = document.querySelectorAll(".imageContainerTwo");
      x.forEach(function (item) {
        item.innerHTML = "";
      });
      let y = document.querySelectorAll(".pokemonName2");
      y.forEach(function (item) {
        item.innerHTML = "";
      });

      pokemonApp.computerPokemon(data);
      // pokemonApp.computerWinner(data);
      // console.log(data);
    });
};

////////////////////////////////// USERS RANDOM SELECTION/////////////////////////
pokemonApp.chosenPokemon = (nameOfPokemon) => {
  //////////////////To change the image and replace it with a pokemon image

  let x = document.querySelectorAll(".imageContainerOne");
  x.forEach(function (item) {
    const pokemonImage = document.createElement("img");
    pokemonImage.src =
      nameOfPokemon.sprites.other["official-artwork"].front_default;
    pokemonImage.alt = "pokemon Image";
    item.append(pokemonImage);
  });

  /////////////////TO change pokemon name to selected name
  let y = document.querySelectorAll(".pokemonName1");
  y.forEach(function (item) {
    const pokemonName = document.createElement("h2");
    pokemonName.innerText = nameOfPokemon.name;
    item.append(pokemonName);
  });

  /////////////////TO change pokemon type to selected type
  document.querySelector(".pokemonType1").innerHTML = "";
  const pokemonType = document.createElement("p");
  // pokemonType.classList.add("pokemonType");
  pokemonType.innerText = nameOfPokemon.types[0].type.name;
  document
    .querySelector(".pokemonType1")
    .append(`Type: ${pokemonType.innerText}`);
};

////////////////////////////////////COMPUTERS RANDOM SELECTION/////////////////////////
pokemonApp.computerPokemon = (nameOfPokemon) => {
  //////////////////To change the image and replace it with a pokemon image

  let x = document.querySelectorAll(".imageContainerTwo");
  x.forEach(function (item) {
    const pokemonImage = document.createElement("img");
    pokemonImage.src =
      nameOfPokemon.sprites.other["official-artwork"].front_default;
    pokemonImage.alt = "pokemon Image";
    item.append(pokemonImage);
  });

  /////////////////TO change pokemon name to selected name
  let y = document.querySelectorAll(".pokemonName2");
  y.forEach(function (item) {
    const pokemonName = document.createElement("h2");
    pokemonName.innerText = nameOfPokemon.name;
    item.append(pokemonName);
  });

  /////////////////TO change pokemon type to selected type
  document.querySelector(".pokemonType2").innerHTML = "";
  const pokemonType = document.createElement("p");
  // pokemonType.classList.add("pokemonType");
  pokemonType.innerText = nameOfPokemon.types[0].type.name;
  document
    .querySelector(".pokemonType2")
    .append(`Type: ${pokemonType.innerText}`);
};

///////////////////////////// FUNCTION TO GET RANDOM LEVEL/////////////////////////
pokemonApp.pokemonLevel = () => {
  let value1 = Math.floor(Math.random() * 100) + 1;

  let value2 = Math.floor(Math.random() * 100) + 1;
  if (value1 === value2) {
    let value2 = Math.floor(Math.random() * 100) + 1;
  }
  document.querySelector(".pokemonLevel1").innerHTML = "";
  const pokemonLevelOne = document.createElement("p");
  pokemonLevelOne.innerText = `level:${value1}`;
  document.querySelector(".pokemonLevel1").append(pokemonLevelOne);

  document.querySelector(".pokemonLevel2").innerHTML = "";
  const pokemonLevelTwo = document.createElement("p");
  pokemonLevelTwo.innerText = `level:${value2}`;
  document.querySelector(".pokemonLevel2").append(pokemonLevelTwo);

  pokemonApp.winnerDisplay(value1, value2);
};

///////////////////////////////WINNER CALCULATION/////////////////////////////////

// ////////function created to change winner image to user

// pokemonApp.userWinner = (youWon) => {
//   document.querySelector(".imageOfWinner").innerHTML = "";
//   document.querySelector(".finalPokemonName").innerHTML = "";

//   const pokemonImage = document.createElement("img");
//   // pokemonImage.classList.add("pokemonImage");
//   pokemonImage.src = youWon.sprites.other["official-artwork"].front_default;
//   pokemonImage.alt = "pokemon Image";

//   /////////////////TO change pokemon name to selected name
//   const pokemonName = document.createElement("h2");
//   // pokemonName.classList.add("pokemonName");
//   pokemonName.innerText = youWon.name;

//   document.querySelector(".imageOfWinner").append(pokemonImage);
//   document.querySelector(".finalPokemonName").append(pokemonName);
// };

// ////////function created to change winner image to computer

// pokemonApp.computerWinner = (computer) => {
//   document.querySelector(".imageOfWinner").innerHTML = "";
//   document.querySelector(".finalPokemonName").innerHTML = "";

//   const pokemonImage = document.createElement("img");
//   pokemonImage.src = computer.sprites.other["official-artwork"].front_default;
//   pokemonImage.alt = "pokemon Image";

//   /////////////////TO change pokemon name to selected name
//   const pokemonName = document.createElement("h2");
//   // pokemonName.classList.add("pokemonName");
//   pokemonName.innerText = computer.name;

//   document.querySelector(".imageOfWinner").append(pokemonImage);
//   document.querySelector(".finalPokemonName").append(pokemonName);
// };

pokemonApp.winnerDisplay = (pokemon1, pokemon2) => {
  if (pokemon1 > pokemon2) {
    console.log("you win");
    // userWinner();
  } else {
    console.log("you lose");
    // computerWinner();
  }

  // if (value1 > value2) {
  //   document
  //     .querySelector(".imageOfWinner")
  //     .append(imageContainerOne.innerHTML);
  // }
};

/////////////////////////// FUNCTION TO GET USER INPUT///////////////////////////
pokemonApp.getUserInput = () => {
  // Want to get the value in the options list to select a pokemon
  document
    .querySelector(".buttonSelection")
    .addEventListener("click", function () {
      // const selection = this.value;
      // console.log(selection);
      let value1 = Math.floor(Math.random() * 905) + 1;
      let value2 = Math.floor(Math.random() * 905) + 1;
      if (value1 === value2) {
        let value2 = Math.floor(Math.random() * 905) + 1;
      }
      pokemonApp.getPokemon(value1, value2);
      pokemonApp.pokemonLevel();
      // pokemonApp.winnerDisplay();
    });
};

// Call the init function to kick our app off! This will always be at the bottom of our file.
pokemonApp.init();