import './style.css';
import Button from '../button';

function CoursesCard({courses, onclick}) {
  return (
      courses.map((course, key) => {
          return (
            <li className='card-courses' key={key}>
              <p><span>Nome do Curso: </span>{course.name}</p>
              <p><span>Descrição: </span>{course.description}</p>
              <p><span>Semestres: </span>{course.semesters}</p>
              <p><span>Mensalidade: </span>R$ {course.monthly_payment}</p>
              <p><span>Nota do MEC: </span>{course.mec_avaliation}</p>
              <p><span>Faixa Salarial: </span>R$ {course.salary_range}</p>
              <Button type='click' onClick={onclick} className='button-course'>Comparar</Button>
            </li>
          );
        })
  );
}

export default CoursesCard;
