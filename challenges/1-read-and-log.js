const fs = require('fs/promises');

fs.readFile(`${__dirname}/secret-message.txt`, 'utf-8')
.then( (data) => {
    console.log(data);
} )
.catch( (err) => {
    console.log(err);
} );
