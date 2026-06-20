function PriorityList({ subjects, exams }) {

  const calculateDaysLeft = (examDate) => {
    const today = new Date();
    const exam = new Date(examDate);

    const difference =
      exam - today;

    const daysLeft =
      Math.ceil(
        difference /
        (1000 * 60 * 60 * 24)
      );

    return daysLeft;
  };

  return (
    <div>
      <h3>Priority Ranking</h3>

      <ul>
        {exams
  .filter((exam) => !exam.completed)
  .map((exam, index) => {
          const daysLeft =
  calculateDaysLeft(exam.date);

const matchingSubject =
  subjects.find(
    (subject) =>
      subject.name === exam.subject
  );

const difficulty =
  matchingSubject
    ? Number(
        matchingSubject.difficulty
      )
    : 1;

const priority =
  (
    difficulty /
    Math.max(daysLeft, 1)
  ).toFixed(2);

          return (
           <li key={index}>
  {exam.subject}
  {" | "}
  Difficulty: {difficulty}
  {" | "}
  Days Left: {daysLeft}
  {" | "}
  Priority: {priority}
</li>
          );
        })}
      </ul>

    </div>
  );
}

export default PriorityList;