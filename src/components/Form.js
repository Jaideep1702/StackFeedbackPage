import "./Form.css";
import Question from "./Question";

const Form = () => {
    return (
        <div className="form-box">
            <Question question="What soft-skills does the candidate possess ?" 
            value1="Communication" value2="Story Teller" value3="Clear Thoughts" value4="Attitude"/>
            
            <Question question="Which tech-skills does the candidate has?" 
            value1="Java" value2="AWS" value3="NextJS" value4="React"/>

            <Question question="What are some points you think that the candidate lacks ?" 
            value1="Responsive" value2="Friendly Relation" value3="Problem Solving" value4="Confidence"/>
        </div>
    );
}

export default Form;