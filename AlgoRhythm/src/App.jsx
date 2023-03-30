import InputForm from './components/InputForm'
import { useState } from 'react';
import './App.css'
import './globals.css'

function App() {
  const [contracts, setContracts] = useState([])

// POST request handling
const postContract = async obj => {
  const contract = await fetch(`database URL`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });
  const data = await contract.json();
  console.log(data);
  setContracts([...contracts, data])

}


  return (
    <>
    <h1 className="title">AlgoRhythm Candidate Search</h1>
    <InputForm postContract={postContract} />
    </>
  )
}

export default App
