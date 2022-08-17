import * as React from "react";

const Spinner = (props) => (
  <>
    <svg className="spinner" viewBox="0 0 50 50" {...props}>
      <circle className="path" cx={25} cy={25} r={20} fill="none" />
    </svg>
  </>
);

export default Spinner;
