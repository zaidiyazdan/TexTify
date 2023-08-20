// modeGreen={modeGreen} modeBlue={modeBlue} modeRed={modeRed} modeDark={modeDark}
import React from "react";

export default function Theams(props) {
  return (
    <div
      className={`htmlForm-check htmlForm-switch text-${
        props.mode === "dark" ? "light" : "dark"
      }`}
    >
      <span className="fs-4 m-2">Themes:</span>
      <input
        type="radio"
        className="btn-check"
        name="options-outlined"
        id="btn-check-outlined"
        onClick={props.modeBlue}
        autoComplete="off"
      />
      <label className="btn btn-outline-primary" htmlFor="btn-check-outlined">
        Blue
      </label>

      <input
        type="radio"
        className="btn-check "
        name="options-outlined"
        id="btn-check-2-outlined"
        onClick={props.modeDark}
        autoComplete="off"
      />
      <label
        className="btn btn-outline-secondary m-2"
        htmlFor="btn-check-2-outlined"
      >
        Dark
      </label>

      <input
        type="radio"
        className="btn-check"
        name="options-outlined"
        id="success-outlined"
        onClick={props.modeGreen}
        autoComplete="off"
      />
      <label className="btn btn-outline-success m-2" htmlFor="success-outlined">
        Green
      </label>

      <input
        type="radio"
        className="btn-check"
        name="options-outlined"
        id="danger-outlined"
        onClick={props.modeRed}
        autoComplete="off"
      />
      <label className="btn btn-outline-danger m-2" htmlFor="danger-outlined">
        Red
      </label>
    </div>
  );
}
