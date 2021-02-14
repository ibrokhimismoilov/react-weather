import React from "react";

const Weather = (props) => (
  <div>
    {props.city && (
      <div className="text">
        <p>
          Joylashuv: {props.city}, {props.country}
        </p>
        <p>Tempratura: {props.temp}</p>
        <p>Davlenuiya: {props.pressure}</p>
        <p>Quyosh botishi: {props.sunset}</p>
      </div>
    )}
    <p> {props.error} </p>
  </div>
);
export default Weather;
