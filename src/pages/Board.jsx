import { FiChevronRight } from "react-icons/fi";
import TaskCard from "../components/TaskCard";
import "./Board.css";

const mockTasks = {
  "To Do": [
    {
      id: 1,
      title: "Design Dashboard UI",
      priority: "High",
      assignee: "John Doe",
      dueDate: "2026-06-20",
    },
    {
      id: 2,
      title: "Setup Database Schema",
      priority: "High",
      assignee: "Jane Smith",
      dueDate: "2026-06-22",
    },
  ],
  "In Progress": [
    {
      id: 3,
      title: "Implement Authentication",
      priority: "Medium",
      assignee: "Mike Johnson",
      dueDate: "2026-06-25",
    },
  ],
  "In Review": [
    {
      id: 4,
      title: "Code Review - API Module",
      priority: "Medium",
      assignee: "Esai Siva",
      dueDate: "2026-06-18",
    },
  ],
  "Done": [
    {
      id: 5,
      title: "Setup Project Repository",
      priority: "Low",
      assignee: "John Doe",
      dueDate: "2026-06-10",
    },
  ],
};

export default function Board() {
  return (
    <div className="board-page">
      <div className="page-header">
        <div className="breadcrumb">
          <span>Home</span>
          <FiChevronRight className="breadcrumb-icon" />
          <span>Task Board</span>
        </div>
        <h1>Task Board</h1>
      </div>

      <div className="board-content">
        {Object.entries(mockTasks).map(([status, tasks]) => (
          <div key={status} className="board-column">
            <div className="column-header">
              <h2>{status}</h2>
              <span className="task-count">{tasks.length}</span>
            </div>
            <div className="tasks-container">
              {tasks.length > 0 ? (
                tasks.map((task) => (
                  <TaskCard key={task.id} task={task} status={status} />
                ))
              ) : (
                <p className="empty-message">No tasks yet</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
