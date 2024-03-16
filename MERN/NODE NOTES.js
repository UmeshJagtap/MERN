// Tools:-
// https://onecompiler.com/nodejs/424qw4c2w
// https://www.tutorialspoint.com/execute_nodejs_online.php
// https://nodejs.org/en/learn/manipulating-files/writing-files-with-nodejs
// https://playcode.io/my-projects
// https://tcsglobal.udemy.com/course/the-complete-nodejs-developer-course-2/learn/lecture/13728822#overview
// https://www.npmjs.com/package/yargs
// https://stackblitz.com/edit/node-czi2yw?file=notes.js,index.js,index2.js


// ** NODE JS **
// Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.
// Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.
// Node.js package ecosystem, npm, is the largest ecosystem of open source libraries in the world.

// Download -( https://node.js/en/ )

// Blocking     - Process exectuion once after other
// Non-blocking - Process execution not waiting for request to fufill ( eg. fetching data from db server ) 


// Node.js Module System (Notes App) --------------------------(*)
// notes-app > app.js

const fs = require('fs');
fs.writeFileSync('notes.txt', 'This file was created by Node.js!);

// Terminal :-
// Umesh:~/Desktop/node-course/notes-app$ node app.js

//  new text file ( notes.txt ) will be created!

// Importing Node.js Core Modules --------------------------(*)

// If below is run again,
const fs = require('fs');
fs.writeFileSync('notes.txt', 'My name is Andrew!);
// It will replace the text with the latest one.


const fs = require('fs');
fs.writeFileSync('notes.txt', 'My name is Andrew!);
fs.appendFileSync('notes.txt', ' This is the text, we would like to append');
// It will append the mentioned text at the end of the existing text present


// Importing Your Own Files --------------------------------(*)

// notes-app > app.js
require('./utils.js')
const name = 'Andrew'
console.log(name);

// notes-app > utils.js
console.log('utils.js');

// Terminal :-
// Umesh:~/Desktop/node-course/notes-app$ node app.js
utils.js
Andrew

// +++++++++++++++++++++++++++++ NOW export name

// notes-app > app.js
const firstName = require('./utils.js')
console.log(firstName);

// notes-app > utils.js
console.log('utils.js');
const name = 'Mike'
modules.exports = name 
// Whatever you assign to modules.export that is available as return value, when you require the file

// Terminal :-
// Umesh:~/Desktop/node-course/notes-app$ node app.js
utils.js
Mike

// +++++++++++++++++++++++++++++ NOW export function

// notes-app > utils.js
console.log('utils.js');
const name = 'Mike'
const add = function (a, b) {
    return a + b
}
modules.exports = add

// notes-app > app.js
const add = require('./utils.js')
const sum = add(4, -2)
console.log(sum);

// Terminal :-
// Umesh:~/Desktop/node-course/notes-app$ node app.js
utils.js
2

// +++++++++++++++++++++++++++++ NOW Challenge

// notes-app > notes.js
const getNotes = function () {
    return "Your notes..."
}
modules.exports = getNotes

// notes-app > app.js
const getNotes = require('./notes.js')
const msg = getNotes()
console.log(msg);

// Terminal :-
// Umesh:~/Desktop/node-course/notes-app$ node app.js
// Your notes...


// Importing npm Modules -----------------------------------(*)

// NPM Site >> www.npmjs.com

// Terminal :-
// Umesh:~/Desktop/node-course/notes-app$ node -v
// v11.0.0
// Umesh:~/Desktop/node-course/notes-app$ npm -v
// 6.4.1
// Umesh:~/Desktop/node-course/notes-app$ npm init
// This utility will walk you through creating a package.json file.
// It only covers the most common items, and tries to guess sensible defaults.

// package name: (notes-app)
// version: (1.0.0)
// description:
// entry point: (app.js)
// test command:
// git repository:
// keywords:
// author:
// license: (ISC)

// Is this OK ? (yes) yes  // It tells that, t is about to write package.json file to notes-app directory....

// Now we have a brand new file inside notes-app dir
// notes-app > package.json
{
    "name": "notes-app",
    "version": "1.0.0",
    "description": "",
    "main": "app.js",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit"
    },
    "author": ""
    "license": "ISC"
}
// This file is going to manage the dependencies that our application needs to run... 
// .josn  -JavaScript Object Notation

// https://www.npmjs.com ---(Package Manager)
// Search > validator -String validation and sanitization 10.8.0
// https://www.npmjs.com/package/validator

// install 
// Terminal :-
// Umesh:~/Desktop/node-course/notes-app$ npm install validator
// Umesh:~/Desktop/node-course/notes-app$ npm i validator@10.8.0

+ validator@10.8.0
added 1 package from 2 contributors and audited 1 package in 1.159s
found 0 vulnerabilities

// Once we run this command, two things happen
// 1. package-lock.json -it lists how exact versions, where they were fetched from and we also have sha hash
// 2. node_modules directory -it contains code for the dependencies we install
// notes-app > node_modules > validator    -all the code for validator package

// package-lock.json
{
    "license": "ISC",
    "dependencies": {
        "validator": "^10.8.0"
    }
}

// +++++++ -------------------------- (validator.isEmail)
// -( https://www.npmjs.com/package/validator )

// notes-app > app.js
const validator = require('validator')
console.log(validator.isEmail('andrew@example.com'))

// Terminal :-
// Umesh:~/Desktop/node-course/notes-app$ node app.js
// true

// +++++++

// notes-app > app.js
const validator = require('validator')
console.log(validator.isEmail('example.com'))

// Terminal :-
// Umesh:~/Desktop/node-course/notes-app$ node app.js
// false

// +++++++ -------------------------- (validator.isURL)

// notes-app > app.js
const validator = require('validator')
console.log(validator.isURL('https://mead.io'))

// Terminal :-
// Umesh:~/Desktop/node-course/notes-app$ node app.js
// true

// +++++++

// notes-app > app.js
const validator = require('validator')
console.log(validator.isURL('https://mead.io'))

// Terminal :-
// Umesh:~/Desktop/node-course/notes-app$ node app.js
// true


// Printing in Color ---------------------------------------(*)

// delete node_modules dir
// If we run our program
// $ node app.js
// Error: Cannot find module 'validator'

// We need that node_module dir + code
// ** NOTE ** : 
// When we share our code on GitHub or download any project from GitHub

// To install back ( node_modules )
// Termianl :-
// $ npm install 

// It will generate node_modules based on the dependencies from 
// package.json and package-lock.json files

// chalk -Terminal string styling done right
// -( https://www.npmjs.com/package/chalk )

// Challenge: Use the chalk library in your project
// 1. Install version 2.4.2 of chalk
// 2. Load chalk into app.js
// 3. Use it to print string "Success!" to the console in green
// 4. Test your work
// Bonus: Use docs to mess around with other styles. Make text bold and inversed.

// Terminal :-
// Umesh:~/Desktop/node-course/notes-app$ npm i chalk@2.4.1

// notes-app > app.js

// import chalk from 'chalk';
// console.log(chalk.blue('Hello world!'));
// console.log(chalk.blue.bgRed.bold('Hello world!'));

// const chalk = require('chalk');
import chalk from 'chalk';
const string = 'Success!';
console.log(chalk.green(string));
console.log(chalk.green.bold(string));
console.log(chalk.green.bold.inverse(string));

const greenMsg = chalk.green('Success!')
console.log(greenMsg);

// Example on https://stackblitz.com/edit/node-czi2yw?file=index.js
// Commands :-
// npm install
// npm i chalk@2.4.1
// node index.js

console.log(chalk.bgRed.bold('Error'));
console.log(chalk.bgGreen.bold('Success'));
console.log(chalk.bgYellowBright.bold('Warning'));


// Global npm Modules and nodemon --------------------------(*)

// npm Package > nodemon -Simple monitor script for use during development of a node.js app.
// > $npm install nodemon@1.18.5 -g
// -g stands for Global..

// On Linux
// sudo npm install nodemon@1.18.5 -g

// Checking nodemon installation
// > $nodemon -v
// 1.18.5

// On Windows
// Powershell issue
// $ nodemon -v
// nodemon scripts is disabled on your system..

// The Fix
// 1. Click Windows icon and search for "PowerShell"
// 2. Right-click "Powershell" and click "Run as anministrator"
// 3. Run Set-ExecutionPolicy Unrestricted
// 4. Rerun nodemon -v

// app.js
const chalk = require('chalk')
const getNotes = require(./notes.js)

const msg = getNotes()
console.log(msg)

const greenMsg = chalk.green.inverse.bold('Success!')
const redMsg = chalk.red.inverse.bold('Error!')
console.log(greenMsg)
console.log(redMsg)

// Earlier we used $ node app.js
// To use nodemon we use
// $ nodemon app.js
// [nodemon] 1.18.5
// [nodemon] to restart at any time, enter 'rs'
// [nodemon] watching: *.*
// [nodemon] starting 'node app.js'
// Your notes...
// Success
// [nodemon] clean exit - waiting for changes before restart

// To stop nodemon
// Press "Ctrl + C"


// File System and Command Line Args (Notes App) --------------------------(*)v(*)

// Section Intro: File System and Command Line Args --------------------------(*)
// 1. File System  -allow us to store users notes data
// 2. Command Line Agruments  -allow us to get input from user


// Getting Input from Users --------------------------(*)

// Terminal :-
// notes-app$ node app.js
// Your notes...
// Success!

// notes-app$ node app.js Andrew
// Your notes...
// Success!

// app.js
console.log(process.argv);

// Terminal :-
// notes-app$ node app.js
// Your notes...
// Success!
// [ '/Users/Andrew/.nvm/version/node/v11.0.0/bin/node',
//   '/Users/Andrew/Desktop/node-course/notes-app/app.js',
//   'Andrew' ]

// i.e. [ path to node js executable, path to app.js file, 
//        actually the value we provided ]

// To get the actual value from console
    // app.js
    console.log(process.argv[2]);

    // Terminal :-
    // notes-app$ node app.js Andrew
    // Your notes...
    // Success!
    // Andrew

// Terminal :-
// notes-app$ node app.js add
// Your notes...
// Success!
// add

// Adding commands ------- ( + )
// app.js
const chalk = require('chalk')
const getNotes = require('./notes.js')

const command = process.argv[2]

if (command === 'add') {
    console.log('Adding note!')
} else if (command === 'remove') {
    console.log('Removing note!')
}

// Terminal :-
// notes-app$ node app.js add
// Adding note!
// notes-app$ node app.js remove
// Removing note!


// To add title --------- ( + )
// app.js
const chalk = require('chalk')
const getNotes = require('./notes.js')

const command = process.argv[2]

console.log(process.argv)

if (command === 'add') {
    console.log('Adding note!')
} else if (command === 'remove') {
    console.log('Removing note!')
}

// Terminal :-
// notes-app$ node app.js add --title="This is my title"
// [ '/Users/Andrew/.nvm/version/node/v11.0.0/bin/node',
//   '/Users/Andrew/Desktop/node-course/notes-app/app.js',
//   'add',
//    '--title=This is my title' ]
// Adding note!



// Argument Parsing with Yargs: Part I  --------------------------(*)

// > We see that we dont necessararily get this values, in the most useful way possible,
// Node doesn't provide any argument function, it's a barebone utility...
// So when we provided this title option, it wasn't parsed particularly useful...

// There are ton of npm packages to support this...
// We are going to look ** yrags **

// https://www.npmjs.com/package/yargs
// yargs -yargs the modern, pirate-themed, successor to optimist.

// yargs
// npm i yargs
// weekly downloads (21,473,541)

// Installation --------- ( + )
// Terminal :-
// notes-app$ npm i yargs@12.0.2

// YARGS USAGE ------------ ( + )
// app.js
const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')

console.log(process.argv)
console.log(yargs.argv)

// Terminal :-
// notes-app$ node app.js
// [ '/Users/Andrew/.nvm/version/node/v11.0.0/bin/node',
//   '/Users/Andrew/Desktop/node-course/notes-app/app.js' ]
// { _: [], '$0': 'app.js' }

// Terminal :-
// notes-app$ node app.js add --title="Things to buy"
// [ '/Users/Andrew/.nvm/version/node/v11.0.0/bin/node',
//   '/Users/Andrew/Desktop/node-course/notes-app/app.js',
//   'add',
//   '--title=Things to buy' ]
// { _: [ 'add' ], title: 'Things to buy', '$0': 'app.js' }

// --help ------------ ( + )
// app.js
const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')

console.log(process.argv)
console.log(yargs.argv)

// Terminal :-
// notes-app$ node app.js --help
// [ '/Users/Andrew/.nvm/version/node/v11.0.0/bin/node',
//   '/Users/Andrew/Desktop/node-course/notes-app/app.js',
//   '--help' ]
// Options:
//   --help Show help                [boolean]
//   --help Show version number      [boolean]

// Terminal :-
// notes-app$ node app.js --version
// 1.0.0

// Customize yargs version ------------ ( + )
// app.js
const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')

// Customize yargs version
yargs.version('1.1.0')
console.log(yargs.argv)

// Terminal :-
// notes-app$ node app.js --version
// 1.1.0


// add, remove, read, list ------------ ( + ) 
// app.js
const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')

// Customize yargs version
yargs.version('1.1.0')
console.log(yargs.argv)

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note,
    handler: function () {
        console.log('Adding a new note!')
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Removing the note')
    }
})

