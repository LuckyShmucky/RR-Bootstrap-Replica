import './App.css';
import DisplayNav from './components/NavBar'
import DisplayCard from './components/cards';
import StoreListings from './components/StoreListings';
import {Browser as Router, Link, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
     
       <DisplayNav/>
       {/* <DisplayCard/>
       <StoreListings/> */}
         
     
       
    </div>
  );
}

export default App;



