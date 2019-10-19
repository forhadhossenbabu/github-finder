import React from "react";

const Alert = ({ alert }) =>
  alert !== null && (
    <div className={`alert alert-${alert.type}`}>
      <label style={{ color: "red", fontSize: "20px" }}>&#10071;</label>
      {alert.msg}
    </div>
  );

export default Alert;
