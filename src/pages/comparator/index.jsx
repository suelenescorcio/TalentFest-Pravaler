import {useEffect, useState} from 'react';
import Input from '../../components/input';
// import Select from '../../components/select';
import { getInstitutions} from '../../services/api';


function Comparator() {
  //const [dataStates, setDataStates] = useState([]);
  const [institutions, setInstitutions] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    if(text === '') {
    getInstitutions()
    .then((response) => response.json())
    .then((data) => {
      //setDataStates(data);
      setInstitutions(data);
      console.log(data, 'data');
    });
  } else if (text !== '' ){
    getInstitutions()
    .then((response) => response.json())
    .then((data) => {
      setInstitutions(data.filter(elem => elem.name === text));
    });
  }
  }, []);

  console.log(institutions, 'instituição');
  //console.log(dataStates, 'states');
  console.log(text);
  return (
    <>
    <Input type='search' value={text} onChange={(e) => setText(e.target.value)}
    placeholder='Pesquise o curso ou a instituição' className='search-input' />
    </>
  );

}

export default Comparator;
