import SubjectForm from "../components/SubjectForm";
import ExamForm from "../components/ExamForm";

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>

      <SubjectForm />

      <hr />

      <ExamForm />
    </div>
  );
}

export default Dashboard;