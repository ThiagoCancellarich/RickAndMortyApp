import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import axios from 'axios';
import { useState } from 'React';


function App() {
   const [characters, SetCharacters] = useState([]);

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
   const onClose = (id) => {
      SetCharacters(
         characters.filter(char => {
           return char.id!== Number(id)
   }))
   };

   return (
      <div className='App'>         
         <Cards characters={characters} onClose={onClose} />
         <Nav onSearch={onSearch} />
         
      </div>
   );
}

export default App;
