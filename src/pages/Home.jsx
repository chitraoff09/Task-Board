import { Link } from "react-router-dom";
import {
  FiPlus,
  FiClipboard,
  FiUsers,
  FiBarChart2,
  FiArrowRight,
} from "react-icons/fi";
import "./Home.css";

const quickStats = [
  { label: "To Do", value: 24, detail: "Tasks to be started", color: "#3b82f6" },
  { label: "In Progress", value: 16, detail: "Tasks in progress", color: "#f59e0b" },
  { label: "Done", value: 32, detail: "Tasks completed", color: "#10b981" },
  { label: "High Priority", value: 8, detail: "Priority tasks", color: "#ef4444" },
];

const actions = [
  { icon: FiPlus, label: "Add New Task", description: "Create a new task", path: "/add-task" },
  { icon: FiClipboard, label: "Task Board", description: "View all tasks", path: "/board" },
  { icon: FiUsers, label: "Team Members", description: "Manage your team", path: "/team" },
  { icon: FiBarChart2, label: "Reports", description: "View analytics", path: "/reports" },
];

const tasks = [
  { title: "Design login page", label: "UI/UX Design", priority: "High" },
  { title: "Implement authentication", label: "Development", priority: "Medium" },
  { title: "Setup database", label: "Backend", priority: "Low" },
  { title: "API Integration", label: "Development", priority: "High" },
  { title: "Testing and Bug Fixes", label: "QA", priority: "Medium" },
];

const team = [
  { name: "Esai Siva", role: "Team Leader", tasks: 12 },
  { name: "Karthik Raj", role: "Developer", tasks: 8 },
  { name: "Priya Dharshini", role: "UI/UX Designer", tasks: 7 },
  { name: "Arun Kumar", role: "QA Engineer", tasks: 5 },
];

export default function Home() {
  return (
    <div className="home-page">
      <div className="hero-section">
        <div className="hero-copy">
          <span className="eyebrow">Welcome back, Esai! 👋</span>
          <h1>Let's get things done together.</h1>
          <p>Plan tasks, assign to team members, track progress, and achieve goals — all in one place.</p>
          <div className="hero-actions">
            <Link className="btn btn-primary" to="/board">
              Go to Task Board
            </Link>
            <Link className="btn btn-secondary" to="/add-task">
              Add New Task
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="visual-card">
            <div className="visual-header">
              <div>
                <span>To Do</span>
                <strong>24</strong>
              </div>
              <span>Tasks</span>
            </div>
            <div className="visual-status">
              <div className="status-pill todo">To Do</div>
              <div className="status-pill progress">In Progress</div>
              <div className="status-pill done">Done</div>
            </div>
          </div>
          <div className="visual-figure" />
        </div>
      </div>

      <div className="home-grid">
        <div className="stats-grid">
          {quickStats.map((item) => (
            <div key={item.label} className="stat-card">
              <div className="stat-icon" style={{ background: item.color }} />
              <div>
                <h3>{item.value}</h3>
                <p>{item.label}</p>
                <span>{item.detail}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="bottom-grid">
          <section className="home-panel quick-actions-panel">
            <div className="panel-header">
              <h2>Quick Actions</h2>
              <Link to="/add-task">View All</Link>
            </div>
            <div className="action-list">
              {actions.map((action) => {
                const Icon = action.icon;
                return (
                  <Link key={action.label} className="action-card" to={action.path}>
                    <div className="action-icon">
                      <Icon />
                    </div>
                    <div>
                      <strong>{action.label}</strong>
                      <span>{action.description}</span>
                    </div>
                    <FiArrowRight className="action-arrow" />
                  </Link>
                );
              })}
            </div>
          </section>

          <section className="home-panel recent-panel">
            <div className="panel-header">
              <h2>Recent Tasks</h2>
              <Link to="/board">View All</Link>
            </div>
            <div className="recent-list">
              {tasks.map((task) => (
                <div key={task.title} className="recent-task-item">
                  <div>
                    <strong>{task.title}</strong>
                    <span>{task.label}</span>
                  </div>
                  <span className={`task-pill ${task.priority.toLowerCase()}`}>{task.priority}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="home-panel team-panel">
            <div className="panel-header">
              <h2>Team Overview</h2>
              <Link to="/team">View All</Link>
            </div>
            <div className="team-list">
              {team.map((member) => (
                <div key={member.name} className="team-member-item">
                  <div className="member-avatar">{member.name.split(" ").map((w) => w[0]).join("")}</div>
                  <div>
                    <strong>{member.name}</strong>
                    <span>{member.role}</span>
                  </div>
                  <span className="member-tasks">{member.tasks}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
