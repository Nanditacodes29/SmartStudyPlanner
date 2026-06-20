import { useState, useEffect } from "react";
import SubjectForm from "../components/SubjectForm";
import ExamForm from "../components/ExamForm";
import CombinedData from "../components/CombinedData";
import PriorityList from "../components/PriorityList";
import DailyPlan from "../components/DailyPlan";
import ProgressTracker from "../components/ProgressTracker";

function Dashboard() {
  const [subjects, setSubjects] = useState(() => {
    const savedSubjects =
      localStorage.getItem("subjects");

    return savedSubjects
      ? JSON.parse(savedSubjects)
      : [];
  });

  const [exams, setExams] = useState(() => {
    const savedExams =
      localStorage.getItem("exams");

    return savedExams
      ? JSON.parse(savedExams)
      : [];
  });

  const [progress, setProgress] = useState(() => {
    const savedProgress =
      localStorage.getItem("progress");

    return savedProgress
      ? JSON.parse(savedProgress)
      : {};
  });

  useEffect(() => {
    localStorage.setItem(
      "subjects",
      JSON.stringify(subjects)
    );
  }, [subjects]);

  useEffect(() => {
    localStorage.setItem(
      "exams",
      JSON.stringify(exams)
    );
  }, [exams]);

  useEffect(() => {
    localStorage.setItem(
      "progress",
      JSON.stringify(progress)
    );
  }, [progress]);

  const clearAllData = () => {
    localStorage.removeItem("subjects");
    localStorage.removeItem("exams");
    localStorage.removeItem("progress");

    setSubjects([]);
    setExams([]);
    setProgress({});
  };

return (
  <div className="card">

    <h2>📊 Dashboard</h2>

    <button
      className="clear-btn"
      onClick={clearAllData}
    >
      🗑 Reset Planner
    </button>

    <hr />

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


      <div className="stats">

  <div className="stat-card">
    <h3>📚 Subjects</h3>
    <h2>{subjects.length}</h2>
  </div>

  <div className="stat-card">
    <h3>📝 Exams</h3>
    <h2>{exams.length}</h2>
  </div>

</div>

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
        progress={progress}
        setProgress={setProgress}
      />
    </div>
  );
}

export default Dashboard;