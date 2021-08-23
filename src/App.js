// Opção 1 - Classe:
// import React, { Component } from 'react';
// import './App.css';

// import LoadImage from './img/giphy.webp';
// import LogoRick from './img/logo.png';

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
    
//     if (isLoading) {
//     return (
//       <img src={LoadImage} alt="loading" />
//     )}

//     return (
//       <div className="content">
//         <div className="container">
//           <div className="logo-content">
//             <img src={LogoRick} alt="Logo"  height="100px" width="auto"/>
//           </div>
//           <div className="cards-content">
//               {characters.map(({id, name, image}) => (
//                 <div className="card" key={id}>
//                   <img src={image} alt={name} width="180px" height="auto" />
//                   <h4>{name} </h4>
//                 </div>
//               ))}
//           </div>
//         </div>
//       </div>
//     )}}

// export default App;

// Opção 2 - Componente Funcional:

import axios from 'axios';
import React, { useState, useEffect } from 'react'

import './App.css';

import LoadImage from './img/giphy.webp';
import LogoRick from './img/logo.png';

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

  if (isLoading) {
    return (
      <img src={LoadImage} alt="loading" />
    )
  }

  return (
    <div className="content">
      <div className="container">
        <div className="logo-content">
          <img src={LogoRick} alt="Logo"  height="100px" width="auto"/>
        </div>
        <div className="cards-content">
            {data.map(({id, name, image}) => (
              <div className="card" key={id}>
                <img src={image} alt={name} width="180px" height="auto" />
                <h4>{name} </h4>
              </div>
            ))}
        </div>
      </div>
    </div>)}