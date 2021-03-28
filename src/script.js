var fs = require('fs');

const REGEXP = /\/(\d+)\//g;

let pokemonList = require('./pokemon_list.json');
let newList = pokemonList.results.map((pok, index) => {
  return {
    name: pok.name,
    url: pok.url,
    imgUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`
  }
})

fs.writeFile('./pokemons.json', JSON.stringify(newList), err => {
  if (err) {
    console.error(err)
    return
  }
  console.log('salvo');
})