import {useEffect, useState} from 'react';
// import Select from '../../components/select';
import {getStates} from '../../services/api';


function Comparator() {
  const [dataStates, setDataStates] = useState([]);

  useEffect(() => {
    getStates()
    .then((response) => response.json())
    .then((data) => {
      setDataStates(data);
      console.log(data, 'data');
    });
  }, []);

  console.log(dataStates, 'states');
  return (
    <>
    </>
  );
}

export default Comparator;