// add, remove, raed, list
console.log(yargs.argv)

// Terminal :-
// notes-app$ node app.js --help
// app.js [command]
// Commands:
// app.js add       Add a new note
// Options:
//   --help Show help                [boolean]
//   --help Show version number      [boolean]

// notes-app$ node app.js add
// Adding a new note!
// { _: [ 'add' ], '$0': 'app.js' }

// -------------------------
// Terminal :-
// notes-app$ node app.js --help
// app.js [command]
// Commands:
// app.js add       Add a new note
// app.js remove    Remove a note
// Options:
//   --help Show help                [boolean]
//   --help Show version number      [boolean]

// notes-app$ node app.js remove
// Removing the note
// { _: [ 'remove' ], '$0': 'app.js' }

// Challenge: Add two new commands
// 1. Setup command to support "list" command (print placeholder message for now)
// 2. Setup command to support "read" command (print placeholder message for now)
// 3. Test your work by running both commands and ensure correct output

// app.js
// Create list command
const yargs = require('yargs');
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: function () {
        console.log('Listing out all notes')
    }
})
// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log('Reading a note')
    }
})

// Terminal :-
// notes-app$ node app.js list
// Listing out all notes
// { _: [ 'list' ], '$0': 'app.js' }
// notes-app$ node app.js read
// Reading a note
// { _: [ 'read' ], '$0': 'app.js' }



