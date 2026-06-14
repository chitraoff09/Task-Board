import { Link } from "react-router-dom";
import {
  FiChevronRight,
  FiActivity,
} from "react-icons/fi";
import "./Dashboard.css";

const stats = [
  { label: "To Do", value: 24, change: "+12% from last week", color: "#3b82f6" },
  { label: "In Progress", value: 16, change: "+8% from last week", color: "#f59e0b" },
  { label: "Done", value: 32, change: "+20% from last week", color: "#10b981" },
  { label: "High Priority", value: 8, change: "-14% from last week", color: "#ef4444" },
];

const members = [
  { name: "Esai Siva", role: "Team Leader", tasks: 12 },
  { name: "Karthik Raj", role: "Developer", tasks: 8 },
  { name: "Priya Dharshini", role: "UI/UX Designer", tasks: 7 },
  { name: "Arun Kumar", role: "QA Engineer", tasks: 5 },
];

const tasks = [
  { title: "Design login page", category: "UI/UX Design", priority: "High" },
  { title: "Implement authentication", category: "Development", priority: "Medium" },
  { title: "Setup database", category: "Backend", priority: "Low" },
  { title: "API Integration", category: "Development", priority: "High" },
  { title: "Testing and Bug Fixes", category: "QA", priority: "Medium" },
];

const activity = [
  { actor: "Karthik Raj", action: "completed the task \"Setup database\"", time: "2 minutes ago" },
  { actor: "Priya Dharshini", action: "added a new task \"API Integration\"", time: "1 hour ago" },
  { actor: "Arun Kumar", action: "updated the task \"Testing and Bug Fixes\"", time: "3 hours ago" },
  { actor: "Esai Siva", action: "marked a task as high priority \"Design login page\"", time: "5 hours ago" },
];

export default function Dashboard() {
  return (
    <div className="dashboard-page">
      <div className="page-header">
        <div className="breadcrumb">
          <span>Home</span>
          <FiChevronRight className="breadcrumb-icon" />
          <span>Dashboard</span>
        </div>
        <h1>Dashboard</h1>
      </div>

      <div className="dashboard-top-grid">
        {stats.map((item) => (
          <div key={item.label} className="dashboard-card summary-card">
            <div className="card-label">{item.label}</div>
            <div className="card-value">{item.value}</div>
            <div className="card-note" style={{ color: item.color }}>
              {item.change}
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard-mid-grid">
        <section className="dashboard-panel overview-panel">
          <div className="panel-header">
            <div>
              <h2>Tasks Overview</h2>
              <p>Track task distribution by status in your team.</p>
            </div>
            <button className="panel-action">This Week</button>
          </div>
          <div className="overview-chart">
            <div className="overview-legend">
              <div className="legend-item">
                <span className="legend-dot todo"></span>
                <div>
                  <strong>To Do</strong>
                  <span>24 (33.3%)</span>
                </div>
              </div>
              <div className="legend-item">
                <span className="legend-dot progress"></span>
                <div>
                  <strong>In Progress</strong>
                  <span>16 (22.2%)</span>
                </div>
              </div>
              <div className="legend-item">
                <span className="legend-dot done"></span>
                <div>
                  <strong>Done</strong>
                  <span>32 (44.4%)</span>
                </div>
              </div>
            </div>
            <div className="chart-ring"></div>
          </div>
        </section>

        <section className="dashboard-panel trend-panel">
          <div className="panel-header">
            <div>
              <h2>Tasks Trend</h2>
              <p>Task movement performance over the last week.</p>
            </div>
            <button className="panel-action">This Week</button>
          </div>
          <div className="trend-chart">
            <div className="trend-months">
              <span>May 20</span>
              <span>May 21</span>
              <span>May 22</span>
              <span>May 23</span>
              <span>May 24</span>
              <span>May 25</span>
              <span>May 26</span>
            </div>
            <div className="trend-canvas">
              <div className="trend-line todo-line"></div>
              <div className="trend-line progress-line"></div>
              <div className="trend-line done-line"></div>
            </div>
            <div className="trend-legend-row">
              <span className="trend-badge todo"></span> To Do
              <span className="trend-badge progress"></span> In Progress
              <span className="trend-badge done"></span> Done
            </div>
          </div>
        </section>

        <section className="dashboard-panel priority-panel">
          <div className="panel-header">
            <div>
              <h2>Tasks by Priority</h2>
              <p>Priorities grouped by task urgency.</p>
            </div>
          </div>
          <div className="priority-chart">
            <div className="priority-ring"></div>
            <div className="priority-list">
              <div className="priority-item">
                <span className="badge high">8</span>
                <div>
                  <strong>High</strong>
                  <span>11.1%</span>
                </div>
              </div>
              <div className="priority-item">
                <span className="badge medium">28</span>
                <div>
                  <strong>Medium</strong>
                  <span>38.9%</span>
                </div>
              </div>
              <div className="priority-item">
                <span className="badge low">36</span>
                <div>
                  <strong>Low</strong>
                  <span>50.0%</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="dashboard-bottom-grid">
        <section className="dashboard-panel recent-panel">
          <div className="panel-header">
            <div>
              <h2>Recent Tasks</h2>
              <p>Latest task updates from the team.</p>
            </div>
            <Link className="view-all-link" to="/board">
              View All
            </Link>
          </div>
          <div className="recent-list">
            {tasks.map((task) => (
              <div key={task.title} className="recent-item">
                <div>
                  <strong>{task.title}</strong>
                  <span>{task.category}</span>
                </div>
                <span className={`task-badge ${task.priority.toLowerCase()}`}>{task.priority}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="dashboard-panel member-panel">
          <div className="panel-header">
            <div>
              <h2>Tasks by Member</h2>
              <p>See who is handling the most work.</p>
            </div>
            <Link className="view-all-link" to="/team">
              View All Members
            </Link>
          </div>
          <div className="member-list">
            {members.map((member) => (
              <div key={member.name} className="member-item">
                <div className="member-title">
                  <div className="member-avatar">{member.name.split(" ").map((word) => word[0]).join("")}</div>
                  <div>
                    <strong>{member.name}</strong>
                    <span>{member.role}</span>
                  </div>
                </div>
                <span className="member-tasks">{member.tasks} Tasks</span>
              </div>
            ))}
          </div>
        </section>

        <section className="dashboard-panel activity-panel">
          <div className="panel-header">
            <div>
              <h2>Activity Feed</h2>
              <p>Team activity and task updates.</p>
            </div>
            <Link className="view-all-link" to="/reports">
              View All
            </Link>
          </div>
          <div className="activity-list">
            {activity.map((item) => (
              <div key={item.time} className="activity-item">
                <div className="activity-icon">
                  <FiActivity />
                </div>
                <div>
                  <strong>{item.actor}</strong>
                  <span>{item.action}</span>
                </div>
                <span className="activity-time">{item.time}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
