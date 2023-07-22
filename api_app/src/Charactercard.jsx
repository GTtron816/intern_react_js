import React from 'react';
import { useNavigate } from "react-router-dom"



export default function Charactercard(props){
const navigate=useNavigate()
function charaDetails(e,id){
  e.preventDefault();
  navigate("/chara",{state : {id : id}})
}
const character=props.character;
return(    
    <div  className="card" style={{width: 18+'rem'}}  key={character.id}
    onClick={(e)=> charaDetails(e,character.id)}
    >
    <img src={character.image.length <=0 ? "https://via.placeholder.com/150": character.image} alt={character.name} 
    style={{height: 300+'px'}}
    
    />
    <div className="card-body">
    <p className='card-text'>Character: {character.name}</p>
    <p className='card-text'>House: {character.house}</p>
    <p className="card-text">Gender: {character.gender}</p>
</div> </div> 
)


}