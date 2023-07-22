import {useLocation} from "react-router-dom";
import React, { useEffect, useState } from 'react';
export default function Chara(){
    const location =useLocation();
    const charId=location.state.id;
    const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://hp-api.onrender.com/api/character/'+charId)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);


  return (
    <>

      <div className="row row-cols-5"  >
      {data.map((character) => (
           <div className="col" style={{margin: 20+'px'}} >
            
          <div key={character.id}>
          <img src={character.image.length <=0 ? "https://via.placeholder.com/150": character.image} alt={character.name} 
          style={{height: 300+'px',width:300+'px'}}
          />
          <div>
          <p className='card-text'>Character: {character.name}</p>
          <p className='card-text'>House: {character.house}</p>
          <p className="card-text">Gender: {character.gender}</p>
          <p className="card-text">Species: {character.species}</p>
          <p className="card-text">DOB: {character.dateOfBirth}</p>
          <p className="card-text">Ancestry: {character.ancestry}</p>
          <p className="card-text">Eye Color: {character.eyeColour}</p>
          <p className="card-text">Wizard: {character.wizard == true && "Yes"} {character.wizard == false && "No"}</p>
          <p className="card-text">Actor: {character.actor}</p>
          <p className="card-text">Alive: {character.alive == true && "Yes"} {character.alive == false && "Deceased"}</p>
  </div> </div> </div>
  ))}
   </div>

  

     
    </>
  );

  
    
}