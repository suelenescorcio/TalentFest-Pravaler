import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import Input from '../../components/input';
import Header from '../../components/header';
import CoursesCard from '../../components/coursesCard';
import {
  getCampus,
  getCourses,
  getInstitutions,
  getStates,
} from '../../services/api';
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
      });
  }, []);

  useEffect(() => {
    getCampus()
      .then((response) => response.json())
      .then((data) => {
        const dataCampus = data.campus;
        setCampus(dataCampus);
      });
  }, []);

  useEffect(() => {
    getStates()
      .then((response) => response.json())
      .then((data) => {
        const states = data.states;
        setDataStates(states);
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

  const handleComparator = () => {
    setCourseSelected([]);
  };

  // const handleInstitutions = (e) => {
  //   setInstitutions(e.target.value);
  //   filterCourses(filterInstituitions(institutions), courses);
  // };

  const handleReset = () => {
    setText('');
    setInstitutions([]);
    setCampus([]);
    getCourses()
      .then((response) => response.json())
      .then((response) => {
        setCourses(response.courses);
      });
  };

  const navigate = useNavigate();

  return (
    <>
      <main>
        <Header className="logo-comparator" />
        <FaArrowLeft size="45" color="#FF6312" cursor='pointer' onClick={() => {
                navigate('/home');
              }} />
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
        <section className='container-table'>
        <Table arrCourse={courseSelected} />
        <Button type='click' onClick={handleComparator} className='button-reset-comparation'>Refazer comporativo</Button>
        </section>
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
