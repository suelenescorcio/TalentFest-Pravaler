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

function Comparator() {
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
    // fetchStates();
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
    setInstitutions([]);
    setCampus([]);
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

  return (
    <>
      <main>
        <Header className="logo-comparator" />
        <FaArrowLeft
          size="45"
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
          <Select options={institutions} onChange={filterInstituitions} />
          <Select options={campus} onChange={filterCampus} />
          <Button type="click" onClick={handleReset} className="button-reset">
            Limpar Campos
          </Button>
        </section>
        <section className="container-table">
          <Table arrCourse={courseSelected} />
          <Button
            type="click"
            onClick={handleComparator}
            className="button-reset-comparation"
          >
            Refazer comporativo
          </Button>
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
