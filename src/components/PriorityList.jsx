function PriorityList({ subjects, exams }) {

  const calculateDaysLeft = (examDate) => {
    const today = new Date();
    const exam = new Date(examDate);

    const difference = exam - today;

    return Math.ceil(
      difference /
      (1000 * 60 * 60 * 24)
    );
  };

  return (
    <div className="card">

      <h3>🔥 Priority Ranking</h3>

      <div className="center-list">

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
              <p key={index}>
                {exam.subject}
                {" | "}
                Difficulty: {difficulty}
                {" | "}
                Days Left: {daysLeft}
                {" | "}
                Priority: {priority}
              </p>
            );
          })}

      </div>

    </div>
  );
}

export default PriorityList;