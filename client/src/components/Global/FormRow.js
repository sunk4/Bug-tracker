const FormRow = ({ type, name, value, handleChange, labelText }) => {
  return (
    <div>
      <label className="form-label" htmlFor={name}>
        {labelText || name}
      </label>
      <input
        className="form-input"
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
      />
    </div>
  )
}

export default FormRow
