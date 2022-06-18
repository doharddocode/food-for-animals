import React from "react";

import './label.sass'

const Label = ({ label: { key = '', value = '' } }) => {
  return (
    <div className="label">
      <div className="label__key">{ key }</div>
      <div className="label__value">{ value }</div>
    </div>
  );
}

export default Label;

