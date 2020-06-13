import React,{useState} from 'react';
import './App.css';
import {Order} from './order.js'

export default function App() {
  let [count , setCount]= useState(1)
  let [isMorning,setMorning]=useState(true)
  return (
    <div className={`box ${isMorning ? 'daylight' : ''}` }>
      <h1> day time={isMorning ? 'morning' : 'night'}</h1>
         <Order Counter={count}/>
         <br/>
    <button onClick={()=>setCount(count +1)}>  Update Counter </button>
    <button onClick={()=>setMorning(!isMorning)}> update day</button>
    </div>
  );
}

