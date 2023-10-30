import logo from './logo.svg';
import './App.css';
import {useState} from "react"
import TextItem from './components/TextItem/TextItem';


function App() {
  const [names, setNames] = useState(["Hello"])
  const [ages, setAges] = useState([23])



  function addItem(){
    names.push(Math.random().toString(36).substring(2,7))
    setNames(names)
    ages.push(Math.floor(Math.random() * 100))
    setAges(ages)
  }

  function updateDetails(name, age){
    //Remove current name and replace with blank
    let namearray = names.filter(item=>item!=name)
    let agearray = ages.filter(item=>item!==age)
    setNames(namearray)
    setAges(agearray)
  }

  //Whenever name is updated, print it

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Welcome to the EazyDraft test application.
        </p>
        <div onClick={addItem}>Click to add a field</div>
        {
          names.map((name, index)=><TextItem 
          keys={index} 
          names={name} 
          ages={ages}
          updateDetails={updateDetails}/>)
        }
      </header>
    </div>
  );
}

export default App;