// Argument Parsing with Yargs: Part II --------------------------(*)

// app.js
const yargs = require('yargs')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note,
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,    // We have to provide it, inorder to work it properly
            type: 'string'
        }
    },
    handler: function () {
        console.log('Adding a new note!', argv)
    }
})

// console.log(yargs.argv)
yargs.parse()

// Terminal :-

// notes-app$ node app.js add --title="Shopping list"
// Adding a new note! { _: [ 'add' ], title: 'Shopping list', '$0': 'app.js' }

// notes-app$ node app.js add 
// Adding a new note! { _: [ 'add' ], '$0': 'app.js' }

// notes-app$ node app.js add             // ( After mentioning **demandOption: true** )
// Adding a new note! { _: [ 'add' ], title: '', '$0': 'app.js' }
// Options:
//   --help   Show help                [boolean]
//   --help   Show version number      [boolean]
//   --title  Note title               [required]
// Missing required argument: title

// notes-app$ node app.js add --title    // ( only providing --title )
// Adding a new note! { _: [ 'add' ], title: true, '$0': 'app.js' }

// notes-app$ node app.js add --title    // ( After mentioning **type: 'string'** )
// Adding a new note! { _: [ 'add' ], title: '', '$0': 'app.js' }

// notes-app$ node app.js add --title="My Title"    // ( After mentioning **type: 'string'** )
// Adding a new note! { _: [ 'add' ], title: 'My Title', '$0': 'app.js' }


// app.js                             ------------ ( + ) 
const yargs = require('yargs')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note,
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,    // We have to provide it, inorder to work it properly
            type: 'string'
        }
    },
    handler: function () {
        // console.log('Adding a new note!', argv)
        console.log('Title:' + argv.title)
    }
})

