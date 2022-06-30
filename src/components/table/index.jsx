import { useNavigate } from 'react-router-dom';
import './style.css';

function Table({ arrCourse }) {
    const navigate = useNavigate();

    function nameCourse(courseSelectedee) {
      navigate('/dice');
      localStorage.setItem('Name', courseSelectedee.name);
      }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th className="th">Curso</th>
            {/* <th className="th">Instituição</th>
            <th className="th">Campus</th> */}
            <th className="th">Mensalidade</th>
            <th className="th">Nota MEC</th>
            <th className="th">Qtd. Semestre</th>
            <th className="th">Faixa Salarial</th>
            <th className="th">Quero Esse</th>
          </tr>
        </thead>
        <tbody>
          {arrCourse.map((course) => {
            return (
              <tr key={course.id}>
                <td>{course.name}</td>
                {/* <td>{course.instituionId}</td>
                <td>{course.campusId}</td> */}
                <td>R$ {course.monthly_payment}</td>
                <td>{course.mec_avaliation}</td>
                <td>{course.semesters}</td>
                <td>R$ {course.salary_range}</td>
                <td>
                  <button
                    type="click"
                    onClick={() => nameCourse(course)}
                    className="button-select"
                  >
                    Selecionar
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Table;
