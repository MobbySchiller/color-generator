import ColorBoxes from '../ColorBox/ColorBox';
import './App.css';
import { useSelector } from 'react-redux';

function App() {
  const colorsToDisplay = useSelector(state => state.color);
  const { red, green, blue } = colorsToDisplay;
  const colorRGB = `rgb(${red}, ${green}, ${blue})`;

  return (
    <div className="container">
      <h1>Use color boxes to change color</h1>
      <div className="color-display" style={{ backgroundColor: colorRGB }}></div>
      <div className="color-boxes">
        <ColorBoxes color='red' />
        <ColorBoxes color='green' />
        <ColorBoxes color='blue' />
      </div>
    </div>
  );
}

export default App;
