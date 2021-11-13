import './App.css';
import React, {useState} from 'react'
import Container1 from './components/Container1';
import Container2 from './components/Container2';
import Table from './components/table';

function App() {
 const [inputData, setInputData] = useState({});
 const [selectedCard, setSelectedCard] = useState([]);
 
  const saveInputData = (enteredInputData) => {
    setInputData(enteredInputData)
    console.log(inputData);
  }

  const selectedCardData = (selected) => {
    setSelectedCard([...new Set([...selectedCard, selected])]);
    setInputData({...inputData,selectedCard})
  }
  return (
    <div className='app'>
      <div className="container">
      <Container1 data={inputData} onSelectData={selectedCardData}></Container1>
      <Container2 onSubmitForm={saveInputData}></Container2>
    </div>
    {selectedCard.length>0 ? <Table data={inputData}></Table> : <></>}
    </div>
  );
}

export default App;
