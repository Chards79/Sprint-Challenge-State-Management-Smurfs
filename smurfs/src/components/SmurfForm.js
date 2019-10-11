import React, { useState } from "react";

const SmurfForm = props => {
    const [input, setInput] = useState("");

    const changeHandler = event => {
        setInput(event.target.value);
    };

    const submitHandler = event => {
        event.preventDefault();
        props.addSmurf(input);
        setInput("");
    };

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input value={input} onChange={changeHandler} />
                <button>Add A Smurf</button>
            </form>
        </div>
    )
}

export default SmurfForm;