import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiChevronLeft,
  FiEdit2,
  FiMove,
  FiMoreVertical,
  FiCalendar,
  FiClock,
  FiDownload,
  FiCheck,
  FiCircle,
} from "react-icons/fi";
import "./TaskDetails.css";

export default function TaskDetails() {
  const [task] = useState({
    id: 3,
    title: "Implement authentication",
    description:
      "Implement user authentication using JWT. Include login, logout, and protected routes. Add form validation and error handling",
    status: "In Progress",
    priority: "Medium",
    category: "Development",
    createdDate: "May 20, 2025 at 10:30 AM",
    assignee: {
      name: "Karthik Raj",
      role: "Developer",
      avatar: "KR",
    },
    dueDate: "May 23, 2025",
    daysLeft: 2,
    estimatedTime: "4h 30m",
    timeSpent: "2h 15m",
    tags: ["Authentication", "JWT", "Backend"],
    attachments: [
      { name: "Auth_Requirements.pdf", size: "1.2 MB", type: "pdf" },
      { name: "API_Documentation.docx", size: "850 kB", type: "docx" },
      { name: "Auth_Flow.png", size: "630 kB", type: "image" },
    ],
    checklist: [
      { item: "Setup authentication routes", completed: true },
      { item: "Create login API", completed: true },
      { item: "Implement JWT token generation", completed: true },
      { item: "Add protected routes", completed: false },
      { item: "Test authentication flow", completed: false },
    ],
    checklistProgress: 60,
    activities: [
      {
        id: 1,
        type: "created",
        user: "Esai Siva",
        action: "created this task",
        timestamp: "May 20, 10:30 AM",
        avatar: "ES",
      },
      {
        id: 2,
        type: "assigned",
        user: "Esai Siva",
        action: "assigned the task to Karthik Raj",
        timestamp: "May 20, 10:35 AM",
        avatar: "ES",
      },
      {
        id: 3,
        type: "updated",
        user: "Esai Siva",
        action: "updated the task details",
        timestamp: "May 20, 10:32 AM",
        avatar: "ES",
      },
      {
        id: 4,
        type: "status",
        user: "Karthik Raj",
        action: "updated the status to In Progress",
        timestamp: "May 21, 09:15 AM",
        avatar: "KR",
      },
    ],
    progressSteps: [
      { step: "Task Created", completed: true, timestamp: "May 20, 10:30 AM" },
      {
        step: "Assigned to Karthik Raj",
        completed: true,
        timestamp: "May 20, 10:35 AM",
      },
      { step: "Work in Progress", completed: true, timestamp: "May 21, 09:15 AM" },
      { step: "Under Review", completed: false, status: "Pending" },
      { step: "Completed", completed: false, status: "Pending" },
    ],
  });

  const getStatusColor = (status) => {
    const colors = {
      "To Do": "#3b82f6",
      "In Progress": "#f59e0b",
      "In Review": "#8b5cf6",
      Done: "#10b981",
    };
    return colors[status] || "#6b7280";
  };

  const getPriorityColor = (priority) => {
    const colors = {
      High: "#ef4444",
      Medium: "#f59e0b",
      Low: "#10b981",
    };
    return colors[priority] || "#d1d5db";
  };

  const getFileIcon = (type) => {
    const icons = {
      pdf: "📄",
      docx: "📄",
      image: "🖼️",
    };
    return icons[type] || "📎";
  };

  return (
    <div className="task-details-page">
      <div className="page-header">
        <div className="breadcrumb">
          <Link to="/board" className="back-link">
            <FiChevronLeft className="breadcrumb-icon" />
            Back to Task Board
          </Link>
        </div>
      </div>

      <div className="task-details-container">
        {/* Main Content */}
        <div className="task-details-main">
          {/* Task Header */}
          <div className="task-header-section">
            <div className="task-badges">
              <span
                className="badge status-badge"
                style={{ backgroundColor: getStatusColor(task.status) }}
              >
                {task.status}
              </span>
              <span
                className="badge priority-badge"
                style={{ backgroundColor: getPriorityColor(task.priority) }}
              >
                {task.priority}
              </span>
            </div>

            <h1 className="task-title">{task.title}</h1>

            <div className="task-header-actions">
              <button className="action-btn">
                <FiEdit2 />
                Edit Task
              </button>
              <button className="action-btn">
                <FiMove />
                Move
              </button>
              <button className="action-btn more-btn">
                <FiMoreVertical />
              </button>
            </div>
          </div>

          {/* Task Description */}
          <div className="task-section">
            <p className="task-description">{task.description}</p>
          </div>

          {/* Task Meta Info */}
          <div className="task-meta-grid">
            <div className="meta-item">
              <div className="meta-label">Category</div>
              <div className="meta-value tag-badge">{task.category}</div>
            </div>

            <div className="meta-item">
              <div className="meta-label">Created on</div>
              <div className="meta-value">{task.createdDate}</div>
            </div>

            <div className="meta-item">
              <div className="meta-label">Assigned To</div>
              <div className="assignee-info">
                <div className="assignee-avatar">{task.assignee.avatar}</div>
                <div>
                  <div className="assignee-name">{task.assignee.name}</div>
                  <div className="assignee-role">{task.assignee.role}</div>
                </div>
              </div>
            </div>

            <div className="meta-item">
              <div className="meta-label">Due Date</div>
              <div className="meta-value">
                <FiCalendar className="icon" />
                {task.dueDate}
                <span className="days-left">
                  {task.daysLeft} days left
                </span>
              </div>
            </div>

            <div className="meta-item">
              <div className="meta-label">Priority</div>
              <div
                className="priority-indicator"
                style={{ backgroundColor: getPriorityColor(task.priority) }}
              >
                {task.priority}
              </div>
            </div>

            <div className="meta-item">
              <div className="meta-label">Status</div>
              <div
                className="status-indicator"
                style={{ backgroundColor: getStatusColor(task.status) }}
              >
                {task.status}
              </div>
            </div>

            <div className="meta-item">
              <div className="meta-label">Estimated Time</div>
              <div className="meta-value">
                <FiClock className="icon" />
                {task.estimatedTime}
              </div>
            </div>

            <div className="meta-item">
              <div className="meta-label">Time Spent</div>
              <div className="meta-value">
                <FiClock className="icon" />
                {task.timeSpent}
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="task-section">
            <h3 className="section-title">Tags</h3>
            <div className="tags-container">
              {task.tags.map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Attachments */}
          <div className="task-section">
            <h3 className="section-title">Attachments ({task.attachments.length})</h3>
            <div className="attachments-container">
              {task.attachments.map((file, index) => (
                <div key={index} className="attachment-item">
                  <div className="attachment-icon">
                    {getFileIcon(file.type)}
                  </div>
                  <div className="attachment-info">
                    <div className="attachment-name">{file.name}</div>
                    <div className="attachment-size">{file.size}</div>
                  </div>
                  <button className="download-btn">
                    <FiDownload />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Checklist */}
          <div className="task-section">
            <h3 className="section-title">
              Checklist ({task.checklist.filter((i) => i.completed).length}/{task.checklist.length})
            </h3>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${task.checklistProgress}%` }}
              ></div>
            </div>
            <div className="checklist">
              {task.checklist.map((item, index) => (
                <div key={index} className="checklist-item">
                  <input
                    type="checkbox"
                    checked={item.completed}
                    readOnly
                    className="checkbox"
                  />
                  <span
                    className={`checklist-text ${item.completed ? "completed" : ""}`}
                  >
                    {item.item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Activity Log */}
          <div className="task-section">
            <h3 className="section-title">Activity Log</h3>
            <div className="activity-log">
              {task.activities.map((activity) => (
                <div key={activity.id} className="activity-item">
                  <div className="activity-avatar">{activity.avatar}</div>
                  <div className="activity-content">
                    <div className="activity-text">
                      <strong>{activity.user}</strong> {activity.action}
                    </div>
                    <div className="activity-time">{activity.timestamp}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Danger Zone */}
          <div className="task-section danger-zone">
            <h3 className="section-title">Danger Zone</h3>
            <button className="delete-btn">
              <span>Delete Task</span>
              <span className="warning">This action cannot be undone.</span>
              <FiChevronLeft />
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="task-details-sidebar">
          <div className="progress-card">
            <h3 className="card-title">Task Progress</h3>
            <div className="progress-timeline">
              {task.progressSteps.map((step, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-dot">
                    {step.completed ? (
                      <FiCheck className="check-icon" />
                    ) : (
                      <FiCircle className="circle-icon" />
                    )}
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-step">{step.step}</div>
                    {step.completed && (
                      <div className="timeline-time">{step.timestamp}</div>
                    )}
                    {!step.completed && step.status && (
                      <div className="timeline-pending">{step.status}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