// console.log(yargs.argv)
yargs.parse()

// Terminal :-

// notes-app$ node app.js add --title="My Title"
// Title: My Title


// Challenge: Add two new commands   ------------ ( + ) 
// 1. Setup a body option for the add command
// 2. Configure a description, make it required, and for it to be a string
// 3. Log the body, value in the handler function
// 4. Test your work!

// app.js
const yargs = require('yargs')

// body option for the add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        },
    },
    handler: function () {
        console.log('Title:' + argv.title)
        console.log('Body:' + argv.body)
    }
})
yargs.parse()

// Terminal :-

// notes-app$ node app.js add --title="Buy"
// app.js add
// Add a new note
// Options:
//   --help   Show help                [boolean]
//   --help   Show version number      [boolean]
//   --title  Note title       [string][required]
//   --title  Note title       [string][required]
// Missing required argument: body

// notes-app$ node app.js add --title="Buy" --body="These are what I need to buy."
// Title: Buy
// Body: These are what I need to buy.


// Storing Data with JSON  --------------------------(*)
> notes-app
> playground > 1-JSON.js

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday'
}

const bookJSON = JSON.stringify(book);
console.log(bookJSON)

// Terminal :-
// node-course/playground$ node 1-JSON.js
{"title":"Ego is the Enemy", "author":"Ryan Holiday"}


// > playground > 1-JSON.js ------------ ( + ) 

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday'
}

const bookJSON = JSON.stringify(book);
console.log(bookJSON)

const parseData = JSON.parse(bookJSON)
console.log(parseData.author)

// Terminal :-
// node-course/playground$ node 1-JSON.js
{"title":"Ego is the Enemy", "author":"Ryan Holiday"}
Ryan Holiday


// > playground > 1-json.json  ------------ ( + ) 
{"title":"Ego is the Enemy", "author":"Ryan Holiday"}

// > playground > 1-JSON.js 
const fs = require('fs')
// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book);
// console.log(bookJSON)

const dataBuffer = fs.readFileSync('1-json.json')
console.log(dataBuffer)
console.log(dataBuffer.toString())

// Terminal :-
// node-course/playground$ node 1-JSON.js
// <Buffer  7b 22 74 69 74 6c 65 22 3a 22 45 67 .. 2 more bytes>
// node-course/playground$ node 1-JSON.js
// {"title":"Ego is the Enemy", "author":"Ryan Holiday"}



// > playground > 1-json.json  ------------ ( + ) 
{"title":"Ego is the Enemy", "author":"Ryan Holiday"}

// > playground > 1-JSON.js 
const fs = require('fs')

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
console.log(data.title)

// Terminal :-
// node-course/playground$ node 1-JSON.js
// Ego is the Enemy


// Challenge: Work with JSON and the file system   ------------ ( + ) 
//
// 1. Load and parse the JSON data
// 2. Change the name and the age property using your info
// 3. Stringify the changed object and overwright the original data
// 4. Test your work by viewing data in the JSON file !

// > playground > 1-json.json  
// { "title":"Ego is the Enemy", "author":"Ryan Holiday"}
{    
    "name": "Andrew",
    "planet": "Earth",
    "age": 27
}

// > playground > 1-JSON.js
const fs = require('fs')
const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)

user.name = "Aadesh",
user.planet = 'Mars'
user.age = 5
console.log(data)

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('notes.txt', 'My name is Andrew!);
const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json', userJSON);

// Terminal :-
// node-course/playground$ node 1-JSON.js
// After this content will be replaces in 1-JOSN.json
// as { "name": "Aadesh", "planet": "Mars", "age": 27 }


// Adding a Note   --------------------------------(*)

// > NODE-COURSE > notes-app > notes.js

// notes.js
const getNotes = function() {
    return 'Your notes...'
}

const addNote = function(title, body) {
    const notes = loadNotes()

    const duplicateNotes = notes.filter(function(note) {
        return note.title === title
    })

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
         })
         // console.log(notes)
         savedNotes(notes)
         console.log('New note added!')
    } else {
        console.log('Note title taken!')
    }
}

const savedNotes = function(notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}
const loadNotes = function() {
    try {
        const dataBuffer = fs.readFileSync(notes.json)
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e) {
        return []
    }
}
 
module.exports = {
    getNotes: getNotes,
    addNote: addNote
}

// > NODE-COURSE > notes-app > app.js

// app.js
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        },
    },
    handler: function (argv) {
        console.log('Title:' + argv.title)
        console.log('Body:' + argv.body)
        notes.addNote(argv.title, argv.body)
    }
})
yargs.parse()


// Terminal :-
// node-course/notes-app$ node app.js add --title="t" --body="b"
// Error : ENOENT: no such file or directory, open 'notes.json'

// NOTE : We can handle this 1. create that file 2. defensive code, if file does not exist

// After adding try-catch  -- + --
// Terminal :-
// node-course/notes-app$ node app.js add --title="t" --body="b"
// []

// After adding savedNotes function -- + --
// Terminal :-
// node-course/notes-app$ node app.js add --title="t" --body="b"
//

// RESULT
// Data will be stored in notes.json

// notes.json
// [{"title":"t", "body":"b"}]


// Terminal :-
// node-course/notes-app$ node app.js add --title="List" --body="Sweater, Pants"
// OUTPUT ............<< ????
// notes.json
// [{"title":"t", "body":"b"}, {"title":"List", "body":"Sweater, Pants"}]

