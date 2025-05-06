import React from "react";
import "./NewClubForm.css";

const NewClubForm = () => {
  return (
    <div className="new-club-form-container">
      <h2 className="form-title">Create a New Club</h2>
      <form className="new-club-form">
        <label className="form-label">Club Name:</label>
        <input type="text" className="form-input" placeholder="Enter club name" required />

        <label className="form-label">Description:</label>
        <textarea className="form-textarea" placeholder="Enter club description" required></textarea>

        <label className="form-label">Category:</label>
        <select className="form-select" required>
          <option value="">Select category</option>
          <option value="Sports">Sports</option>
          <option value="Arts">Arts</option>
          <option value="Technology">Technology</option>
        </select>

        <label className="form-label">Date:</label>
        <input type="date" className="form-input" required />

        <button type="submit" className="form-button">Create Club</button>
      </form>
    </div>
  );
};

export default NewClubForm;
