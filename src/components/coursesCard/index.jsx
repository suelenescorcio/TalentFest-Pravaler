// import "./style.css";

function CoursesCard({ institutions }) {
  return ( institutions.map((institution) => (
    <>
      <li>
        <p>Faculdade: {institution.name}</p>
      </li>
    </>
  ))
  );
}

export default CoursesCard;
