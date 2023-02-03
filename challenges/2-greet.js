const inquirer = require('inquirer');

const questionGivenName = { message: 'What is your given name?', name: 'givenName' };
const questionSurname = { message: 'What is your surname?', name: 'surname' };

inquirer
.prompt([
    questionGivenName,
    questionSurname
])
.then( ({ givenName, surname }) => {
    console.log(`Hello ${givenName} ${surname}!`);
} )
.catch( err => {
    console.log(err);
} );
