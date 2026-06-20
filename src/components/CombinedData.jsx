function CombinedData({ subjects, exams }) {
  return (
    <div className="card">
      <h3>📋 Study Overview</h3>

      <h4>📚 Subjects</h4>

      <div className="center-list">
        {subjects.length === 0 ? (
          <p>No subjects added yet.</p>
        ) : (
          subjects.map((subject, index) => (
            <p key={index}>
              {subject.name} - Difficulty {subject.difficulty}
            </p>
          ))
        )}
      </div>

      <hr />

      <h4>📝 Exams</h4>

      <div className="center-list">
        {exams.length === 0 ? (
          <p>No exams added yet.</p>
        ) : (
          exams.map((exam, index) => (
            <p
  key={index}
  className={
    exam.completed
      ? "completed-exam"
      : ""
  }
>
  {exam.completed ? "✅" : "📚"}{" "}
  {exam.subject} → {exam.date}
</p>
          ))
        )}
      </div>
    </div>
  );
}

export default CombinedData;