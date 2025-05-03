import React, { useState } from "react";
import "./complaintFeedback.css";

const Complaint = () => {
  const [category, setCategory] = useState("Management");
  const [complaint, setComplaint] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("/submitComplaint", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ category, complaint }),
    });
    alert("Complaint submitted!");
    setComplaint("");
  };

  return (
    <div className="form-page">
      <h2>Submit a Complaint</h2>
      <form onSubmit={handleSubmit}>
        <label>Category:</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Management">Management</option>
          <option value="Hostel">Hostel</option>
          <option value="Food">Food</option>
        </select>
        <br />
        <label>Complaint:</label>
        <textarea
          value={complaint}
          onChange={(e) => setComplaint(e.target.value)}
          required
        />
        <br />
        <button type="submit">Submit Complaint</button>
      </form>
    </div>
  );
};

export default Complaint;