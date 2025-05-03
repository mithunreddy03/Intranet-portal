import React from "react";
import { useParams } from "react-router-dom";
import "./ClubDetails.css";

const clubsData = {
  "yoga-club": {
    name: "Yoga Club",
    description: "Join the Yoga Club to relax, meditate, and stretch into wellness.",
    updates: [
      { title: "Morning Yoga Session", date: "2023-10-15", details: "Join us for a refreshing morning yoga session at 7 AM." },
      { title: "Meditation Workshop", date: "2023-10-20", details: "Learn meditation techniques to improve focus and reduce stress." },
    ],
    events: [
      { name: "Yoga Retreat", date: "2023-11-05", registrationLink: "/register/yoga-retreat" },
    ],
  },
  "outreach-club": {
    name: "Outreach Club",
    description: "The Outreach Club focuses on community service and social impact.",
    updates: [
      { title: "Blood Donation Camp", date: "2023-10-18", details: "Participate in our blood donation camp and save lives." },
    ],
    events: [
      { name: "Community Clean-Up Drive", date: "2023-11-10", registrationLink: "/register/cleanup-drive" },
    ],
  },
  // Add more clubs here...
};

const ClubDetails = () => {
  const { clubId } = useParams();
  const club = clubsData[clubId];

  if (!club) {
    return <div>Club not found!</div>;
  }

  return (
    <div className="club-details-container">
      <h1>{club.name}</h1>
      <p className="club-description">{club.description}</p>

      <section className="club-updates">
        <h2>Latest Updates</h2>
        <ul>
          {club.updates.map((update, index) => (
            <li key={index}>
              <h3>{update.title}</h3>
              <p><strong>Date:</strong> {update.date}</p>
              <p>{update.details}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="club-events">
        <h2>Upcoming Events</h2>
        <ul>
          {club.events.map((event, index) => (
            <li key={index}>
              <h3>{event.name}</h3>
              <p><strong>Date:</strong> {event.date}</p>
              <a href={event.registrationLink} className="register-button">Register</a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default ClubDetails;