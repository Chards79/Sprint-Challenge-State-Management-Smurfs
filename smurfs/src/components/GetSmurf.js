import React, { useEffect } from "react";
import { connect } from "react-redux";
import Smurf from "./Smurf";

const GetSmurf = props => {
    useEffect(() => {
        props.fetchSmurf();
    }, []);
    if (props.isFetching) {
        return <h2>Smurfing your Smurf...</h2>
    }
    return (
        <div>
            {props.error && <p>{props.error}</p>}
            <Smurf smurf={props.GetSmurf} />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        getSmurf: state.getSmurf,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchSmurf })(GetSmurf);