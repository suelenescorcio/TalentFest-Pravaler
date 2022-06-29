import { useEffect, useState } from 'react';
import Input from '../../components/input';
import Header from '../../components/header';
import CoursesCard from '../../components/coursesCard';
import { getCampus, getCourses, getInstitutions, getStates } from '../../services/api';
import Select from '../../components/select';
import Table from '../../components/table';
import Footer from '../../components/footer';
import Button from '../../components/button';
import './style.css';

function Comparator() {

  const [dataStates, setDataStates] = useState([]);
  const [courses, setCourses] = useState([]);
  const [institutions, setInstitutions] = useState([]);
  const [campus, setCampus] = useState([]);
  const [courseSelected, setCourseSelected] = useState([]);
  const [text, setText] = useState('');

  function filterCourses(data, text) {
    let courseFiltered = data.filter((response) =>
      response.name.includes(text)
    );
    setCourses(courseFiltered);
    return courseFiltered;
    //console.log(courseFiltered);
  }

  useEffect(() => {
    getInstitutions()
      .then((response) => response.json())
      .then((data) => {
        const dataInstitution = data.institutions;
        setInstitutions(dataInstitution);
        // console.log(data, 'data');
      });
  }, []);

  useEffect(() => {
    getCampus()
      .then((response) => response.json())
      .then((data) => {
        const dataCampus = data.campus;
        setCampus(dataCampus);
        // console.log(data, 'data');
      });
  }, []);

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
      });
  }, []);

  const handleInput = (e) => {
    setText(e.target.value);
    filterCourses(courses, text);
  };

  const handleReset = () => {
    setText('');
    getCourses()
      .then((response) => response.json())
      .then((response) => {
        setCourses(response.courses);
      });
  };

  // const handleCourse = (course) => {
  //   console.log('Entrei', course);
  //   // console.log('clicou', course.name);
  //   const courseFind = courses.filter((item) => item.id === course.id);
  //   console.log(courseFind,'courseFind');
  //   if(courseFind){
  //     setCourseSelected([...courseSelected, courseFind]);
  //   }
  // };

  return (
    <>
      <main>
        <Header className="logo-comparator" />
        <section className="section-selects">
          <Input
            type="search"
            value={text}
            onChange={handleInput}
            placeholder="Pesquise o curso"
            className="search-input"
          />
          <Select options={institutions} />
        <Select options={campus} />
        <Select options={dataStates} />
          <Button type="click" onClick={handleReset} className="button-reset">
            Limpar Campos
          </Button>
        </section>

          <Table arrCourse={courseSelected} />

        <section className="section-cards">
          <CoursesCard
            courses={courses}
            courseSelected={courseSelected}
            setCourseSelected={setCourseSelected}
          />
        </section>
        <Footer />
      </main>
    </>
  );
}

export default Comparator;
