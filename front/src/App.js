import React, { useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import StudentDashboard from "./pages/StudentDashboard";
import TeacherDashboard from "./pages/TeacherDashboard";
import Announcements from "./pages/Announcements";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import Clubs from "./pages/Clubs";
import ClubDetails from "./pages/ClubDetails";
import Complaint from "./pages/Complaint";
import Feedback from "./pages/Feedback";
import SlotBooking from "./pages/Slotbooking";
import Courses from "./pages/Courses";
import ComplaintFeedback from "./pages/complaintFeedback";

// Protected route component
const ProtectedRoute = ({ element, requiredRole }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  
  if (!token) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" replace />;
  }
  
  if (requiredRole && role !== requiredRole) {
    // Redirect to appropriate dashboard if role doesn't match
    return <Navigate to={`/${role}-dashboard`} replace />;
  }
  
  return element;
};

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is authenticated
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    if (!token) {
      // If no token, redirect to login
      navigate("/login");
    } else if (role && !window.location.pathname.includes("dashboard")) {
      // If authenticated but not on dashboard, redirect to appropriate dashboard
      navigate(`/${role}-dashboard`);
    }
  }, [navigate]);

  return (
    <Routes>
      {/* Public routes */}
      <Route path="/login" element={<Login />} />
      
      {/* Protected routes with role-based access */}
      <Route 
        path="/student-dashboard" 
        element={<ProtectedRoute element={<StudentDashboard />} requiredRole="student" />} 
      />
      <Route 
        path="/teacher-dashboard" 
        element={<ProtectedRoute element={<TeacherDashboard />} requiredRole="teacher" />} 
      />
      
      {/* Common routes */}
      <Route path="/announcements" element={<ProtectedRoute element={<Announcements />} />} />
      <Route path="/search" element={<ProtectedRoute element={<Search />} />} />
      <Route path="/profile" element={<ProtectedRoute element={<Profile />} />} />
      <Route path="/complaint" element={<ProtectedRoute element={<Complaint />} />} />
      <Route path="/feedback" element={<ProtectedRoute element={<Feedback />} />} />
      <Route path="/slotbooking" element={<ProtectedRoute element={<SlotBooking />} />} />
      <Route path="/courses" element={<ProtectedRoute element={<Courses />} />} />
      <Route path="/complaint-feedback" element={<ProtectedRoute element={<ComplaintFeedback />} />} />
      
      {/* Student-only routes */}
      <Route 
        path="/clubs" 
        element={<ProtectedRoute element={<Clubs />} requiredRole="student" />} 
      />
      <Route 
        path="/clubs/:clubId" 
        element={<ProtectedRoute element={<ClubDetails />} requiredRole="student" />} 
      />
      
      {/* Default route */}
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;
