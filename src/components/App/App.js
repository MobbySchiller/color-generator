import ColorBoxes from '../ColorBox/ColorBox';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Use color boxes to change color</h1>
      <div className="color-display"></div>
      <div className="color-boxes">
        <ColorBoxes />
        <ColorBoxes />
        <ColorBoxes />
      </div>
    </div>
  );
}

export default App;