// After adding duplicateNotes code block
// Terminal :-
// node-course/notes-app$ node app.js add --title="List" --body="Sweater, Pants"
// Notes title taken!
// node-course/notes-app$ node app.js add --title="List2" --body="Sweater, Pants"
// New note added!



// Removing a Note   -------------------------------(*)

// Challenge1R: Setup command option and function   ------------ ( + ) 
//
// 1. Setup the remove command to take a required "--title" option
// 2. Create and export removeNote function from note.js
// 3. Call removeNote in remove command handler
// 4. Have removeNote log the title of the note to be removed 
// 5. Test your work using: node app.js remove --title="some title"

// > NODE-COURSE > notes-app > notes.js
// notes.js
const getNotes = function() {
    return 'Your notes...'
}

const addNote = function(title, body) {
    const notes = loadNotes()

    const duplicateNotes = notes.filter(function(note) {
        return note.title === title
    })

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
         })
         // console.log(notes)
         savedNotes(notes)
         console.log('New note added!')
    } else {
        console.log('Note title taken!')
    }
}

const removeNote = function(title) {
    console.log(title)
}

const savedNotes = function(notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}
const loadNotes = function() {
    try {
        const dataBuffer = fs.readFileSync(notes.json)
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e) {
        return []
    }
}
 
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}


// > NODE-COURSE > notes-app > app.js

const yargs = require('yargs')

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        },
    },
    handler: function (argv) {
        console.log('Title:' + argv.title)
        console.log('Body:' + argv.body)
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note', 
    builder: {
        title: {
            describe: 'Note title',
            demandOption: 'true',
            type: 'string'
        },
        // body: {
        //     describe: 'Note body',
        //     demandOption: true,
        //     type: 'string'
        // },   
    },
    handler: function (argv) {
        console.log('Removing the note')
        // console.log('Title:' + argv.title)
        // console.log('Body:' + argv.body)
        notes.removeNote(argv.title)
    }
})

// Terminal :-
// node-course/notes-app$ node app.js remove --title="some title" 
// some title

// Challenge2R: Wire up removeNote  ------------ ( + ) 
//
// 1. Load existing notes
// 2. Use array filter method to remove the matching note (if any)
// 3. Save the newly created array
// 4. Test your work with a title that exists and a title that doesn't exist


// > NODE-COURSE > notes-app > notes.js
// notes.js
const fs = require('fs')
const getNotes = function() {
    return 'Your notes...'
}

const addNote = function(title, body) {
    const notes = loadNotes()

    const duplicateNotes = notes.filter(function(note) {
        return note.title === title
    })

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
         })
         // console.log(notes)
         savedNotes(notes)
         console.log('New note added!')
    } else {
        console.log('Note title taken!')
    }
}

const removeNote = function(title) {
    console.log(title)
    const notes = loadNotes()

    const notesToKeep = notes.filter(function (note) {
        return note.title !== title
    })

    savedNotes(notesToKeep)
}

const savedNotes = function(notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}
const loadNotes = function() {
    try {
        const dataBuffer = fs.readFileSync(notes.json)
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e) {
        return []
    }
}
 
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}


// > NODE-COURSE > notes-app > app.js

const yargs = require('yargs')
const notes = require('./notes.js')

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        },
    },
    handler: function (argv) {
        console.log('Title:' + argv.title)
        console.log('Body:' + argv.body)
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note', 
    builder: {
        title: {
            describe: 'Note title',
            demandOption: 'true',
            type: 'string'
        },
        // body: {
        //     describe: 'Note body',
        //     demandOption: true,
        //     type: 'string'
        // },   
    },
    handler: function (argv) {
        console.log('Removing the note')
        // console.log('Title:' + argv.title)
        // console.log('Body:' + argv.body)
        notes.removeNote(argv.title)
    }
})


// OUTPUT ............<< 
// notes.json
// [{"title":"t", "body":"b"}, {"title":"List", "body":"Sweater, Pants"}, {"title":"List 2", "body":"Sweater, Pants"}]

// Terminal :-
// node-course/notes-app$ node app.js remove --title="t" 

// OUTPUT ............<< 
// notes.json
// [{"title":"List", "body":"Sweater, Pants"}, {"title":"List 2", "body":"Sweater, Pants"}]


// Challenge3R: Use Chalk to provide useful logs for remove  ------------ ( + ) 
//
// 1. If a note is removed, print "Note removed!" with a green background
// 2. If no note is removed, print "No note found!" with a red background


// > NODE-COURSE > notes-app > notes.js
// notes.js
const fs = require('fs')
const chalk = require('chalk')

const getNotes = function() {
    return 'Your notes...'
}

const addNote = function(title, body) {
    const notes = loadNotes()

    const duplicateNotes = notes.filter(function(note) {
        return note.title === title
    })

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
         })
         // console.log(notes)
         savedNotes(notes)
         console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
}

const removeNote = function(title) {
    console.log(title)
    const notes = loadNotes()

    const notesToKeep = notes.filter(function (note) {
        return note.title !== title
    })

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed!'))
        savedNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }
}

const savedNotes = function(notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}
const loadNotes = function() {
    try {
        const dataBuffer = fs.readFileSync(notes.json)
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e) {
        return []
    }
}
 
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}


// > NODE-COURSE > notes-app > app.js

