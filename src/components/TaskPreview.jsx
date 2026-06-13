import { FiEye, FiFlag, FiUser, FiCalendar, FiInfo } from "react-icons/fi";
import "./TaskPreview.css";

export default function TaskPreview({ taskData }) {
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

  return (
    <div className="task-preview">
      <div className="preview-header">
        <FiEye className="preview-icon" />
        <h3>Task Preview</h3>
      </div>

      <div className="preview-card">
        {/* Task Header */}
        <div className="preview-top">
          <div className="status-badge" style={{ background: getStatusColor(taskData.status) }}>
            {taskData.status || "To Do"}
          </div>
          {taskData.priority && (
            <div className="priority-badge" style={{ background: getPriorityColor(taskData.priority) }}>
              {taskData.priority}
            </div>
          )}
        </div>

        {/* Task Title */}
        <h2 className="preview-title">{taskData.title || "Task Title"}</h2>

        {/* Task Description */}
        <p className="preview-description">
          {taskData.description || "Task description will appear here..."}
        </p>

        {/* Task Meta Info */}
        <div className="preview-meta">
          {taskData.assignTo && (
            <div className="meta-item">
              <FiUser className="meta-icon" />
              <div>
                <span className="meta-label">Assigned to</span>
                <span className="meta-value">{taskData.assignTo}</span>
              </div>
            </div>
          )}

          {taskData.dueDate && (
            <div className="meta-item">
              <FiCalendar className="meta-icon" />
              <div>
                <span className="meta-label">Due Date</span>
                <span className="meta-value">
                  {new Date(taskData.dueDate).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="preview-divider"></div>

        {/* Priority Guide */}
        <div className="priority-guide">
          <div className="guide-header">
            <FiFlag className="guide-icon" />
            <h4>Priority Guide</h4>
          </div>

          <div className="guide-item">
            <div className="guide-dot" style={{ background: "#ef4444" }}></div>
            <div>
              <strong>High</strong>
              <p>Urgent tasks that need immediate attention</p>
            </div>
          </div>

          <div className="guide-item">
            <div className="guide-dot" style={{ background: "#f59e0b" }}></div>
            <div>
              <strong>Medium</strong>
              <p>Important tasks but not urgent</p>
            </div>
          </div>

          <div className="guide-item">
            <div className="guide-dot" style={{ background: "#10b981" }}></div>
            <div>
              <strong>Low</strong>
              <p>Tasks with lower priority</p>
            </div>
          </div>
        </div>

        {/* Tips Section */}
        <div className="tips-section">
          <div className="tips-header">
            <FiInfo className="tips-icon" />
            <h4>Tips</h4>
          </div>

          <ul className="tips-list">
            <li>Be clear and specific with the task title</li>
            <li>Add detailed description for better clarity</li>
            <li>Set realistic due dates</li>
            <li>Assign to the right team member</li>
            <li>Use priority to highlight important tasks</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
