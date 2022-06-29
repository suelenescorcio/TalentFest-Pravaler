import './style.css';
import Button from '../button';

function CoursesCard({courses, onclick}) {
  return (
    // <div className='card-courses'>
      courses.map((course, key) => {
          return (
            <li className='card-courses' key={key}>
              <p>Nome do Curso: {course.name}</p>
              <p>Descrição: {course.description}</p>
              <p>Semestres: {course.semesters}</p>
              <p>Mensalidade: {course.monthly_payment}</p>
              <p>Nota do MEC: {course.mec_avaliation}</p>
              <p>Faixa Salarial: {course.salary_range}</p>
              <Button type='click' onClick={onclick} className='button-course'>Comparar</Button>
            </li>
          );
        })

    // </div>
  );
}

export default CoursesCard;
