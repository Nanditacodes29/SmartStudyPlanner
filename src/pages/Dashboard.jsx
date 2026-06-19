import { useState } from "react";
import SubjectForm from "../components/SubjectForm";
import ExamForm from "../components/ExamForm";
import CombinedData from "../components/CombinedData";

function Dashboard() {
  const [subjects, setSubjects] = useState([]);
  const [exams, setExams] = useState([]);

  return (
    <div>
      <h2>Dashboard</h2>

      <SubjectForm />

      <hr />

      <ExamForm />

      <hr />

      <p>Subjects Count: {subjects.length}</p>
      <p>Exams Count: {exams.length}</p>

      <CombinedData />
    </div>
  );
}

export default Dashboard;