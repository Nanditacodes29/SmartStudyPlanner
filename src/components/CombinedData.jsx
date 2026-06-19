function CombinedData({ subjects, exams }) {
  return (
    <div>
      <h3>Study Overview</h3>

      <h4>Subjects</h4>

      <ul>
        {subjects.map((subject, index) => (
          <li key={index}>
            {subject.name} - Difficulty {subject.difficulty}
          </li>
        ))}
      </ul>

      <h4>Exams</h4>

      <ul>
        {exams.map((exam, index) => (
          <li key={index}>
            {exam.subject} → {exam.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CombinedData;