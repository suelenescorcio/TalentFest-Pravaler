import { useEffect, useState } from 'react';
import Input from '../../components/input';
import Header from '../../components/header';
import CoursesCard from '../../components/coursesCard';
import { getCourses, getStates } from '../../services/api';
import Select from '../../components/select';
import Table from '../../components/table';
import './style.css';

function Comparator() {
  const [dataStates, setDataStates] = useState([]);
  const [courses, setCourses] = useState([]);
  const [text, setText] = useState('');

  function filterCourses(data, text) {
    let courseFiltered = data.filter((response) => response.name.includes(text));
    //setCourses([...courseFiltered]);
    return courseFiltered;
    //console.log(courseFiltered);
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
      .then((response) => {
        setCourses(response.courses);
        filterCourses(courses, text);
      });
  }, [text]);



  return (
    <>
    <main>
      <Header className="logo-comparator" />
      <Input
        type="search"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Pesquise o curso ou a instituição"
        className="search-input"
        />
      <Select options={dataStates} />
      <Table />
        <section className='section-cards'>
      <CoursesCard courses={courses} />
      </section>
      </main>
    </>
  );
}

export default Comparator;