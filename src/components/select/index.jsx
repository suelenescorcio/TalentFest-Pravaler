import './style.css';

function Select({ onChange, options }) {
  return (
    <>
      <select onChange={onChange} className='select-option'>
      <option disabled value=''>
          Selecione
        </option>
        {options &&
         options.map((option, index) => {
          return (
            <option key={index} value={option.id}>
              {option.name ? option.name : option.uf}
            </option>
          );
        })}
      </select>
    </>
  );
}

export default Select;
