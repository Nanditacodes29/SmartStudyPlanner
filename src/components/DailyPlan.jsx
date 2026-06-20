function DailyPlan({ subjects, exams }) {

  const calculateDaysLeft = (examDate) => {
    const today = new Date();
    const exam = new Date(examDate);

    const difference = exam - today;

    return Math.ceil(
      difference /
      (1000 * 60 * 60 * 24)
    );
  };

const studyPlan = exams
  .filter((exam) => !exam.completed)
  .map((exam) => {

    const matchingSubject =
      subjects.find(
        (subject) =>
          subject.name === exam.subject
      );

    const difficulty =
      matchingSubject
        ? Number(matchingSubject.difficulty)
        : 1;

    const daysLeft =
      calculateDaysLeft(exam.date);

    const priority =
      difficulty /
      Math.max(daysLeft, 1);

    return {
      subject: exam.subject,
      priority: priority,
    };
  });

  studyPlan.sort(
    (a, b) =>
      b.priority - a.priority
  );

  return (
    <div>
      <h3>Daily Study Plan</h3>

      <ul>

        {studyPlan.map(
          (item, index) => {

            let hours = 1;

            if (index === 0)
              hours = 3;

            else if (index === 1)
              hours = 2;

            return (
              <li key={index}>
                {item.subject}
                {" → "}
{hours} {hours === 1 ? "Hour" : "Hours"}              </li>
            );
          }
        )}

      </ul>
    </div>
  );
}

export default DailyPlan;