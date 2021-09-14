import Slider from "./components/Slider";
import banner1 from "././assets/Banner1.png";
import banner2 from "././assets/Banner2.png";
import banner3 from "././assets/Banner3.png";


function App() {
  return (
    <div className="App">
        <Slider>
            <img src={banner1} alt='banner1'/>
            <img src={banner2} alt='banner2'/>
            <img src={banner3} alt='banner3'/>
        </Slider>
    </div>
  );
}

export default App;
