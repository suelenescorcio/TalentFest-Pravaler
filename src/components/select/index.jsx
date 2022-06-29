function Select({ onChange, options }) {
  return (
    <>
      <select onChange={onChange}>
        <option value="" disabled> UF
        </option>
        {options.map((option, index) => {
          return (
            <option key={index} value={option.name}>
              {option.uf}
            </option>
          );
        })}
      </select>
    </>
  );
}

export default Select;
