import { useState } from "react";

function SubjectForm() {
  const [subjectName, setSubjectName] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [subjects, setSubjects] = useState([]);

  const addSubject = () => {
    if (!subjectName || !difficulty) {
      alert("Please fill all fields");
      return;
    }

    const newSubject = {
      name: subjectName,
      difficulty: difficulty,
    };

    setSubjects([...subjects, newSubject]);

    setSubjectName("");
    setDifficulty("");
  };

  return (
    <div>
      <h3>Add Subject</h3>

      <input
        type="text"
        placeholder="Enter subject name"
        value={subjectName}
        onChange={(e) => setSubjectName(e.target.value)}
      />

      <br />
      <br />

      <input
        type="number"
        placeholder="Difficulty (1-5)"
        min="1"
        max="5"
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
      />

      <br />
      <br />

      <button onClick={addSubject}>
        Add Subject
      </button>

      <p>Subject: {subjectName}</p>
      <p>Difficulty: {difficulty}</p>

      <h3>Subjects List</h3>

      <p>Total Subjects: {subjects.length}</p>

      <ul>
        {subjects.map((subject, index) => (
          <li key={index}>
            {subject.name} - Difficulty {subject.difficulty}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SubjectForm;