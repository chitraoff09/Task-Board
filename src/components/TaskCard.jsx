import { FiTrash2, FiEdit2, FiCalendar, FiUser } from "react-icons/fi";
import "./TaskCard.css";

export default function TaskCard({ task, status }) {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "#ef4444";
      case "Medium":
        return "#f59e0b";
      case "Low":
        return "#10b981";
      default:
        return "#d1d5db";
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "To Do":
        return "#3b82f6";
      case "In Progress":
        return "#f59e0b";
      case "In Review":
        return "#8b5cf6";
      case "Done":
        return "#10b981";
      default:
        return "#6b7280";
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  };

  return (
    <div className="task-card">
      <div className="task-header">
        <h3 className="task-title">{task.title}</h3>
        <div className="task-actions">
          <button className="task-action-btn" title="Edit">
            <FiEdit2 />
          </button>
          <button className="task-action-btn" title="Delete">
            <FiTrash2 />
          </button>
        </div>
      </div>

      <div className="task-meta">
        <div className="meta-item">
          <FiUser className="meta-icon" />
          <span>{task.assignee}</span>
        </div>
        <div className="meta-item">
          <FiCalendar className="meta-icon" />
          <span>{formatDate(task.dueDate)}</span>
        </div>
      </div>

      <div className="task-footer">
        <span
          className="priority-badge"
          style={{ backgroundColor: getPriorityColor(task.priority) }}
        >
          {task.priority}
        </span>
        <span
          className="status-badge"
          style={{ backgroundColor: getStatusColor(status) }}
        >
          {status}
        </span>
      </div>
    </div>
  );
}
