import { useEffect, useState } from 'react';
import Input from '../../components/input';
import Header from '../../components/header';
import CoursesCard from '../../components/coursesCard';
import { getCourses, getInstitutions, getStates } from '../../services/api';
import Select from '../../components/select';
import Table from '../../components/table';
import Footer from '../../components/footer';
import Button from '../../components/button';
import './style.css';

function Comparator() {
  const [dataStates, setDataStates] = useState([]);
  const [courses, setCourses] = useState([]);
  const [institutions, setInstitutions] = useState([]);
  const [courseSelected, setCourseSelected] = useState([]);
  const [text, setText] = useState('');

  function filterCourses(data, text) {
    let courseFiltered = data.filter((response) =>
      response.name.includes(text));
      setCourses(courseFiltered);
      return courseFiltered;
    //console.log(courseFiltered);
  }
//   function filterCourses(idsCursos, courses) {
//     const filtros = idsCursos;
//     const cursosFiltrados = [];
//     courses.forEach((course) => {
//         if(filtros.includes(course.instituionId)){
//             cursosFiltrados.push(course.name);
//         }
//     });
//     return cursosFiltrados;
// }

  // function filterInstituitions(filtro)  {
  //   filtro.filter((response) => response.name === filtro);
  //   const instituicaoFiltrada = [];
  //   institutions.forEach((ies) => {
  //       if(ies.name.toLocaleLowerCase().trim().includes(filtro)) {
  //           instituicaoFiltrada.push(ies.id);
  //         }
  //   });
  //   return instituicaoFiltrada;
  // }


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

  // const handleInstitutions = (e) => {
  //   setInstitutions(e.target.value);
  //   filterCourses(filterInstituitions(institutions), courses);
  // };

  const handleReset = () => {
    setText('');
    setInstitutions([]);
    getCourses()
      .then((response) => response.json())
      .then((response) => {
        setCourses(response.courses);
      });
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
        <section className="section-selects">
          <Input
            type="search"
            value={text}
            onChange={handleInput}
            placeholder="Pesquise o curso"
            className="search-input"
          />
          <Select value={institutions} options={institutions} />
          <Select options={dataStates} />
          <Button type="click" onClick={handleReset} className="button-reset">
            Limpar Campos
          </Button>
        </section>
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
