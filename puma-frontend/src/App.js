import './App.css';
import Promotion from './components/Promotion';
import Header from './components/Header';
import ImageBrand from './components/ImageBrand';
import image1 from './components/assets/image.jpg';
import image2 from './components/assets/image2.png';
import image3 from './components/assets/image3.png';


function App() {
  return (
    <div className="App">
      <Header />
      <Promotion title="Extra 10% off on orders above ₹3499"/>
      <ImageBrand imageUrl = {image1} alignItems='flex-end'/>
      <Promotion title="Extra 15% off on orders above ₹4499"/>
      <ImageBrand imageUrl = {image2} alignItems='center' divColor='white' display='none'/>
      <Promotion title="Extra 15% off on orders above ₹4499"/>
      <ImageBrand imageUrl = {image3} alignItems='flex-start' divColor='white' display='none'/>


    </div>
  );
}

export default App;
