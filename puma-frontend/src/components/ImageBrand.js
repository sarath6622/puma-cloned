import './ImageBrand.css';

function ImageBrand(props) {

  const { imageUrl, alignItems , divColor, display} = props;

  const style = {
    backgroundImage: `url(${imageUrl})`,
    alignItems: alignItems,
    color: divColor
  };

  const button = {
    display: display
  };



  return (
    <div className="image" style={style}>
      <h1>NEW & TRENDING</h1>
      <h2>LEVEL UP YOUR STYLE GAME</h2>
      <div className='buttonGroup' style={button}>
        <button>MEN</button>
        <button>WOMEN</button>
        <button>KIDS</button>
      </div>
      
    </div>
  );
}

export default ImageBrand;
