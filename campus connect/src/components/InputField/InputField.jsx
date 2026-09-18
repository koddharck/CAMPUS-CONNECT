import './InputField.css'

function InputField({ label, type = 'text', value, onChange }) {
  return (
    <div className="input-field">
      <p className="input-field-label">{label}</p>
      <input className="input-field-box" type={type} value={value} onChange={onChange} />
    </div>
  )
}

export default InputField
