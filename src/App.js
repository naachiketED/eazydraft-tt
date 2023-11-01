import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import Button from '@mui/material/Button';
import Directory from './Directory';
import TextItem from './TextItem';

// Created an object of Directory
let directory = new Directory();

function App() {

  // State for person objects
  const [data, setData] = useState(directory.getList());
  
  // Function for adding person in the list
  function addItem() {
    directory.addItem();
    setData(directory.getList());
  }
  
  //Function for updating person
  function updateDetails(index) {
    directory.updateDetails(index);
    setData(directory.getList());
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo}  className="App-logo" alt="logo" />
        <p>
          Welcome to the EazyDraft test application.
        </p>
        <Button onClick={() => addItem()}>Click to add a field</Button>
        {
          data.map((item, index) => <TextItem  key={index} name={item.getName()} age={item.getAge()} index={index} updateDetails={updateDetails}/>)
        }
      </header>
    </div>
  );
}

export default App;