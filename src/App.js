import './App.css';
import Heading from './components/Heading';
import Quantity from './components/Quantity';
import Textchanger from './components/Textchanger';

function App() {
  return (
    <>
    <div className="container">
    <Heading title="NEW BOX"/>
    <Quantity/>
    </div>

    <div className="container">
    <Heading title="TEXT TO UPPERCASE"/>
    <Textchanger/> 
    </div>
    </>
  );
}

export default App;
