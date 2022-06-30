import './style.css';
import Button from '../button';

function CoursesCard({courses, courseSelected, setCourseSelected}) {

  const handleSelectedCourse = (course) => {
    setCourseSelected([...courseSelected, course]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
      courses.map((course) => {
          return (
            <li className='card-courses' key={course.id}>
              <p><span>Nome do Curso: </span>{course.name}</p>
              <p><span>Descrição: </span>{course.description}</p>
              <p><span>Semestres: </span>{course.semesters}</p>
              <p><span>Mensalidade: </span>R$ {course.monthly_payment}</p>
              <p><span>Nota do MEC: </span>{course.mec_avaliation}</p>
              <p><span>Faixa Salarial: </span>R$ {course.salary_range}</p>
              <Button type='click' onClick={() => handleSelectedCourse(course)} className='button-course'>Comparar</Button>
            </li>
          );
        })
  );
}

export default CoursesCard;
