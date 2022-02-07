import "./Form.css";

const Form = () => {
    return (
        <div className="form-box">
            <form>
                <label for="soft-skills">What soft skills does the candidates possess?</label><br />

                <input type="radio" id="soft-skills" name="skills" value="Communication"/>
                <label for="communication">Communication</label><br />

                <input type="radio" id="soft-skills" name="skills" value="Clear Thoughts"/>
                <label for="clear">Clear Thoughts</label><br />

                <input type="radio" id="soft-skills" name="skills" value="Confidence"/>
                <label for="Confidence">Confidence</label><br />

                <input type="radio" id="soft-skills" name="skills" value="Story Teller"/>
                <label for="story">Story Teller</label><br />
                

            </form>
        </div>
    );
}

export default Form;