import './style.css';

function Select({ onChange, options, value }) {
  return (
    <>
      <select onChange={onChange} className='select-option'>
      <option value="" disabled>
          Selecione
        </option>
        {options &&
         options.map((option, index) => {
          return (
            <option key={index} value={value}>
              {option.name}
            </option>
          );
        })}
      </select>
    </>
  );
}

export default Select;
