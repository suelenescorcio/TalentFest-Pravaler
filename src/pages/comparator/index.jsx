import { useEffect, useState } from 'react';
import Input from '../../components/input';
import Header from '../../components/header';
import CoursesCard from '../../components/coursesCard';
import { getCourses, getStates } from '../../services/api';
import Select from '../../components/select';

function Comparator() {
  const [dataStates, setDataStates] = useState([]);
  const [courses, setCourses] = useState([]);
  const [text, setText] = useState('');

  function filterCourses(data, text) {
    let courseFiltered = data.filter((course) => course.name === text);
    console.log(courseFiltered);
  }

  useEffect(() => {
    getStates()
    .then((response) => response.json())
    .then((data) => {
      const states = data.states;
      setDataStates(states);
      console.log(data, 'data');
    });
  }, []);

  useEffect(() => {
    getCourses()
      .then((response) => response.json())
      .then((data) => {
        setCourses(data.courses);
        filterCourses(courses, text);
      });
  }, [text]);

  // console.log(institutions);
  filterCourses(courses, 'Administração');


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
      <Select options={dataStates} />
      <CoursesCard courses={courses} />
    </>
  );
}

export default Comparator;
