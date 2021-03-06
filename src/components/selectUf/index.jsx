import './style.css';

function SelectUf({ onChange, options, children}) {
  return (
    <>
      <select onChange={onChange} className='select-option'>
      <option disabled selected>
      {children}
        </option>
        {options &&
         options.map((option, index) => {
          return (
            <option key={index} value={option.instituionId}>
            {option.uf}
          </option>
          );
        })}
      </select>
    </>
  );
}

export default SelectUf;
