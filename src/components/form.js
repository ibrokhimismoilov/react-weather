import React from "react";

const Form = (props) => (
    <form className="form-row" onSubmit={props.weatherMethod}>
        <div className="form-group col-8">
            <input type="text" className="form-control" name="city" placeholder="Shahar" />
        </div>
        <div className="form-group col-4">
            <button className="btn btn-primary">Olish</button>
        </div>
    </form>
);

export default Form;
