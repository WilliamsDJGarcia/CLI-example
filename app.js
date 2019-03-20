const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const inquirer = require('inquirer');
const shell = require('shelljs');
var key;

clear();

console.log('');
console.log('');

console.log(
    chalk.yellow(
    figlet.textSync('BBCITAAAAA', {font: "Standard", horizontalLayout: 'full'})
    )
);

inquirer.prompt([
    {
        name: 'Menu',
        type: 'list',
        message: '¿Que haras?',
        choices: [ 'ping', 'whois', 'wget']
    }
]).then(answer => {
    console.log(answer);
    key = answer.Menu;

    switch (key) {
        case 'ping':
            ping();
            break;
        
        case 'whois':
            who();
            break;
        
        case 'wget':
            wg();
            break;
    
        default:
            break;
    }
});



function ping(){
    console.log('BBCITA');

    inquirer.prompt([
        {
        name: 'ping',
        type: 'input',
        message: 'Ingresa la ip o URL'
        }
    ]).then(answer => {
        console.log(answer);
        shell.exec('ping ' + answer.ping)
    })
}

function who(){
    inquirer.prompt({
        name: 'whois',
        type: 'input',
        message: 'Ingresa la ip o URL'
    }).then(answer => {
        console.log(answer)
        shell.exec('whois ' + answer.whois)
    })
}

function wg(){
    inquirer.prompt({
        name: 'wget',
        type: 'input',
        message: 'Ingresa la ip o URL'
    }).then(answer => {
        console.log(answer)
        shell.exec('wget ' + answer.wget)
    })
}