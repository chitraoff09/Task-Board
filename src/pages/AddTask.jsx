import { useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import TaskForm from "../components/TaskForm";
import TaskPreview from "../components/TaskPreview";
import "./AddTask.css";

export default function AddTask() {
  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    assignTo: "",
    status: "To Do",
    priority: "",
    dueDate: "",
    category: "",
    estimatedTime: "",
    attachments: [],
  });

  const handleTaskChange = (field, value) => {
    setTaskData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="add-task-page">
      <div className="page-header">
        <div className="breadcrumb">
          <span>Task Board</span>
          <FiChevronRight className="breadcrumb-icon" />
          <span>Create New Task</span>
        </div>
        <h1>Create New Task</h1>
      </div>

      <div className="add-task-container">
        <div className="form-section">
          <TaskForm taskData={taskData} onTaskChange={handleTaskChange} />
        </div>

        <div className="preview-section">
          <TaskPreview taskData={taskData} />
        </div>
      </div>
    </div>
  );
}
