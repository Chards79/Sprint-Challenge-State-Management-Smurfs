import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const SmurfForm = ({ errors, touched, status }) => {
    // console.log(SmurfForm);
    const [users, setUsers] = useState([]);
    useEffect(() => {
        if (status) {
            setUsers([...users, status]);
        }
    }, [status]);

    return (
        <div className="smurf-form">
            <Form>
                <Field type="text" name="name" placeholder="Smurf Name" />
                {touched.name && errors.name && <p className="error">{errors.name}</p>}
                <Field type="text" name="age" placeholder="Smurf Age" />
                {touched.age && errors.age && (
                    <p className="error">{errors.age}</p>
                )}
                <Field type="text" name="height" placeholder="Smurf Height" />
                {touched.height && errors.height && (
                    <p className="error">{errors.height}</p>
                )}
                <button type="submit">Add A Smurf</button>
            </Form>
        </div>
    );
};

const FormikMyForm = withFormik({
    mapPropsToValues({ name, age, height }) {
        return {
            name: name || "",
            age: age || "",
            height: height || ""
        };
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required("Must Smurf A Name"),
        age: Yup.string().required("Must Smurf An Age"),
        height: Yup.string().required("Must Smurf A Height"),
    }),
    handleSubmit(values, { setStatus }) {
        axios
            .post("http://localhost:3333/smurfs", values)
            .then(res => {
                setStatus(res.data);
                console.log(res.data);
            })
            .catch(err => console.log(err.res));
    }
})(SmurfForm);

export default FormikMyForm;



// import React, { useState } from "react";

// const SmurfForm = props => {
//     const [name, setName] = useState("");
//     const [age, setAge] = useState("");
//     const [height, setHeight] = useState("");

//     const changeHandler = event => {
//         setName(event.target.value);
//     };

//     const submitHandler = event => {
//         event.preventDefault();
//         props.addSmurf(input);
//         setInput("");
//     };

//     return (
//         <div>
//             <form onSubmit={submitHandler}>
//                 <input value={input} onChange={changeHandler} />
//                 <button>Add A Smurf</button>
//             </form>
//         </div>
//     )
// }

// export default SmurfForm;
