import { useState } from "react";
import {
  FiChevronRight,
  FiSearch,
  FiUsers,
  FiCheck,
  FiCheckCircle,
  FiPercent,
  FiEye,
  FiEdit2,
  FiMoreVertical,
} from "react-icons/fi";
import "./TeamMembers.css";

export default function TeamMembers() {
  const [members] = useState([
    {
      id: 1,
      name: "Esai Siva",
      email: "esai.siva@taskboard.com",
      role: "Team Leader",
      roleColor: "#10b981",
      tasksAssigned: 12,
      tasksCompleted: 10,
      progress: 83,
      status: "Active",
    },
    {
      id: 2,
      name: "Karthik Raj",
      email: "karthik.raj@taskboard.com",
      role: "Developer",
      roleColor: "#8b5cf6",
      tasksAssigned: 9,
      tasksCompleted: 7,
      progress: 78,
      status: "Active",
    },
    {
      id: 3,
      name: "Priya Dharshini",
      email: "priya.p@taskboard.com",
      role: "UI/UX Designer",
      roleColor: "#ec4899",
      tasksAssigned: 8,
      tasksCompleted: 6,
      progress: 75,
      status: "Active",
    },
    {
      id: 4,
      name: "Arun Kumar",
      email: "arun.kumar@taskboard.com",
      role: "QA Engineer",
      roleColor: "#f59e0b",
      tasksAssigned: 7,
      tasksCompleted: 5,
      progress: 71,
      status: "Active",
    },
    {
      id: 5,
      name: "Vigneswaran",
      email: "vignesh@taskboard.com",
      role: "Backend Developer",
      roleColor: "#3b82f6",
      tasksAssigned: 6,
      tasksCompleted: 4,
      progress: 67,
      status: "Active",
    },
    {
      id: 6,
      name: "Nandhini Priya",
      email: "nandini.p@taskboard.com",
      role: "DevOps Engineer",
      roleColor: "#f97316",
      tasksAssigned: 5,
      tasksCompleted: 3,
      progress: 60,
      status: "Active",
    },
    {
      id: 7,
      name: "Sujithra",
      email: "sujithra@taskboard.com",
      role: "Business Analyst",
      roleColor: "#0ea5e9",
      tasksAssigned: 5,
      tasksCompleted: 2,
      progress: 40,
      status: "Inactive",
    },
    {
      id: 8,
      name: "Dinesh Babu",
      email: "dinesh.b@taskboard.com",
      role: "Intern",
      roleColor: "#6366f1",
      tasksAssigned: 4,
      tasksCompleted: 1,
      progress: 25,
      status: "Inactive",
    },
  ]);

  const stats = {
    totalMembers: 8,
    activeMembers: 6,
    tasksAssigned: 56,
    tasksCompleted: 38,
    avgCompletion: 68,
  };

  return (
    <div className="team-members-page">
      <div className="page-header">
        <div className="breadcrumb">
          <span>Task Board</span>
          <FiChevronRight className="breadcrumb-icon" />
          <span>Team Members</span>
        </div>
        <h1>Team Members</h1>
      </div>

      {/* Header Section */}
      <div className="team-header">
        <div>
          <h2 className="team-title">Team Members</h2>
          <p className="team-description">Manage your team and track member performance</p>
        </div>
        <button className="invite-btn">+ Invite Member</button>
      </div>

      {/* Stats Cards */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon members-icon">
            <FiUsers />
          </div>
          <div className="stat-content">
            <div className="stat-value">{stats.totalMembers}</div>
            <div className="stat-label">Total Members</div>
            <div className="stat-sublabel">Active team members</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon active-icon">
            <FiCheck />
          </div>
          <div className="stat-content">
            <div className="stat-value">{stats.activeMembers}</div>
            <div className="stat-label">Active Members</div>
            <div className="stat-sublabel">Currently active</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon tasks-icon">
            <FiCheckCircle />
          </div>
          <div className="stat-content">
            <div className="stat-value">{stats.tasksAssigned}</div>
            <div className="stat-label">Tasks Assigned</div>
            <div className="stat-sublabel">Across all members</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon completed-icon">
            <FiCheckCircle />
          </div>
          <div className="stat-content">
            <div className="stat-value">{stats.tasksCompleted}</div>
            <div className="stat-label">Tasks Completed</div>
            <div className="stat-sublabel">This month</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon avg-icon">
            <FiPercent />
          </div>
          <div className="stat-content">
            <div className="stat-value">{stats.avgCompletion}%</div>
            <div className="stat-label">Avg. Completion</div>
            <div className="stat-sublabel">Team performance</div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="table-controls">
        <div className="search-box">
          <FiSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search members by name, role..."
            className="search-input"
          />
        </div>

        <div className="filters">
          <select className="filter-select">
            <option value="">All Roles</option>
            <option value="team-leader">Team Leader</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="qa">QA Engineer</option>
          </select>

          <select className="filter-select">
            <option value="">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>

          <select className="filter-select">
            <option value="">Sort by: Name (A-Z)</option>
            <option value="name-desc">Name (Z-A)</option>
            <option value="tasks-high">Tasks (High to Low)</option>
            <option value="tasks-low">Tasks (Low to High)</option>
            <option value="progress-high">Progress (High to Low)</option>
          </select>

          <button className="view-toggle">
            <span>☰</span>
          </button>
          <button className="view-toggle">
            <span>⊞</span>
          </button>
        </div>
      </div>

      {/* Members Table */}
      <div className="table-container">
        <table className="members-table">
          <thead>
            <tr>
              <th>Member</th>
              <th>Role</th>
              <th>Tasks Assigned</th>
              <th>Tasks Completed</th>
              <th>Progress</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => (
              <tr key={member.id} className={`member-row ${member.status.toLowerCase()}`}>
                <td className="member-cell">
                  <div className="member-info">
                    <div className="member-avatar">{member.name.substring(0, 2)}</div>
                    <div>
                      <div className="member-name">{member.name}</div>
                      <div className="member-email">{member.email}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <span
                    className="role-badge"
                    style={{ backgroundColor: `${member.roleColor}20`, color: member.roleColor }}
                  >
                    {member.role}
                  </span>
                </td>
                <td className="task-count">{member.tasksAssigned}</td>
                <td className="task-count">{member.tasksCompleted}</td>
                <td>
                  <div className="progress-cell">
                    <div className="progress-bar-small">
                      <div
                        className="progress-fill-small"
                        style={{ width: `${member.progress}%` }}
                      ></div>
                    </div>
                    <span className="progress-text">{member.progress}%</span>
                  </div>
                </td>
                <td>
                  <span className={`status-badge ${member.status.toLowerCase()}`}>
                    {member.status}
                  </span>
                </td>
                <td>
                  <div className="action-buttons">
                    <button className="icon-btn" title="View">
                      <FiEye />
                    </button>
                    <button className="icon-btn" title="Edit">
                      <FiEdit2 />
                    </button>
                    <button className="icon-btn more-btn" title="More">
                      <FiMoreVertical />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="pagination">
        <div className="pagination-info">
          Showing 1 to 8 of 8 members
        </div>
        <div className="pagination-controls">
          <button className="page-btn" disabled>
            ← Prev
          </button>
          <button className="page-btn active">1</button>
          <button className="page-btn" disabled>
            Next →
          </button>
        </div>
        <div className="rows-per-page">
          <label>
            <select defaultValue="10">
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
            </select>
            <span> per page</span>
          </label>
        </div>
      </div>
    </div>
  );
}
