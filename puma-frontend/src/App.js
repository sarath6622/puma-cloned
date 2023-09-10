import './App.css';
import Promotion from './components/Promotion';
import Header from './components/Header';
import ImageBrand from './components/ImageBrand';

function App() {
  return (
    <div className="App">
      <Header />
      <Promotion title="Extra 10% off on orders above ₹3499"/>
      <ImageBrand />

      <Promotion title="Extra 15% off on orders above ₹4499"/>

    </div>
  );
}

export default App;
