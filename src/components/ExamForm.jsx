import { useState } from "react";

function ExamForm({ exams, setExams }) {  const [subject, setSubject] = useState("");
  const [examDate, setExamDate] = useState("");


  const addExam = () => {
    if (!subject || !examDate) {
      alert("Please fill all fields");
      return;
    }

    const newExam = {
  subject: subject.trim().toUpperCase(),
  date: examDate,
  completed: false,
};

    setExams([...exams, newExam]);

    setSubject("");
    setExamDate("");
  };

  return (
    <div>
      <h3>Add Exam</h3>

      <input
        type="text"
        placeholder="Enter subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />

      <br />
      <br />

      <input
        type="date"
        value={examDate}
        onChange={(e) => setExamDate(e.target.value)}
      />

      <br />
      <br />

      <button onClick={addExam}>
        Add Exam
      </button>

      <p>Subject: {subject}</p>
      <p>Date: {examDate}</p>

      <h3>Exams List</h3>

      <p>Total Exams: {exams.length}</p>

      <ul>
        {exams.map((exam, index) => (
          <li key={index}>
  {exam.completed ? "✅" : "📚"}{" "}
  {exam.subject} → {exam.date}

  {!exam.completed && (
    <button
      onClick={() => {
        const updatedExams = [...exams];

        updatedExams[index] = {
          ...updatedExams[index],
          completed: true,
        };

        setExams(updatedExams);
      }}
    >
      Mark Complete
    </button>
  )}
</li>
        ))}
      </ul>
    </div>
  );
}

export default ExamForm;