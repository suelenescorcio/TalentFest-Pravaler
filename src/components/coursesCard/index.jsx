// import "./style.css";

function CoursesCard({ institutions }) {
  return institutions.map((institution) => {
    <>
      <li>
        <p>Faculdade: {institution.name}</p>
        {institution.map((info) => {
          <p>Cidade/UF: {info.city / info.uf}</p>;
          {
            info.map((course) => {
              return (
                <>
                  <p>Nome do Curso: {course.name}</p>
                  <p>Descrição: {course.description}</p>
                  <p>Semestres: {course.semesters}</p>
                  <p>Mesalidade: {course.monthly_payment}</p>
                  <p>Nota do MEC: {course.mec_avaliation}</p>
                  <p>Faixa Salarial: {course.salary_range}</p>
                  <p>Comentários: {course.comments}</p>
                </>
              );
            });
          }
        })}
      </li>
    </>;
  });
}

export default CoursesCard;
