

async function fachedData() {


    try {
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        console.log(pokemonName)
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if (!response.ok) {
            throw new Error('Failed to fetch data')
        }
        const data = await response.json();
        const pokemonSprits = data.sprites.front_default;
        const pokeminSprit = document.getElementById('pokeminSprit');
        pokeminSprit.src = pokemonSprits;
        pokeminSprit.style.display = "block";
    }
    catch (error) {
        console.error(error);
    }
} 