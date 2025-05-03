import React, { useState } from "react";
import "./complaintFeedback.css";

const Feedback = () => {
  const [lecturer, setLecturer] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("/submitFeedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ lecturer, feedback }),
    });
    alert("Feedback submitted!");
    setLecturer("");
    setFeedback("");
  };

  return (
    <div className="form-page">
      <h2>Submit Feedback</h2>
      <form onSubmit={handleSubmit}>
        <label>Lecturer Name:</label>
        <input
          type="text"
          value={lecturer}
          onChange={(e) => setLecturer(e.target.value)}
          required
        />
        <br />
        <label>Feedback:</label>
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          required
        />
        <br />
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

export default Feedback;