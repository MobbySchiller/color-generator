import { useSelector } from 'react-redux';
import './Display.css';

const Display = () => {
    const colorsToDisplay = useSelector(state => state.color);
    const { red, green, blue } = colorsToDisplay;

    const valueToHex = (color) => {
        const toHex = color.toString(16);
        const hex = toHex < 10 ? `0${toHex}` : toHex;
        return hex;
    }

    const rgbToHex = (r, g, b) => {
        return ('#' + valueToHex(r) + valueToHex(g) + valueToHex(b));
    }

    const colorHex = rgbToHex(red, green, blue);
    const colorRGB = `rgb(${red}, ${green}, ${blue})`;

    return (
        <div className='color-display' style={{ backgroundColor: colorRGB }}>
            <p className='color-display__hex'>{colorHex}</p>
        </div>
    );
};

export default Display;