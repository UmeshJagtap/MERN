Github Repo :- https://github.com/academind/react-complete-guide-course-resources/tree/main/code

What's is MERN ?

M -mongoDB  -Database Solution 
E -express  -Node.js Framework
R -react    -Browser-side JavaScript Library 
N -node     -Server-side JavaScript Runtime

React -A client-Side(Browser) Library which allows you to build highly reactive user interfaces

>> ** vscode **
Extensions :-
Material Icon Theme
Path Intellisense
Prettier -Code formatter

Theme :-
Dark+ (default dark)

Keyboard Shortcuts :-
Format Document

// backend > package.json
"dependencies" :
{
    "body-parser": "^1.19.0",
    "express": "^4.17.1",
    "uuid": "^3.3.3"
}

// frontend > package.json
"dependencies" : {
    "react": "^16.11.0",
    "react-dom": "^16.11.0",
    "react-scripts": "^3.2.0"
},

Terminal :
$ cd frontend/
$ npm install
$ cd backend/
$ npm install

$ cd frontend/
$ npm start
localhost:3000

$ cd backend/
$ npm start
> backend@1.0.0 start /Users/mschwarzmueller/development/...backend
> node server.js
localhost:5000
Cannot GET /
localhost:5000/products
{"products": []}


backend > server.js
const express = require('express');
const bodyParser = require('body-parser');
const uuid = require('uuid/v4');

const app = express();
..
.
app.get()
app.post()
app.listen(5000); // start Node + Express server on port 5000 

frontend > src > App.js

return (
    <React.Fragment>
        <Header />
        <main>
            <NewProduct onAddProduct={addProductHandler} />
            {isLoading && <p className='loader'>Loading...</p>}
            {!isLoading && <ProductList items={loadedProducts} />}
        </main>    
    </React.Fragment>
)

export default App;


// Imports ------------------------------------------------------------<<<>>>

// util.js
export default "adnasdosflake1";
// app.js
import apiKey from "./util.js";

// util.js
export default "adnasdosflake1";
export let apiKey = "adnasdosflake1";
export let abc = "abc";
// app.js
import { apiKey, abc } from "./util.js;

import * as util from "./ulti.js";  // Import in a single object
console.log(util.apiKey);
console.log(util.abc);

import { apiKey, abc as content } from "./util.js";  // aliasas
console.log(content);


// Objects and classes  -------------------------------------------------<<<>>>

// app.js
const user = {
    name: "Max",
    age: 34,
    greet() {
        console.log("Hello");
        console.log(this.age)
    }
};

console.log(user.name);
user.greet();

// OUTPUT
Max 
Hello!
34

class User {  // Blueprint to create Object
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log('Hi!');
    }
}

const user1 = new User("Manuel", 35);
console.log(user1);
user1.greet()

// OUTPUT
User {name: "Manuel", age:35, constructor: Object}
Hi!


// Arrays  ---------------------------------------------------------<<<>>>

const hobbies = ["Sports", "Cooking", "Reading"]; console.log(hobbies[0]);

const index = hobbies.findIndex((item) => {
    return item === "Sports";
});
console.log(index); // Output 0

const index = hobbies.findIndex((item) => item === "Sports");
console.log(index); // Output 0

const editedHobbies = hobbies.map((item) => item + "!");
const editedHobbies = hobbies.map((item) => ({ text: item }));
console.log(editedHobbies);

function transformToObjects(numberArray) {
    // Todo: Add your logic
    // should return an array of objects
    // console.log(numberArray);
    const arrayVal = numberArray.map((item) => ({val: item}));
    return arrayVal;
}

// Destructuring  --------------------------------------------------<<<>>>

const { name: userName, age } = {
    name: "Max",
    age: 34
};
console.log(userName);
console.log(age);
const hobbies = ["Sports", "Cooking"];
const newHobbies = ["Reading"];
const mergedHobbies = [...hobbies, ...newHobbies];
console.log(mergedHobbies);

const user = {
    name: "Max";
    age: 34
};
const extendUser = {
    isAdmin: true,
    ...user
};
console.log(extendedUser);

// Functions as values  -----------------------------------------------<<<>>>

function handleTimeout() {
    console.log("Timed out!");
}
function handleTimeout2 = () => {
    console.log("Timed out ... again!");
}
setTimeout(handleTimeout, 2000);
setTimeout(handleTimeout2, 3000);

setTimeout(() => {
    console.log('More timing out...');
}, 4000);

function greeter(greetFn) {     // passing function in function
    greetFn();
}
greeter(() => console.log("Hi"));

For OBJECTS n ARRAYs, teh memory address is stored in the variable
i.e. Objects = Reference Values

// Children Props  ---------------------------------------------------<<<>>>

TabButton.jsx
export default function TabButton(props) {
    return <li><button>{ props.children }</button></li>;
}

CoreConcepts.jsx
<section id="examples">
    <h2>Examples</h2>
    <menu>
        <TabButton>Components</TabButton>
        <TabButton>
            <div>
                <h2></h2>
            </div>
        </TabButton>
    </menu>
</section>

------ OR -----

// Using Attributes  ---------------------------------------------------<<<>>>

<TabButton label="Components"></TabButton>

function TabButton({ label }) {
    return <button>{label}</button>;
}

// Passing Custom Arguments to Event function  --------------------------<<<>>>

fucntion App() {
    function handleSelect(selectedButton) {
        console.log(selectedButton)
    }
}

<TabButton onSelect={() => handleSelect('components')}>Components</TabButtons>
<TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButtons>
<TabButton onSelect={() => handleSelect('props')}>Props</TabButtons>
<TabButton onSelect={() => handleSelect('state')}>State</TabButtons>


// Final -----
// TabButton.jsx
export default function TabButton({ children, onSelect, isSelected }) {
    console.log('TABBUTTON COMPONENT EXECUTING');
    return (
        <li>
            <button className={ isSelected ? 'active' : undefined } onClick={onSelect}>
                {children}
            </button>
        </li>
    );
}

// App.jsx
<section id="examples">
    <h2>Examples</h2>
    <menu>
        <TabButton 
            isSelected={selectedTopic === 'components'}
            onSelect={() => handleSelect('components')}> 
        Components 
        </TabButton>
        <TabButton 
            isSelected={selectedTopic === 'jsx'}
            onSelect={() => handleSelect('jsx')}> 
        JSX
        </TabButton>
    </menu>