const yargs = require('yargs')
const notes = require('./notes.js')

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        },
    },
    handler: function (argv) {
        console.log('Title:' + argv.title)
        console.log('Body:' + argv.body)
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note', 
    builder: {
        title: {
            describe: 'Note title',
            demandOption: 'true',
            type: 'string'
        },
        // body: {
        //     describe: 'Note body',
        //     demandOption: true,
        //     type: 'string'
        // },   
    },
    handler: function (argv) {
        console.log('Removing the note')
        // console.log('Title:' + argv.title)
        // console.log('Body:' + argv.body)
        notes.removeNote(argv.title)
    }
})

// notes.json
// [{"title":"List", "body":"Sweater, Pants"}, {"title":"List 2", "body":"Sweater, Pants"}]

// Terminal :-
// node-course/notes-app$ node app.js remove --title="t" 
// No note found
// node-course/notes-app$ node app.js remove --title="List2" 
// Note removed 

// OUTPUT ............<< 
// notes.json
// [{"title":"List", "body":"Sweater, Pants"}]


// ES6 Aside: Arrow Functions ----------------------(*)

// NODE-COURSE > playground > 2-arrow-function.js

// const square = function (x) {
//     return x * x;
// }

// const square = (x) =>  {
//     return x * x;
// }

// const square = (x) => x * x

// console.log(square(3))

// Terminal :-
// node-course/notes-app$ nodemon 2-arrow-function.js  
// 9

// const event = {
//     name: "Birthday Party",
//     printGuestList: function() {
//         console.log('Guest list for ' + this.name)
//     }
// }

// event.printGuestList()

// Terminal :-
// node-course/notes-app$ nodemon 2-arrow-function.js  
// Guest list for Birthday Party

const event = {
    name: "Birthday Party",
    printGuestList: () => {
        console.log('Guest list for ' + this.name)
    }
}

event.printGuestList()

// Terminal :-
// node-course/notes-app$ nodemon 2-arrow-function.js  
// Guest list for undefined

// ** NOTE ** : - Arrow function they dont bind their own -this- value 

const event = {
    name: "Birthday Party",
    printGuestList() {
        console.log('Guest list for ' + this.name)
    }
}

event.printGuestList()

// Terminal :-
// node-course/notes-app$ nodemon 2-arrow-function.js  
// Guest list for Birthday Party

const event = {
    name: "Birthday Party",
    guestList: ['Andrew', 'Jen', 'Mike'],
    printGuestList() {
        console.log('Guest list for ' + this.name)

        this.guestList.forEach(function(guest) {
            console.log(guest + ' is attending' + this.name)
        })
    }
}

event.printGuestList()

// Terminal :-
// node-course/notes-app$ nodemon 2-arrow-function.js  
// Guest list for Birthday Party
// Andrew is attending undefined
// Jen is attending undefined
// Mike is attending undefined

const event = {
    name: "Birthday Party",
    guestList: ['Andrew', 'Jen', 'Mike'],
    printGuestList() {
        console.log('Guest list for ' + this.name)

        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending' + this.name)
        })
    }
}

event.printGuestList()

// Terminal :-
// node-course/notes-app$ nodemon 2-arrow-function.js  
// Guest list for Birthday Party
// Andrew is attending Birthday Party
// Jen is attending Birthday Party
// Mike is attending Birthday Party



// Refactoring to Use Arrow Functions --------------(*)

// NODE-COURSE > playground > 3-arrow-challenge.js

// Terminal :-
// node-course/notes-app$ nodemon 3-arrow-challenge.js

// links.mead.io/arrow-challenge

// Goal: Create method to get incomplete tasks

// 1. Define getTasksToDo method
// 2. Use filter to return just the incomplete tasks (arrow functions)
// 3. Test your work by running the script

const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    }, {
        text: 'Clean yard',
        completed: false
    }, 
    {
        text: 'Film course',
        completed: false
    }],
    getTasksToDo() {
        const tasksToDo = this.tasks.filter((task) => {
            return task.completed === false
        })
        return tasksToDo
    }
}

console.log(tasks.getTasksToDo())

// Terminal :-
// node-course/notes-app$ nodemon 3-arrow-challenge.js
// [nodemon] restarting due to changes...
// [nodemon] starting node 3-arrow-challenge.js
// [{ text: "Clean yard", completed: false }, 
// { text: "Film course", completed: false }]


getTasksToDo() {
    return this.tasks.filter((task) => {
        return task.completed === false;
    });
}

getTasksToDo() {
    return this.tasks.filter((task) => task.completed === false)
}   
console.log(tasks.getTasksToDo())


const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    }, {
        text: 'Clean yard',
        completed: false
    }, 
    {
        text: 'Film course',
        completed: false
    }],
    getTasksToDo() {
    return this.tasks.filter((task) => task.completed === false)
    }
}

console.log(tasks.getTasksToDo())



// --------------------------------------------------------------------------------------
//
// Goal: Create method to get incomplete tasks
// 
// 1. If function is method, use ES6 method defination syntax
// 2. Otherwise, use most concise arrow function possible
// 3. Test your work !


// > NODE-COURSE > notes-app > notes.js
// notes.js
const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return 'Your notes...'
}

const addNote = (title, body) => {
    const notes = loadNotes()

    // const duplicateNotes = notes.filter(function (note) {
    //     return note.title === title
    // })

    const duplicateNotes = notes.filter((note) => note.title === title)

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
         })
         // console.log(notes)
         savedNotes(notes)
         console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
}

const removeNote = (title) => {
    console.log(title)
    const notes = loadNotes()

    const notesToKeep = notes.filter((note) => note.title !== title)

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed!'))
        savedNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }
}

const savedNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync(notes.json)
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e) {
        return []
    }
}
 
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}


