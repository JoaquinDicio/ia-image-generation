import React from "react";

export default function FormField({
  placeholder,
  value,
  handleChange,
  label,
  isSurprise,
  name,
}) {
  return (
    <div className="form-field">
      {label && <label className="d-block mb-1">{label}</label>}
      {isSurprise && <button className="btn btn-secondary">Surprise me</button>}
      <input
        name={name}
        className="form-field-input mb-3"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
}
