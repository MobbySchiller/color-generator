import { useSelector, useDispatch } from 'react-redux';
import { colorActions } from '../../shop/color-slice';
import './ColorBox.css';

const ColorBoxes = (props) => {
    const { color } = props;
    const value = useSelector(state => state.color[color])
    const dispatch = useDispatch();

    const handleRemoveTen = () => dispatch(colorActions.remove({ color, value: 10 }));
    const handleRemoveOne = () => dispatch(colorActions.remove({ color, value: 1 }));
    const handleAddOne = () => dispatch(colorActions.add({ color, value: 1 }));
    const handleAddTen = () => dispatch(colorActions.add({ color, value: 10 }));
    const handleReset = () => dispatch(colorActions.reset({ color }));


    return (
        <div className="color-box">
            <h2>{color}</h2>
            <span className="color-value">{value}</span>
            <div className="color-box__buttons">
                <button onClick={handleRemoveTen} className="color-box__button">-10</button>
                <button onClick={handleRemoveOne} className="color-box__button">-1</button>
                <button onClick={handleReset} className="color-box__button">Reset</button>
                <button onClick={handleAddOne} className="color-box__button">1</button>
                <button onClick={handleAddTen} className="color-box__button">10</button>
            </div>
        </div>
    )
}

export default ColorBoxes;