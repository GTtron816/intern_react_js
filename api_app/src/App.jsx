import React, { useEffect, useState } from 'react';

function HPchars() {
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
    <div className="container">
      <h1>Harry Potter Characters</h1>
      < div className="search-bar">
        <input
          type="text"
          placeholder="Search by character  name"
          value={search}
          onChange={handleSearch}
        />
        
      </div>
      <div className='pageCards'>
      {filteredData.map((character) => (
        <div className = 'cards'key={character.name}>
          <h2>{character.name}</h2>
          <img src={character.image.length <=0 ? "https://via.placeholder.com/150": character.image} alt={character.name} />
          <p>House: {character.house}</p>
          <p>Gender: {character.gender}</p>
          <p>Species: {character.species}</p>
          <p>DOB: {character.dateOfBirth}</p>
          <p>Ancestry: {character.ancestry}</p>
          <p>Eye Color: {character.eyeColour}</p>
          <p>Wizard: {character.wizard == true && "Yes"} {character.wizard == false && "No"}</p>
          <p>Actor: {character.actor}</p>
          <p>Alive: {character.alive == true && "Yes"} {character.alive == false && "Deceased"}</p>
        </div>
      ))}
        </div>      
     
    </div>
  );
}

export default HPchars;