import './App.css';

function App() {
  return (
    <>
    <h1 className="heading">QUNATITY BOX</h1>
    <div className="quantity-box">
      <button className="quantity-button" name="minus" type="button">-</button>
      <input type="number" name="quantity" className="quantity-input" min="1" value="1" />
      <button className="quantity-button" name="plus" type="button">+</button>
    </div>
    </>
  );
}

export default App;
