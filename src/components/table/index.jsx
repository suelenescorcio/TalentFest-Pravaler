function Table() {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th className="th">Curso</th>
            <th className="th">Instituição</th>
            <th className="th">Campus</th>
            <th className="th">Mensalidade</th>
            <th className="th">Nota MEC</th>
            <th className="th">Qtd. Semestre</th>
            <th className="th">Faixa Salarial</th>
            <th className="th">Quero Esse</th>
          </tr>
        </thead>
        {/* <tbody>
        <tr>
            <td>{course.name}</td>
            <td>{course.instituionId}</td>
            <td>{course.campusId}</td>
            <td>{course.monthly_payment}</td>
            <td>{course.mec_avaliation}</td>
            <td>{course.semesters}</td>
            <td>{course.salary_range}</td>
            <td>Botão</td>
        </tr>
        </tbody> */}
      </table>
    </>
  );
}

export default Table;
