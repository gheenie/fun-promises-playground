const fs = require('fs/promises');

Promise.all([
    fs.readFile(`${__dirname}/secret-message.txt`, 'utf-8'),
    fs.readFile(`${__dirname}/super-secret-message.txt`, 'utf-8')
])
.then( ([secretMessage, superSecretMessage]) => {
    const secretMessageLength = secretMessage.length;
    const superSecretMessageLength = superSecretMessage.length;
    let longerFile = 'No file';
    let lengthDifference = 0;
    
    if (superSecretMessageLength > secretMessageLength) {
        longerFile = 'super-secret-message.txt';
        lengthDifference = superSecretMessageLength - secretMessageLength;
    } else if (secretMessageLength > superSecretMessageLength) {
        longerFile = 'secret-message.txt';
        lengthDifference = secretMessageLength - superSecretMessageLength;
    }

    console.log(`${longerFile} has the most characters. It contains ${lengthDifference} characters more.`);

    fs.writeFile(`${__dirname}/mega-secret-message.txt`, secretMessage + superSecretMessage, () => {});
} )
.catch( (err) => {
    console.log(err);
} );
