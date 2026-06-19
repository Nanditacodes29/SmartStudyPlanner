import { useState } from "react";

function SubjectForm({ subjects, setSubjects }) {  const [subjectName, setSubjectName] = useState("");
  const [difficulty, setDifficulty] = useState("");

  const addSubject = () => {
    if (!subjectName || !difficulty) {
      alert("Please fill all fields");
      return;
    }

    const newSubject = {
      name: subjectName.trim().toUpperCase(),
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

      <select
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
      >
        <option value="">Select Difficulty</option>
        <option value="1">1 - Very Easy</option>
        <option value="2">2 - Easy</option>
        <option value="3">3 - Medium</option>
        <option value="4">4 - Hard</option>
        <option value="5">5 - Very Hard</option>
      </select>

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