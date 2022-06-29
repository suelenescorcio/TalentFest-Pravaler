import { useEffect, useState } from 'react';
import Input from '../../components/input';
import Header from '../../components/header';
import CoursesCard from '../../components/coursesCard';
// import Select from '../../components/select';
import { getInstitutions } from '../../services/api';

function Comparator() {
  //const [dataStates, setDataStates] = useState([]);
  const [institutions, setInstitutions] = useState([]);
  const [text, setText] = useState('');

  function filterCourses(data, text) {
    let courseFiltered = data.filter((response) => response.name.includes(text));
    return courseFiltered;
    //console.log(courseFiltered);
  }

  useEffect(() => {
    getInstitutions()
      .then((response) => response.json())
      .then((response) => {
        setInstitutions(response.institutions);
        filterCourses(institutions, text);
      });
  }, [text]);

  // console.log(institutions);
  //filterCourses(institutions, 'UNISUL');

  return (
    <>
      <Header className="" />
      <Input
        type="search"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Pesquise o curso ou a instituição"
        className="search-input"
      />
      <CoursesCard institutions={institutions} />
    </>
  );
}

export default Comparator;
