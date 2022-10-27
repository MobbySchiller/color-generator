import './ColorBox.css';

const ColorBoxes = () => {

    return (
        <div className="color-box">
            <h2>Red</h2>
            <span className="color-value">0</span>
            <div className="color-box__buttons">
                <button className="color-box__button">-10</button>
                <button className="color-box__button">-1</button>
                <button className="color-box__button">Reset</button>
                <button className="color-box__button">1</button>
                <button className="color-box__button">10</button>
            </div>
        </div>
    )
}

export default ColorBoxes;