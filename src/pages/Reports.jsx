import { useState } from "react";
import {
  FiChevronRight,
  FiCheckCircle,
  FiAlertCircle,
  FiUsers,
  FiTrendingUp,
} from "react-icons/fi";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./Reports.css";

const Reports = () => {
  // Stats Data
  const stats = [
    {
      id: 1,
      label: "Completed Tasks",
      value: 128,
      change: "+12%",
      trend: "up",
      icon: FiCheckCircle,
      color: "#10b981",
      bgColor: "#ecfdf5",
    },
    {
      id: 2,
      label: "Pending Tasks",
      change: "-8%",
      value: 42,
      trend: "down",
      icon: FiAlertCircle,
      color: "#f59e0b",
      bgColor: "#fffbf0",
    },
    {
      id: 3,
      label: "Team Members",
      value: 12,
      change: "+5%",
      trend: "up",
      icon: FiUsers,
      color: "#3b82f6",
      bgColor: "#eff6ff",
    },
    {
      id: 4,
      label: "Completion Rate",
      value: "75%",
      change: "+10%",
      trend: "up",
      icon: FiTrendingUp,
      color: "#8b5cf6",
      bgColor: "#faf5ff",
    },
  ];

  // Tasks Overview Data
  const tasksOverviewData = [
    { name: "Completed", value: 128, percentage: 75 },
    { name: "In Progress", value: 42, percentage: 25 },
    { name: "Overdue", value: 12, percentage: 7 },
  ];

  const overviewColors = ["#10b981", "#f59e0b", "#ef4444"];

  // Team Performance Data
  const teamPerformanceData = [
    { name: "Karthik Raj", tasks: 32 },
    { name: "Priya Dharshini", tasks: 31 },
    { name: "Arun Kumar", tasks: 24 },
    { name: "Vigneshvaran", tasks: 18 },
    { name: "Nandini Priya", tasks: 16 },
    { name: "Sujitra", tasks: 12 },
  ];

  // Tasks by Priority Data
  const priorityData = [
    { name: "High", value: 45, percentage: 26 },
    { name: "Medium", value: 60, percentage: 35 },
    { name: "Low", value: 65, percentage: 38 },
  ];

  const priorityColors = ["#ef4444", "#f59e0b", "#10b981"];

  // Tasks by Status Data
  const statusData = [
    { name: "Completed", value: 128, percentage: 75 },
    { name: "In Progress", value: 42, percentage: 25 },
    { name: "Overdue", value: 12, percentage: 7 },
  ];

  const statusColors = ["#10b981", "#3b82f6", "#ef4444"];

  // Tasks Trend Data
  const trendData = [
    { date: "May 1", tasks: 15 },
    { date: "May 8", tasks: 28 },
    { date: "May 15", tasks: 35 },
    { date: "May 22", tasks: 50 },
    { date: "May 29", tasks: 68 },
  ];

  // Recent Activity
  const recentActivity = [
    {
      id: 1,
      actor: "Karthik Raj",
      action: 'completed "Implement user authentication"',
      time: "May 23, 2025 10:30 AM",
      avatar: "KR",
    },
    {
      id: 2,
      actor: "Priya Dharshini",
      action: 'updated "Fix authentication token expiry issue"',
      time: "May 21, 2025 02:15 PM",
      avatar: "PD",
    },
    {
      id: 3,
      actor: "Arun Kumar",
      action: 'created "Add two-factor authentication (2FA)"',
      time: "May 20, 2025 11:45 AM",
      avatar: "AK",
    },
    {
      id: 4,
      actor: "Vigneshvaran",
      action: 'completed "Authentication API integration"',
      time: "May 19, 2025 04:20 PM",
      avatar: "VV",
    },
    {
      id: 5,
      actor: "Nandini Priya",
      action: 'completed "User authentication UI design"',
      time: "May 18, 2025 09:30 AM",
      avatar: "NP",
    },
  ];

  // Insights
  const insights = [
    {
      id: 1,
      text: "Your team is more productive this month.",
      icon: "✓",
    },
    {
      id: 2,
      text: "High-priority tasks are on track.",
      icon: "✓",
    },
    {
      id: 3,
      text: "Consider reviewing pending tasks.",
      icon: "✓",
    },
    {
      id: 4,
      text: "Great job on maintaining completion rate!",
      icon: "✓",
    },
  ];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p>{`${payload[0].name}: ${payload[0].value}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="reports-page">
      <div className="page-header">
        <div className="breadcrumb">
          <span>Home</span>
          <FiChevronRight className="breadcrumb-icon" />
          <span>Reports / Analytics</span>
        </div>
        <h1>Reports / Analytics</h1>
      </div>

      {/* Stats Cards */}
      <div className="stats-grid">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.id} className="stat-card" style={{ backgroundColor: stat.bgColor }}>
              <div className="stat-header">
                <Icon style={{ color: stat.color }} className="stat-icon" />
                <span className="trend-badge" style={{ color: stat.color }}>
                  {stat.trend === "up" ? "↑" : "↓"} {stat.change} from last month
                </span>
              </div>
              <div className="stat-value" style={{ color: stat.color }}>
                {stat.value}
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          );
        })}
      </div>

      {/* Charts Grid */}
      <div className="charts-grid">
        {/* Tasks Overview */}
        <div className="chart-card">
          <div className="chart-header">
            <h2>Tasks Overview</h2>
          </div>
          <div className="chart-content">
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={tasksOverviewData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {tasksOverviewData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={overviewColors[index]} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
            <div className="chart-legend">
              {tasksOverviewData.map((item, index) => (
                <div key={index} className="legend-item">
                  <span className="legend-dot" style={{ backgroundColor: overviewColors[index] }}></span>
                  <div className="legend-text">
                    <strong>{item.name}</strong>
                    <span>{item.value} ({item.percentage}%)</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Performance */}
        <div className="chart-card large">
          <div className="chart-header">
            <h2>Team Performance</h2>
            <select className="chart-select">
              <option>This Month</option>
              <option>This Week</option>
              <option>This Year</option>
            </select>
          </div>
          <div className="chart-content">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={teamPerformanceData} margin={{ bottom: 20, right: 30 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="name" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="tasks" fill="#10b981" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Second Row Charts */}
      <div className="charts-grid">
        {/* Tasks by Priority */}
        <div className="chart-card">
          <div className="chart-header">
            <h2>Tasks by Priority</h2>
          </div>
          <div className="chart-content">
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={priorityData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {priorityData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={priorityColors[index]} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
            <div className="chart-legend">
              {priorityData.map((item, index) => (
                <div key={index} className="legend-item">
                  <span className="legend-dot" style={{ backgroundColor: priorityColors[index] }}></span>
                  <div className="legend-text">
                    <strong>{item.name}</strong>
                    <span>{item.value} ({item.percentage}%)</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tasks by Status */}
        <div className="chart-card">
          <div className="chart-header">
            <h2>Tasks by Status</h2>
          </div>
          <div className="chart-content">
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={statusData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {statusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={statusColors[index]} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
            <div className="chart-legend">
              {statusData.map((item, index) => (
                <div key={index} className="legend-item">
                  <span className="legend-dot" style={{ backgroundColor: statusColors[index] }}></span>
                  <div className="legend-text">
                    <strong>{item.name}</strong>
                    <span>{item.value} ({item.percentage}%)</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Trend and Activity */}
      <div className="charts-grid">
        {/* Tasks Trend */}
        <div className="chart-card large">
          <div className="chart-header">
            <h2>Tasks Trend</h2>
            <select className="chart-select">
              <option>This Month</option>
              <option>This Week</option>
              <option>This Year</option>
            </select>
          </div>
          <div className="chart-content">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={trendData} margin={{ bottom: 20, right: 30, top: 10 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="date" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip content={<CustomTooltip />} />
                <Line
                  type="monotone"
                  dataKey="tasks"
                  stroke="#10b981"
                  strokeWidth={3}
                  dot={{ fill: "#10b981", r: 5 }}
                  activeDot={{ r: 7 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Bottom Section: Activity and Insights */}
      <div className="bottom-grid">
        {/* Recent Activity */}
        <div className="activity-card">
          <div className="card-header">
            <h2>Recent Activity</h2>
          </div>
          <div className="activity-list">
            {recentActivity.map((item) => (
              <div key={item.id} className="activity-item">
                <div className="activity-avatar">{item.avatar}</div>
                <div className="activity-content">
                  <p>
                    <strong>{item.actor}</strong> {item.action}
                  </p>
                  <span className="activity-time">{item.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Insights */}
        <div className="insights-card">
          <div className="card-header">
            <h2>Insights</h2>
          </div>
          <div className="insights-list">
            {insights.map((insight) => (
              <div key={insight.id} className="insight-item">
                <span className="insight-icon">{insight.icon}</span>
                <p>{insight.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
