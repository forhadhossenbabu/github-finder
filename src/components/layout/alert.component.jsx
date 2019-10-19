import React from "react";

const Alert = ({ alert }) =>
  alert !== null && (
    <div className={`alert alert-${alert.type}`}>{alert.msg}</div>
  );

export default Alert;
