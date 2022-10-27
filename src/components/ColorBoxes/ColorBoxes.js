import ColorBox from '../ColorBox/ColorBox';
import './ColorBoxes.css';

const ColorBoxes = () => (
    <div className='color-boxes'>
        <ColorBox color='red' />
        <ColorBox color='green' />
        <ColorBox color='blue' />
    </div>
);

export default ColorBoxes;