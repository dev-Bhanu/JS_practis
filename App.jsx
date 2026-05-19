import React from 'react';
import { useState,useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)
   const [users, setUsers]=useState([])
  useEffect(()=>{
    async function fetchData(){
      try{
        const res=await fetch("https://jsonplaceholder.typicode.com/posts");
        const data= await res.json();
        setUsers(data);
       
      }catch(error){
        console.log(error)
      }
    }
    fetchData();
  },[])
  
  const styles = {
    main: {
      padding: '20px',
    },
    title: {
      color: '#5C6AC4'
    },
    user:{
      color:"red",
      width:"200px",
      border:"1px solid black",
      padding:"5px",
      margin:"4px",
      
    }
  };

  return (
    <div style={styles.main}>
      <h1 style={styles.title}>Hello, World!</h1>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count {count}
        </button>
         
      </div>
      <ul>
      {users.map((item)=>(
        <li key={item.id} style={styles.user}>{item.title}</li>
        
      ))}
      </ul>
    </div>
  )
}

export default App
