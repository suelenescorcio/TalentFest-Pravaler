import './style.css';

function Select({ onChange, options }) {
  return (
    <>
      <select onChange={onChange} className='select-option'>
      <option value="" disabled>
          Selecione
        </option>
        {options &&
         options.map((option, index) => {
          return (
            <option key={index} value={option.name}>
              {option.name}
            </option>
          );
        })}
      </select>
    </>
  );
}

export default Select;
