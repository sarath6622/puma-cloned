import './Promotion.css';

function Promotion(props) {
  return (
    <div className="Promotion">
      <h3>{props.title}</h3>
      <p>Discount auto-applied at checkout</p>
    </div>
  );
}

export default Promotion;
