import './App.css';
import Data from "./data.js"
import Card from "./Card.js"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthEurope } from "@fortawesome/free-solid-svg-icons";


function App() {
  const cards = Data.map((obj)=>(
    <Card
    title = {obj.title}
    location = {obj.location}
    googleMapsUrl = {obj.googleMapsUrl}
    startDate = {obj.startDate}
    endDate = {obj.endDate}
    description = {obj.description}
    imageUrl = {obj.imageUrl}
    />
    ))
  return (
    <div className="App">
      <nav className='navbar'><FontAwesomeIcon icon={faEarthEurope} className="navlogo" /> my travel journal</nav>
      {cards}
    </div>
  );
}

export default App;
