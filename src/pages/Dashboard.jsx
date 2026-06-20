import { useState } from "react";
import SubjectForm from "../components/SubjectForm";
import ExamForm from "../components/ExamForm";
import CombinedData from "../components/CombinedData";
import PriorityList from "../components/PriorityList";
import DailyPlan from "../components/DailyPlan";
import ProgressTracker from "../components/ProgressTracker";


function Dashboard() {
  const [subjects, setSubjects] = useState([]);
  const [exams, setExams] = useState([]);

  return (
    <div>
      <h2>Dashboard</h2>

      <SubjectForm
        subjects={subjects}
        setSubjects={setSubjects}
      />

      <hr />

      <ExamForm
        exams={exams}
        setExams={setExams}
      />

      <hr />

      <p>Subjects Count: {subjects.length}</p>
      <p>Exams Count: {exams.length}</p>

      <CombinedData
        subjects={subjects}
        exams={exams}
      />
      <hr />

<PriorityList
  subjects={subjects}
  exams={exams}
/>
<hr />

<DailyPlan
  subjects={subjects}
  exams={exams}
/>

<hr />

<ProgressTracker
  subjects={subjects}
/>

    </div>
  );
}

export default Dashboard;