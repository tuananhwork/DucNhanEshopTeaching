import React, { useState } from "react";

function InputBox({ label, value, onChange }) {
  return (
    <div>
      <label>{label}: </label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

function Form() {
  const [text, setText] = useState("");

  return (
    <div>
      <h3>Lifting state up demo</h3>
      <InputBox label="Input 1" value={text} onChange={setText} />
      <InputBox label="Input 2" value={text} onChange={setText} />
      <p>Giá trị chung: {text}</p>
    </div>
  );
}

export default Form;
