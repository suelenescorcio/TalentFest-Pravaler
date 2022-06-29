import { useEffect, useState } from 'react';
import Input from '../../components/input';
import Header from '../../components/header';
import CoursesCard from '../../components/coursesCard';
import {
  getCourses,
  getInstitutions,
  getStates,
  getCampus,
} from '../../services/api';
import Select from '../../components/select';
import Table from '../../components/table';
import Footer from '../../components/footer';
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
      response.name.includes(text));
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

  // const testCourses = (event) => {


  //   if(event.keyCode === 8){
  //     return getCourses();
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener('keydown', testCourses);
  // }, []);

  const handleInput = (e) => {
    setText(e.target.value);
    filterCourses(courses, text);
  };



  const handleCourse = (course) => {
    const courseFind = courses.find((item) => item.id === course.id);
    // setCourseSelected([...course]);
    if (courseFind) {
      courseFind.name += 1;
    } else {
      course.name = 1;
      courses.push(course);
    }
    setCourseSelected([...courses]);
  };

  return (
    <>
      <main>
        <Header className="logo-comparator" />
        <Input
          type="search"
          value={text}
          onChange={handleInput}
          placeholder="Pesquise o curso ou a instituição"
          className="search-input"
        />
        <Select options={institutions} />
        <Select options={campus} />
        <Select options={dataStates} />
        {courseSelected.map((course) => {
          <Table course={course} />;
        })}
        <section className="section-cards">
          <CoursesCard
            courses={courses}
            onclick={() => handleCourse(courses)}
          />
        </section>
        <Footer />
      </main>
    </>
  );
}

export default Comparator;
