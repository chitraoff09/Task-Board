import { Link, useLocation } from "react-router-dom";
import {
  FiHome,
  FiBarChart2,
  FiTrello,
  FiPlus,
  FiUsers,
  FiPieChart,
  FiFilter,
  FiSettings,
} from "react-icons/fi";
import "./Sidebar.css";

export default function Sidebar() {
  const location = useLocation();

  const navItems = [
    { icon: FiHome, label: "Home", path: "/" },
    { icon: FiBarChart2, label: "Dashboard", path: "/dashboard" },
    { icon: FiTrello, label: "Task Board", path: "/board" },
    { icon: FiPlus, label: "Add Task", path: "/add-task", highlight: true },
    { icon: FiUsers, label: "Team Members", path: "/team" },
    { icon: FiPieChart, label: "Reports", path: "/reports" },
    { icon: FiFilter, label: "Filter Tasks", path: "/filter" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="logo">
          <div className="logo-icon">TB</div>
          <div>
            <div className="logo-title">TaskBoard</div>
            <div className="logo-subtitle">Team Task Manager</div>
          </div>
        </div>
      </div>

      <nav className="sidebar-nav">
        {navItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={`nav-item ${isActive(item.path) ? "active" : ""} ${
              isActive(item.path) && item.highlight ? "highlight" : ""
            }`}
          >
            <item.icon className="nav-icon" />
            <span className="nav-label">{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className="sidebar-bottom">
        <button className="settings-btn">
          <FiSettings className="nav-icon" />
          <span className="nav-label">Settings</span>
        </button>

        <div className="user-profile">
          <div className="user-avatar">ES</div>
          <div className="user-info">
            <div className="user-name">Esai Siva</div>
            <div className="user-role">Team Leader</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
