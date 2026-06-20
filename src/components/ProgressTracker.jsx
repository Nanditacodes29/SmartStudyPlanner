import { useState } from "react";

function ProgressTracker({ subjects }) {

  const [progress, setProgress] =
    useState({});

  const updateProgress =
    (subjectName, value) => {

      setProgress({
        ...progress,
        [subjectName]: value,
      });

    };

  return (
    <div>
      <h3>Progress Tracker</h3>

      {subjects.map((subject, index) => (

        <div key={index}>

          <p>
            {subject.name}
            {" - "}
            {progress[subject.name] || 0}%
          </p>

          <input
            type="range"
            min="0"
            max="100"
            value={
              progress[subject.name] || 0
            }
            onChange={(e) =>
              updateProgress(
                subject.name,
                e.target.value
              )
            }
          />

          <br />
          <br />

        </div>

      ))}
    </div>
  );
}

export default ProgressTracker;