// > NODE-COURSE > notes-app > app.js

const yargs = require('yargs')
const notes = require('./notes.js')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv) {
        console.log('Title:' + argv.title)
        console.log('Body:' + argv.body)
        notes.addNote(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note', 
    builder: {
        title: {
            describe: 'Note title',
            demandOption: 'true',
            type: 'string'
        }   
    },
    handler(argv) {
        console.log('Removing the note')
        notes.removeNote(argv.title)
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List your note', 
    handler() {
        console.log('Listing out all notes')
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note', 
    handler() {
        console.log('Reading a note')
    }
})


// notes.json
// [{"title":"List", "body":"Sweater, Pants"}]
// Terminal :-
// node-course/notes-app$ node app.js remove --title="List" 
// Note removed! (GREEN)

// notes.json
// {}
// Terminal :-
// node-course/notes-app$ node app.js remove --title="List" 
// No note found (RED)

// node-course/notes-app$ node app.js add --title="t" --body="b"
// New note added (GREEN)
// notes.json
// [{"title":"t", "body":"b"}]



// Listing Notes    --------------------------------(*)

//
// Goal: Wire up list command
// 
// 1. Create and export listNotes from notes.js
//  - "Your notes" using chalk
//  - Print note title for each note
// 2. Call listNotes from command handler
// 3. Test your work !


// > NODE-COURSE > notes-app > notes.js
// notes.js
const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return 'Your notes...'
}

const addNote = (title, body) => {
    const notes = loadNotes()

    // const duplicateNotes = notes.filter(function (note) {
    //     return note.title === title
    // })

    const duplicateNotes = notes.filter((note) => note.title === title)

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
         })
         savedNotes(notes)
         console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
}

const removeNote = (title) => {
    console.log(title)
    const notes = loadNotes()

    const notesToKeep = notes.filter((note) => note.title !== title)

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed!'))
        savedNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }
}

const listNotes = () => {
    const notes = loadNotes()

    console.log(chalk.inverse('Your notes'))

    notes.forEach((note) => {
        console.log(note.title)
    })
}
const savedNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync(notes.json)
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e) {
        return []
    }
}
 
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes
}


// > NODE-COURSE > notes-app > app.js

const yargs = require('yargs')
const notes = require('./notes.js')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv) {
        console.log('Title:' + argv.title)
        console.log('Body:' + argv.body)
        notes.addNote(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note', 
    builder: {
        title: {
            describe: 'Note title',
            demandOption: 'true',
            type: 'string'
        }   
    },
    handler(argv) {
        console.log('Removing the note')
        notes.removeNote(argv.title)
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List your note', 
    handler() {
        console.log('Listing out all notes')
        notes.listNotes()
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note', 
    handler() {
        console.log('Reading a note')
    }
})


// notes.json
// [{"title":"t", "body":"b"}, {"title":"Course ideas","body":""}]

// Terminal :-
// node-course/notes-app$ node app.js list
// Listing out all notes
// Your notes
// t
// Course ideas


// Reading a Note   --------------------------------(*)
// ( Optimizing duplicateNotes ) ++
// 
// Goal: Wire up read command
//
// 1. Setup --title option for read command
// 2. Create readNote in notes.js
//  - Search for note by title
//  - Find note and print title (styled) and body (plain)
//  - No note found? Print error in red.
// 3. Have the command handler call the function
// 4. Test your work by running a couple commands

// > NODE-COURSE > notes-app > notes.js
// notes.js
const fs = require('fs')
const chalk = require('chalk')

// const getNotes = () => {
//     return 'Your notes...'
// }

const addNote = (title, body) => {
    const notes = loadNotes()

    // const duplicateNotes = notes.filter(function (note) {
    //     return note.title === title
    // })

    // const duplicateNotes = notes.filter((note) => note.title === title)

    const duplicateNote = notes.find((note) => note.title === title)

    // if (duplicateNotes.length === 0) {
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
         })
         savedNotes(notes)
         console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
}

const removeNote = (title) => {
    console.log(title)
    const notes = loadNotes()

    const notesToKeep = notes.filter((note) => note.title !== title)

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed!'))
        savedNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }
}

const listNotes = () => {
    const notes = loadNotes()

    console.log(chalk.inverse('Your notes'))

    notes.forEach((note) => {
        console.log(note.title)
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if (note) {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse('Note not found'))
    }
}
const savedNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync(notes.json)
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e) {
        return []
    }
}
 
module.exports = {
    //getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote,
}


// > NODE-COURSE > notes-app > app.js

const yargs = require('yargs')
const notes = require('./notes.js')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv) {
        console.log('Title:' + argv.title)
        console.log('Body:' + argv.body)
        notes.addNote(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note', 
    builder: {
        title: {
            describe: 'Note title',
            demandOption: 'true',
            type: 'string'
        }   
    },
    handler(argv) {
        console.log('Removing the note')
        notes.removeNote(argv.title)
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List your note',
    handler() {
        console.log('Listing out all notes')
        notes.listNotes()
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note', 
    builder: {
        title: {
            describe: 'Note title',
            demandOption: 'true',
            type: 'string'
        }   
    },
    handler(argv) {
        console.log('Reading a note')
        notes.readNote(argv.title)
        
    }
})

yargs.parse()

// notes.json
// [{"title":"t", "body":"b"}, {"title":"Course ideas","body":""}]

// Terminal :-
// node-course/notes-app$ node app.js read --title="t"
// Reading a note
// t (White background)
// b
// node-course/notes-app$ node app.js read --title="Shopping List"
// Note not found! (Red background)



// Debugging Node.js (Notes App)      --------------------------(*)v(*)

// 1. *NOTE* : We can use console.log to quickly dump values to the Terminal

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    console.log(duplicateNote)
    console.log(title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
         })
         savedNotes(notes)
         console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
}

