import "./Form.css";
import Question from "./Question";

const Form = () => {
    return (
        <div className="form-box">
            <Question question="What soft-skills does the candidate possess ?" 
            value1="Communication" value2="Story Teller" value3="Clear Thoughts" value4="Attitude"/>
        </div>
    );
}

export default Form;