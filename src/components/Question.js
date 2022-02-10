import { useState } from "react";


const Question = (props) => {

    // making a boolean check value
    const [check, setCheck] = useState(false);

    const enableSlider = () => {
        setCheck(!check);
    }

    return (
        <div className="quest">
            <h2>{ props.question }</h2>

            
            <input type="checkbox" value={props.value1} onChange={enableSlider}/>
            <label>{props.value1}</label>
            {check && <div><input type="range" min="0" max="10" /></div>}

            <br/>
            
            <input type="checkbox" value={props.value2} onChange={enableSlider}/>
            <label>{props.value2}</label>
            {check && <div><input type="range" min="0" max="10" /></div>}

            <br />

            <input type="checkbox" value={props.value3} onChange={enableSlider}/>
            <label>{props.value3}</label>
            {check && <div><input type="range" min="0" max="10" /></div>}

            <br/>

            <input type="checkbox" value={props.value4} onChange={enableSlider}/>
            <label>{props.value4}</label>
            {check && <div><input type="range" min="0" max="10" /></div>}

            <br/>


            <input type="text" placeholder="add your own skills"/>
        </div>
    );
}

export default Question;