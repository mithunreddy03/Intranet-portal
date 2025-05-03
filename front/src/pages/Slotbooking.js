import React, { useState } from "react";
import "./Slotbooking.css";

const lecturers = ["Dr. Rahul", "Dr. Mahipal", "Dr. Manoj"];
const timeSlots = [
  "9:00 AM - 10:00 AM",
  "11:00 AM - 12:00 PM",
  "2:00 PM - 3:00 PM",
];

const Slotbooking = () => {
  const [selectedLecturer, setSelectedLecturer] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const [purpose, setPurpose] = useState("");
  const [success, setSuccess] = useState(false);

  const handleBooking = (e) => {
    e.preventDefault();

    if (!selectedLecturer || !selectedDate || !selectedTimeSlot || !purpose) {
      alert("Please fill all the fields.");
      return;
    }

    console.log("Slot Booked:", {
      selectedLecturer,
      selectedDate,
      selectedTimeSlot,
      purpose,
    });

    setSuccess(true);
    setSelectedLecturer("");
    setSelectedDate("");
    setSelectedTimeSlot("");
    setPurpose("");
  };

  return (
    <div className="slot-booking-wrapper">
      <h2>Book a Lecture Slot</h2>
      <form onSubmit={handleBooking} className="booking-form">
        <div className="section">
          <label>Select Lecturer:</label>
          <div className="options">
            {lecturers.map((lec) => (
              <div
                key={lec}
                className={`option-card ${
                  selectedLecturer === lec ? "selected" : ""
                }`}
                onClick={() => setSelectedLecturer(lec)}
              >
                {lec}
              </div>
            ))}
          </div>
        </div>

        <div className="section">
          <label>Select Date:</label>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>

        <div className="section">
          <label>Select Time Slot:</label>
          <div className="options">
            {timeSlots.map((slot) => (
              <div
                key={slot}
                className={`option-card ${
                  selectedTimeSlot === slot ? "selected" : ""
                }`}
                onClick={() => setSelectedTimeSlot(slot)}
              >
                {slot}
              </div>
            ))}
          </div>
        </div>

        <div className="section">
          <label>Purpose:</label>
          <textarea
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
            placeholder="Why do you want to meet?"
            rows="4"
          />
        </div>

        <button type="submit">Confirm Booking</button>

        {success && (
          <p className="success-message">Lecture slot booked successfully!</p>
        )}
      </form>
    </div>
  );
};

export default Slotbooking;
