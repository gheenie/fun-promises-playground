const axios = require('axios');

axios({
    method: 'get',
    url: 'https://pokeapi.co/api/v2/pokemon'
})
.then( (response) => {
    console.log(response.data.results);
} )
.catch( err => {
    console.log(err);
} );
