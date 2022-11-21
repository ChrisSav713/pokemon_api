import './App.css';
import React, { useEffect } from 'react'

function App() {
  const [myState, setMyState] = React.useState([])

// useEffect(() => {
//   fetch('https://swapi.dev/api/people')
//   .then(response => response.json())
//   .then(response => setMyState(response.results))
//   .catch(() => setErr("Error fetching data"))
// }, [])

useEffect(() => {
  fetch('https://pokeapi.co/api/v2/pokemon/?limit=807')
  .then(response =>  response.json())
  .then(response => setMyState(response.results))
}, [])

  return (
    <div className="App">
      {myState.length > 0 && myState.map((item, index) => {
        return (<p key={index}>{item.name}</p>)
      })}
    </div>
  );
}

export default App;
