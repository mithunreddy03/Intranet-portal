import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const AdminClubs = () => {
  const [showForm, setShowForm] = useState(false);
  const [clubName, setClubName] = useState("");
  const [clubImage, setClubImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [error, setError] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [founderName, setFounderName] = useState("");
  const [creationDate, setCreationDate] = useState("");

  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setClubImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!clubName.trim() || !category.trim() || !description.trim() || !founderName.trim() || !creationDate || !clubImage) {
      setError("All fields are required");
      return;
    }
    setError("");

    const formData = new FormData();
    formData.append("clubName", clubName);
    formData.append("category", category);
    formData.append("description", description);
    formData.append("founderName", founderName);
    formData.append("creationDate", creationDate);
    formData.append("clubImage", clubImage);

    fetch("http://localhost:5000/api/clubs", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((data) => {
            throw new Error(data.message || "Failed to add club");
          });
        }
        return response.json();
      })
      .then((data) => {
        alert("Club added successfully!"); // Ensure success message is shown
        setShowForm(false);
        setClubName("");
        setCategory("");
        setDescription("");
        setFounderName("");
        setCreationDate("");
        setClubImage(null);
        setImagePreview(null);
      })
      .catch((err) => {
        console.error("Error during fetch:", err);
        alert(err.message);
      });
  };

  return (
    <div
      className="admin-clubs-container"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "linear-gradient(135deg, #f3ec78, #af4261)",
        color: "#333",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          marginBottom: "40px",
          color: "#fff",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
        }}
      >
        Admin Club Management
      </h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <button
          className="new-club-button"
          style={{
            width: "150px",
            height: "150px",
            fontSize: "1.2rem",
            borderRadius: "12px",
            background: "linear-gradient(45deg, #6a11cb, #2575fc)",
            color: "white",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
          onClick={() => navigate("/admin-clubs/new")}
        >
          New Club
        </button>

        <button
          className="new-event-button"
          style={{
            width: "150px",
            height: "150px",
            fontSize: "1.2rem",
            borderRadius: "12px",
            background: "linear-gradient(45deg, #ff512f, #dd2476)",
            color: "white",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "scale(1.1)";
            e.target.style.boxShadow = "0 12px 20px rgba(0, 0, 0, 0.3)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "0 8px 15px rgba(0, 0, 0, 0.2)";
          }}
        >
          New Event
        </button>

        <button
          className="clubs-info-button"
          style={{
            width: "150px",
            height: "150px",
            fontSize: "1.2rem",
            borderRadius: "12px",
            background: "linear-gradient(45deg, #34e89e, #0f3443)",
            color: "white",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "scale(1.1)";
            e.target.style.boxShadow = "0 12px 20px rgba(0, 0, 0, 0.3)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "0 8px 15px rgba(0, 0, 0, 0.2)";
          }}
        >
          Clubs Info
        </button>
      </div>

      {showForm && (
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            background: "#fff",
            padding: "30px",
            borderRadius: "12px",
            boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)",
            animation: "fadeIn 0.5s ease-in-out",
          }}
        >
          <h2 style={{ color: "#333" }}>Add New Club</h2>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <input
            type="text"
            placeholder="Enter Club Name"
            value={clubName}
            onChange={(e) => setClubName(e.target.value)}
            style={{
              padding: "10px",
              width: "300px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
          />
          <input
            type="text"
            placeholder="Enter Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={{
              padding: "10px",
              width: "300px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
          />
          <textarea
            placeholder="Enter Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{
              padding: "10px",
              width: "300px",
              height: "100px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
          />
          <input
            type="text"
            placeholder="Enter Founder Name"
            value={founderName}
            onChange={(e) => setFounderName(e.target.value)}
            style={{
              padding: "10px",
              width: "300px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
          />
          <input
            type="date"
            value={creationDate}
            onChange={(e) => setCreationDate(e.target.value)}
            style={{
              padding: "10px",
              width: "300px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{
              padding: "10px",
              width: "300px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
          />
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Preview"
              style={{ width: "150px", height: "150px", borderRadius: "8px" }}
            />
          )}
          <button
            type="submit"
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              borderRadius: "8px",
              background: "linear-gradient(45deg, #6a11cb, #2575fc)",
              color: "white",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default AdminClubs;