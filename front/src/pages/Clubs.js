import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHome, FaBell, FaSearch, FaUser } from "react-icons/fa";
import "./Clubs.css";

const clubsData = [
  { name: "Yoga Club", image: "/yoga.jpg", link: "/clubs/yoga-club" },
  { name: "Outreach Club", image: "/outreach.jpg", link: "/clubs/outreach-club" },
  { name: "TEDx MU", image: "/tedx.jpg", link: "/clubs/tedx-mu" },
  { name: "Mastershot", image: "/mastershot.png", link: "/clubs/mastershot" },
  { name: "Food Committee", image: "/food.jpg", link: "/clubs/food-committee" },
  { name: "Chess Club", image: "/chess.jpg", link: "/clubs/chess-club" },
];

const Clubs = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const handleNavigation = (link) => {
    try {
      navigate(link);
      setSidebarOpen(false); // Close sidebar after navigation
    } catch (error) {
      console.error("Navigation error:", error);
    }
  };

  return (
    <div className="clubs-page-container" style={{ display: "flex" }}>
      {/* Sidebar */}
      {sidebarOpen && (
        <div className="nav-container">
          <div className="nav-header">
            <img
              src="/more.png"
              alt="Close Sidebar"
              onClick={toggleSidebar}
              style={{ cursor: "pointer" }}
            />
            <img
              src="/mahindra-university-logo.png"
              alt="Mahindra University Logo"
            />
          </div>
          <button className="nav-item" onClick={() => handleNavigation("/")}>
            <FaHome className="icon" />
            <span>Home</span>
          </button>
          <button className="nav-item" onClick={() => handleNavigation("/announcements")}>
            <FaBell className="icon" />
            <span>Announcements</span>
          </button>
          <button className="nav-item" onClick={() => handleNavigation("/search")}>
            <FaSearch className="icon" />
            <span>Search</span>
          </button>
          <button className="nav-item" onClick={() => handleNavigation("/profile")}>
            <FaUser className="icon" />
            <span>Profile</span>
          </button>
        </div>
      )}

      {/* Main Content */}
      <div className="clubs-container">
        {!sidebarOpen && (
          <div className="top-bar">
            <img
              src="/more.png"
              alt="Open Sidebar"
              className="menu-icon"
              onClick={toggleSidebar}
            />
          </div>
        )}

        <div className="header-section">
          <h2>Hi, Tejas</h2>
          <p>Artificial Intelligence B.Tech</p>
        </div>

        <h3 className="clubs-title">Explore Our Clubs</h3>

        {/* Club Grid */}
        <div className="clubs-grid">
          {clubsData.map((club, index) => (
            <div
              className="club-card"
              key={index}
              onClick={() => handleNavigation(club.link)}
            >
              <img src={club.image} alt={club.name} className="club-image" />
              <div className="club-info">
                <span className="club-name">{club.name}</span>
                <button className="view-details-button">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clubs;
