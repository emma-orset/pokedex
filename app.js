let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let image = document.getElementById("image");
let pokeNumber = document.getElementById("number");
let pokeName = document.getElementById("name");
let input = document.getElementById("input");

const changePokemon = async () => {
  let randomNumber = Math.ceil(Math.random() * 150) + 1; // 1 et 151
  

  let requestString = `https://tyradex.vercel.app/api/v1/pokemon/${randomNumber}`;

// In English :
// let requestString = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`;

  let data = await fetch(requestString);
  let response = await data.json();

  image.src = response.sprites.regular;
  pokeNumber.textContent = `#${response.pokedex_id}`;
  pokeName.textContent = response.name.fr;
};

changePokemon();
button1.addEventListener("click", changePokemon);


const searchPokemon = async () => {
    let val = input.value.toLowerCase();
  
    let requestString = `https://tyradex.vercel.app/api/v1/pokemon/${val}`;
  
    let data = await fetch(requestString);
    let response = await data.json();
  
    image.src = response.sprites.regular;
    pokeNumber.textContent = `#${response.pokedex_id}`;
    pokeName.textContent = response.name.fr;
  };
  
searchPokemon();
button2.addEventListener("click", searchPokemon);

input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      button2.click();
    }
  });