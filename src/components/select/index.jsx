import './style.css';

function Select({ onChange, options, children }) {
  return (
    <>
      <select onChange={onChange} className='select-option'>
      <option disabled selected>
          {children}
        </option>
        {options &&
         options.map((option, index) => {
          return (
            <option key={index} value={option.id}>
              {option.name}
            </option>
          );
        })}
      </select>
    </>
  );
}

export default Select;