// notes.json
// [{"title":"t", "body":"b"}, {"title":"Course ideas","body":""}]

// Terminal :-
// node-course/notes-app$ node app.js add --title="Courses" --body="Node.js"
// undefined 
// New note added! (Green background)
// node-course/notes-app$ node app.js add --title="Courses" --body="Node.js"
// {"title":"Course ideas","body":""}
// Note title taken! (Red background)

// **__NOTE ( Console.log() )__**
// If you find yourself logging out 5 or 6, diff values, it cann really become a burden,
// So **console.log()** is the most basic tool available for us to debug the code..


// 2. *NOTE* : Next is Node Debugger ( Node's buit in debugging tool which integrates with v8 and the Chrome browser)
// The debugger like console.log needs to be added to specific point in your application

// notes.js
const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    debugger

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
         })
         savedNotes(notes)
         console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
}


// notes.json
// [{"title":"t", "body":"b"}, {"title":"Course ideas","body":""}]

// Terminal :-
// node-course/notes-app$ node app.js add --title="Courses" --body="Node.js"
// Note title taken! (Red background)


// When we debuggers in our programs, it's not gonna stop by default,
// we have to run node with special option to get that done
// To do this we use --node inspect--
// node-course/notes-app$ node inspect app.js add --title="Courses" --body="Node.js"

//----------------------------------------------- < Andrew from Future >
// Running on Windows? You might need this

// node inspect app.js add --title="Courses" --body="Node.js"
// Timeout (2000) waiting for 127.0.0.1:9229 to free

// node --inspect-brk app.js add --title="Courses" --body="Node.js"
//------------------------------------------------------------


// Terminal :-
// node-course/notes-app$ node inspect app.js add --title="Courses" --body="Node.js"
//"
// < Debugger listening on ws://127.0.0.1:9229/66b8ebde
// < For help, see: https://nodejs.org/en/docs/inspector
// < Debugger attached.
Break on start in file:///Users/Andrew/Desktop/node-course/notes-app/app.js
> 1 (function (exports, require, module, __filename, __dirname) { const chalk = require('chalk')
> 2 const yargs = require('yargs')
> 3 const notes = require('./notes.js')
debug>

// Chrome Browser
// chrome://inspect
// It will open chrome://inspect/#devices
// DevTools

// Devices 
// Discover USB devices     [ Port forwarding... ]
// Discover network targets [ Configure ]

// Remote Target #127.0.0.1
// Target (v11.0.0)
// aap.js file:///Users/Andrew/Desktop/node~app/app.js
// Inspect

// Remote Target #LOCALHOST
// Target (v11.0.0)
// aap.js file:///Users/Andrew/Desktop/node~app/app.js
// Inspect

// If we click on Configure 
// localhost:9229
// 127.0.0.1:9229

// From here we can actually inspect our application and 
// we can pause at that point in time, we put the debugger statement
// and view all of our applications variables and values

// Lets get started by clicking on Inspect 
// to open new instance of the debugger tools for debugging our node js application

// We can see our code is wrapped in function
// (function (export, require, module, __filename, __dirname) {const chalk = require("chalk")
// const yargs = ('yargs'); const notes = require('./notes.js')
// ...} });

// We can add our Project to developer tools,
// on left hand side  ** + Add folder to Workspace ** under file system
// i can now navigate to Desktop > node-notes-app directory > Select

// Allow access to directory

// Now, we no longer have wrapping functions, we just have the code eaxctly as we wrote it
// On left hand side, we can even dig through other files in our application.
// now we have littel green icon, shows which is currently active file.

// While debugging we need to open console,
// Sources tab > Escape key

// It's important to note that this point in time not a single line
// is executed at the moment
// Line 1 is highlighted in blue, this is the line the debugger is currently paused at,
// paused at line, it hasn't executed that line yet.

// On the right hand side, lot of information of where our program currently is,
// So i have info about call stack, scope we have currently access to 
// At top Tools for working through our application .
// So currently our debugger is paused, we need to go ahead and manually tell node 
// to continue running the application

// So at this point in time, what i am gonna do is to click on blue pause button
// |> Resume script execution

// And this is going to run until it's told otherwise...
// And one of the things that's gonna pause it is debugger statement,
// which we do have in our program,..

// So im gonna click play, it is going to run script,
// now you can see, we are over in notes.js file, line 8, debugger is written

// chalk can't style the output in debugger
// Terminal debug> restart

// Ctrl+C twice to exit the process


// Error Messages  --------------------------------(*)

// notes.js
const savedNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJsON)
}

// Terminal :-
// node-course/notes-app$ node app.js add --title="Error" --body="run it"

// RefrenceError: dataJsON is not defined
//      at saveNotes (..notes-app/notes.js:56:36)
//      at Object.addNote (..notes-app/notes.js:13:9)
//      at Object.handler (..notes-app/app.js:23:15)
//      at Object.runCommand (..command.js:238:44)
//      at Object.parseArgs [as _parseArgs] (..yargs.js:1059:30)
//      at Object.parse (..yargs.js:538:19)
//      .......




// Asynchronous Node.js (Weather App) --------------------------(*)v(*)

// 4 terms again and again
// Asynchronous
// Non blocking
// Single Threaded
// 

