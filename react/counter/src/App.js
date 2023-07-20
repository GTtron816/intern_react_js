import { useState } from 'react';
export default function Counter() {
  const [a, varOne] = useState(5);
  const [b, varTwo] = useState(10);
  const [total,setTotal]=useState(0);
  function handleClick() {
   setTotal(a+b);
  }
 

  return (
    <div>
    <form>
      <input type='text'  onChange={e=>varOne(parseInt(e.target.value))}></input>
      <input type='text' onChange={e=>varTwo(parseInt(e.target.value))}></input>
    </form>
    <button onClick={handleClick}>
      Sum is {total} 
    </button>
    </div>
  );
}


