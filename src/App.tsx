import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListGroup from './components/ListGroup'

function App(){
    let items = ["Lagos", "Paris", "London", "Toronto", "Belgium", "New York"];

    const handleSelectItem=(items:string)=>{
        console.log(items);
    }


return<div><ListGroup items={items} heading='Cities' onSelectItem={handleSelectItem}/></div>
  
}

export default App
