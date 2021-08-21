// Opção 1 - Classe:
// import React, { Component } from 'react';

// const axios = require('axios').default;

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       characters: [],
//       isLoading: true,
//     };
//   }

//   getCharacters = () => {
//     axios.get('https://rickandmortyapi.com/api/character')
//     .then((response) => {
//       this.setState({
//         characters: response.data.results,
//         isLoading: false,
//       })
//     })
//     .catch((error) => console.log(error))
//   }

//   componentDidMount() {
//     this.getCharacters()
//   }

//   render() {
//     const { characters, isLoading } = this.state;
//     return (
//       <>
//         <h1>Conheça os personagens de Rick and Morty:</h1>
//         <>
//           {isLoading ? <h2>Carregando...</h2> :
//             characters.map((character) => (
//               <React.Fragment key={character.id}>
//                 <h3>{character.name}</h3>
//                 <img src={character.image} alt={character.name} />
//               </React.Fragment>
//             ))
//           }
//         </>
//       </>
//     );
// }
// }

// export default App;

// Opção 2 - Componente Funcional:

import axios from 'axios';
import React, { useState, useEffect } from 'react'

export default function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
    .then((response) => {
       setData(response.data.results)
       setIsLoading(false)
     })
    .catch((error) => console.log(error))
  }, [])

return (
  <>
    <h1>Conheça os personagens de Rick and Morty:</h1>
     {isLoading ? <h2>Carregando...</h2> :
      data.map(({name, image}) => (
        <React.Fragment key={name}>
          <h3>{name}</h3>
          <img src={image} alt={name} />
        </React.Fragment>
      ))}
  </>
);}