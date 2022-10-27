import Display from '../Display/Display';
import ColorBoxes from '../ColorBoxes/ColorBoxes';
import './App.css';

const App = () => (
  <div className='container'>
    <h1>Use color boxes to change color</h1>
    <Display />
    <ColorBoxes />
  </div>
);

export default App;
