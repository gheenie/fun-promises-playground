const inquirer = require('inquirer');
const axios = require('axios');

const questionPokemonId = { message: 'Pokemon ID to search: ', name: 'pokemonId' };

inquirer
.prompt([questionPokemonId])
.then( ({ pokemonId }) => {
    return axios({
        method: 'get',
        url: `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
    })
} )
.then( (response) => {
    console.log(response.data.species.name);
} )
.catch( err => {
    console.log('The pokemon does not exist.');
} );
