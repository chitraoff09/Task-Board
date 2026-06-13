import { useRef } from "react";
import {
  FiBold,
  FiItalic,
  FiLink,
  FiImage,
  FiList,
  FiCalendar,
  FiClock,
  FiUploadCloud,
} from "react-icons/fi";
import "./TaskForm.css";

export default function TaskForm({ taskData, onTaskChange }) {
  const fileInputRef = useRef(null);

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    onTaskChange("attachments", [
      ...taskData.attachments,
      ...files.map((f) => f.name),
    ]);
  };

  const handleTitleChange = (e) => {
    const value = e.target.value;
    onTaskChange("title", value);
  };

  const handleDescriptionChange = (e) => {
    const value = e.target.value;
    onTaskChange("description", value);
  };

  return (
    <div className="task-form">
      <div className="form-card">
        <div className="form-header">
          <div className="header-icon">📋</div>
          <div>
            <h2>Task Details</h2>
            <p>Fill in the information to create a new task</p>
          </div>
        </div>

        {/* Task Title */}
        <div className="form-group">
          <label className="form-label">
            Task Title <span className="required">*</span>
          </label>
          <div className="input-wrapper">
            <input
              type="text"
              className="form-input"
              placeholder="Enter task title"
              value={taskData.title}
              onChange={handleTitleChange}
              maxLength={100}
            />
            <span className="char-counter">{taskData.title.length}/100</span>
          </div>
        </div>

        {/* Description */}
        <div className="form-group">
          <label className="form-label">Description</label>
          <div className="rich-editor">
            <div className="editor-toolbar">
              <button className="toolbar-btn" title="Bold">
                <FiBold />
              </button>
              <button className="toolbar-btn" title="Italic">
                <FiItalic />
              </button>
              <div className="toolbar-divider"></div>
              <select className="toolbar-select">
                <option>Normal</option>
                <option>Heading 1</option>
                <option>Heading 2</option>
              </select>
              <button className="toolbar-btn" title="Bullet List">
                <FiList />
              </button>
              <button className="toolbar-btn" title="Link">
                <FiLink />
              </button>
              <button className="toolbar-btn" title="Image">
                <FiImage />
              </button>
            </div>
            <textarea
              className="editor-textarea"
              placeholder="Describe the task in detail..."
              value={taskData.description}
              onChange={handleDescriptionChange}
              maxLength={500}
            ></textarea>
            <div className="editor-footer">
              <span className="char-counter">{taskData.description.length}/500</span>
            </div>
          </div>
        </div>

        {/* Assign To & Status Row */}
        <div className="form-row">
          <div className="form-group">
            <label className="form-label">
              Assign to <span className="required">*</span>
            </label>
            <select
              className="form-select"
              value={taskData.assignTo}
              onChange={(e) => onTaskChange("assignTo", e.target.value)}
            >
              <option value="">Select team member</option>
              <option value="john">John Doe</option>
              <option value="jane">Jane Smith</option>
              <option value="mike">Mike Johnson</option>
              <option value="esai">Esai Siva</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">
              Status <span className="required">*</span>
            </label>
            <select
              className="form-select"
              value={taskData.status}
              onChange={(e) => onTaskChange("status", e.target.value)}
            >
              <option value="To Do">To Do</option>
              <option value="In Progress">In Progress</option>
              <option value="In Review">In Review</option>
              <option value="Done">Done</option>
            </select>
          </div>
        </div>

        {/* Priority & Due Date Row */}
        <div className="form-row">
          <div className="form-group">
            <label className="form-label">
              Priority <span className="required">*</span>
            </label>
            <select
              className="form-select"
              value={taskData.priority}
              onChange={(e) => onTaskChange("priority", e.target.value)}
            >
              <option value="">Select priority</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Due Date</label>
            <div className="input-icon-wrapper">
              <input
                type="date"
                className="form-input"
                value={taskData.dueDate}
                onChange={(e) => onTaskChange("dueDate", e.target.value)}
              />
              <FiCalendar className="input-icon" />
            </div>
          </div>
        </div>

        {/* Category & Estimated Time Row */}
        <div className="form-row">
          <div className="form-group">
            <label className="form-label">Category / Tag</label>
            <select
              className="form-select"
              value={taskData.category}
              onChange={(e) => onTaskChange("category", e.target.value)}
            >
              <option value="">Select or add category</option>
              <option value="Bug">Bug</option>
              <option value="Feature">Feature</option>
              <option value="Documentation">Documentation</option>
              <option value="Testing">Testing</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Estimated Time</label>
            <div className="input-icon-wrapper">
              <input
                type="text"
                className="form-input"
                placeholder="e.g., 3h 30m"
                value={taskData.estimatedTime}
                onChange={(e) => onTaskChange("estimatedTime", e.target.value)}
              />
              <FiClock className="input-icon" />
            </div>
          </div>
        </div>

        {/* Attachments */}
        <div className="form-group">
          <label className="form-label">Attachments</label>
          <div
            className="upload-area"
            onClick={() => fileInputRef.current?.click()}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              e.preventDefault();
              handleFileUpload({
                target: { files: e.dataTransfer.files },
              });
            }}
          >
            <FiUploadCloud className="upload-icon" />
            <p>
              Drag and drop files here or <span className="upload-link">click to upload</span>
            </p>
            <small>Supports: JPG, PNG, PDF, DOC, ZIP (Max 10MB)</small>
            <input
              ref={fileInputRef}
              type="file"
              multiple
              onChange={handleFileUpload}
              style={{ display: "none" }}
            />
          </div>
          {taskData.attachments.length > 0 && (
            <div className="attachments-list">
              {taskData.attachments.map((file, idx) => (
                <div key={idx} className="attachment-item">
                  <span>📎 {file}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="form-actions">
          <button className="btn btn-secondary">Cancel</button>
          <button className="btn btn-draft">Save as Draft</button>
          <button className="btn btn-primary">Create Task</button>
        </div>
      </div>
    </div>
  );
}
