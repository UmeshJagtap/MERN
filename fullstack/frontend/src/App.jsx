import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import axios from 'axios';

function App() {
  // const [count, setCount] = useState(0);
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get('api/jokes')
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  // console.log(jokes);

  return (
    <>
      <h1>Chai and full stack. | Youtube</h1>
      <p>JOKES: {jokes.length}</p>
      {/* {JSON.stringify(jokes)} */}
      {jokes.map((joke, index) => (
        <div key={joke.id}>
          <h3>{joke.name}</h3>
          <p>{joke.joke}</p>
        </div>
      ))}

      {/* <div key={joke.id}>
        <h3>{joke.title}</h3>
        <p>{joke.content}</p>
      </div> */}
    </>
  );
}

export default App;

//
// Default App
//
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
