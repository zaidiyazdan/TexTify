import React from "react";

export default function Alert(props) {
    const capitilize = (word)=>{
        const low = word.toLowerCase();
        return low[0].toUpperCase() + low.slice(1);
    }

  return (
    //early exit.
    props.alert && 
    <div>
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{capitilize(props.alert.type)} </strong>
        {props.alert.msg}
      </div>
    </div>
  );
}
