import React, { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
export default function HPchars() {
  const [data, setData] = useState([]);
  const [search,setSearch]=useState('');
  useEffect(() => {
    fetch('https://hp-api.onrender.com/api/characters')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  const filteredData = data.filter((character) =>
    character.name.toLowerCase().includes(search.toLowerCase())
);


  return (
    <>
      <h1>Harry Potter Characters</h1>
      < div className="search-box">
        <input
          type="text"
          style={{width: 400+'px'}}
          className="form-control"
          placeholder="Search Character"
          value={search}
          onChange={handleSearch}
        />
        



        
      </div>
      <div className="row row-cols-5"  >
      {filteredData.map((character) => (
         <div className="col" style={{margin: 20+'px'}} >
        <CharacterData key={character.id} character={character}/>
        </div>
  ))}
   </div>

  

     
    </>
  );
}

