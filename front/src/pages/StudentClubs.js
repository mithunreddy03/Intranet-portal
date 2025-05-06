import React, { useEffect, useState } from "react";
import "./style.css";

const StudentClubs = () => {
  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch clubs");
        }
        return response.json();
      })
      .then((data) => setClubs(data))
      .catch((err) => console.error("Error fetching clubs:", err));
  }, []);

  return (
    <div className="student-clubs-container" style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Student Clubs</h1>
      <div className="clubs-grid" style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
        {clubs.map((club) => (
          <div key={club._id} className="club-card" style={{ width: "200px", textAlign: "center" }}>
            <img
              src={`http://localhost:5000/${club.image}`}
              alt={club.name}
              style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "8px" }}
            />
            <h3 style={{ marginTop: "10px" }}>{club.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentClubs;