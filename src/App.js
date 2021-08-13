import './App.css';
import Card from './component/cards/Card';
import Header from './component/header/Header';
import Navbar from './component/navbar/Navbar';
import {data} from './Data';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      {/* <Card placeName={data[0].title} placeImageSrc={data[0].image} placeImageAlt={data[0].title}/> */}

      {data.map((x)=>(<Card placeName={x.title} placeImageSrc={x.image} placeImageAlt={x.title} placeText={x.desc}/>))}
     
    </div>
  );
}

export default App;
