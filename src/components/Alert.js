import React from "react";

function Alert(props) {
    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  if (props.alert) {
    return (
      <>
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show d-flex justify-content-between`}
          role="alert"
        >
          <div>
            <strong>{capitalize(props.alert.type)}</strong>: {props.alert.message}
          </div>
        </div>
      </>
    );
  }
}

export default Alert;
