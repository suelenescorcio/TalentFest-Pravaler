
function Input ({type, value, onChange, placeholder, className, maxLength}) {
  return (
    <input type={type} value={value} onChange={onChange} placeholder={placeholder} className={className} maxLength={maxLength} />
  );
}

export default Input;
