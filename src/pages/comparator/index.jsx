import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import Input from '../../components/input';
import Header from '../../components/header';
import CoursesCard from '../../components/coursesCard';
import { getCampus, getCourses, getInstitutions } from '../../services/api';

import Select from '../../components/select';
import Table from '../../components/table';
import Footer from '../../components/footer';
import Button from '../../components/button';
import './style.css';
import SelectUf from '../../components/selectUf';

function Comparator() {

  const [dataStates, setDataStates] = useState([]);
  const [courses, setCourses] = useState([]);
  const [institutions, setInstitutions] = useState([]);
  const [campus, setCampus] = useState([]);
  const [courseSelected, setCourseSelected] = useState([]);
  const [text, setText] = useState('');

  function filterCourses(data, text) {
    let courseFiltered = data.filter((response) =>
      response.name.toLowerCase().includes(text)
    );
    setCourses(courseFiltered);
    return courseFiltered;
  }

  const fetchInstitutions = async () => {
    await getInstitutions()
      .then((response) => response.json())
      .then((data) => {
        const dataInstitution = data.institutions;
        setInstitutions(dataInstitution);
      });
  };

  const fetchCampus = async () => {
    await getCampus()
      .then((response) => response.json())
      .then((data) => {
        const dataCampus = data.campus;
        setCampus(dataCampus);
      });
  };

  const fetchStates = async () => {
    await getCampus()
      .then((response) => response.json())
      .then((data) => {
        const states = data.campus;
        setDataStates(states);
      });
  };

  const fetchCourses = async () => {
    await getCourses()
      .then((response) => response.json())
      .then((response) => {
        setCourses(response.courses);
      });
  };

  useEffect(() => {
    fetchInstitutions();
    fetchCampus();
    fetchStates();
    fetchCourses();
  }, []);

  const handleInput = (e) => {
    setText(e.target.value);
    filterCourses(courses, text);
  };

  const handleComparator = () => {
    setCourseSelected([]);
  };

  const handleReset = () => {
    setText('');
    setInstitutions();
    setCampus();
    fetchInstitutions();
    fetchCampus();
    fetchCourses();
  };

  const navigate = useNavigate();

  function filterInstituitions(filtro) {
    const selectedInstitutionId = filtro.target.value;
    const filteredInstituion = courses.filter(
      (course) => course.instituionId === Number(selectedInstitutionId)
    );
    setCourses(filteredInstituion);
  }

  function filterCampus(filtro) {
    const selectedCampusId = filtro.target.value;
    const filteredCampus = courses.filter(
      (course) => course.campusId === Number(selectedCampusId)
    );
    setCourses(filteredCampus);
  }

  function filterUf(filtro)  {
    const selectedUf = filtro.target.value;
    const filteredUf = courses.filter((course) => course.instituionId === Number(selectedUf));
    setCourses(filteredUf);
  }

  return (
    <>
      <main>
        <Header className="logo-comparator" />
        <FaArrowLeft
          size="30"
          color="#FF6312"
          cursor="pointer"
          onClick={() => {
            navigate('/home');
          }}
        />
        <section className="section-selects">
          <Input
            type="search"
            value={text}
            onChange={handleInput}
            placeholder="🔎 Pesquise o curso"
            className="search-input"
          />

        <Select options={institutions} onChange={filterInstituitions} >Instituição</Select>
        <Select options={campus} onChange={filterCampus}>Campus</Select>
        <SelectUf options={dataStates} onChange={filterUf}>UF</SelectUf>

          <Button type="click" onClick={handleReset} className="button-reset">
            Limpar Campos
          </Button>
        </section>
        <section className="container-table">

        {courseSelected.length != 0 &&
        <div className='container-comparator'>
          <h3 className='title-table'>Comparativo de cursos</h3>
          <div className='comparator-table'>
          <Table arrCourse={courseSelected} />
          <Button
            type="click"
            onClick={handleComparator}
            className="button-reset-comparation"
          >
            Refazer comparativo
          </Button>
          </div>
        </div>
        }
        </section>
        <section className="section-cards">
          <h5 className='title-cards'>Selecione os cursos para comparar</h5>
          <div className='container-cards'>
          <CoursesCard
            courses={courses}
            courseSelected={courseSelected}
            setCourseSelected={setCourseSelected}
          />
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}

export default Comparator;
