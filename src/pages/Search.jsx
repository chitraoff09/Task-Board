import { useState } from "react";
import {
  FiChevronRight,
  FiSearch,
  FiX,
  FiChevronDown,
  FiEye,
  FiChevronLeft,
  FiMoreVertical,
} from "react-icons/fi";
import "./Search.css";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("authentication");
  const [selectedMember, setSelectedMember] = useState("All Members");
  const [selectedStatus, setSelectedStatus] = useState("All Status");
  const [selectedPriority, setSelectedPriority] = useState("All Priority");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [searchIn, setSearchIn] = useState("All Fields");
  const [dateRange, setDateRange] = useState({ start: "May 01, 2025", end: "May 31, 2025" });
  const [selectedTags, setSelectedTags] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showMoreFilters, setShowMoreFilters] = useState(false);

  const members = [
    "All Members",
    "Karthik Raj",
    "Priya Dharshini",
    "Arun Kumar",
    "Vigneshvaran",
    "Nandini Priya",
  ];

  const statuses = ["All Status", "To Do", "In Progress", "In Review", "Done"];
  const priorities = ["All Priority", "High", "Medium", "Low"];
  const categories = ["All Categories", "Development", "Security", "UI/UX", "DevOps"];
  const searchOptions = ["All Fields", "Task Title", "Description", "Comments"];
  const allTags = ["Development", "Security", "UI/UX", "Backend", "Frontend"];

  const tasks = [
    {
      id: 1,
      title: "Implement user authentication",
      description: "Implement JWT based authentication for user login and protected routes.",
      member: "Karthik Raj",
      status: "In Progress",
      priority: "High",
      dueDate: "May 23, 2025",
      category: "Development",
    },
    {
      id: 2,
      title: "Fix authentication token expiry issue",
      description: "Resolve the issue with JWT token expiry and auto-refresh flow.",
      member: "Priya Dharshini",
      status: "In Progress",
      priority: "High",
      dueDate: "May 21, 2025",
      category: "Development",
    },
    {
      id: 3,
      title: "Add two-factor authentication (2FA)",
      description: "Implement 2FA using authenticator app for better security.",
      member: "Arun Kumar",
      status: "To Do",
      priority: "Medium",
      dueDate: "May 25, 2025",
      category: "Security",
    },
    {
      id: 4,
      title: "Authentication API integration",
      description: "Integrate authentication API with frontend login and register flow.",
      member: "Vigneshvaran",
      status: "In Review",
      priority: "Medium",
      dueDate: "May 24, 2025",
      category: "Development",
    },
    {
      id: 5,
      title: "User authentication UI design",
      description: "Design and implement the login and registration UI.",
      member: "Nandini Priya",
      status: "Done",
      priority: "Low",
      dueDate: "May 18, 2025",
      category: "UI/UX",
    },
    {
      id: 6,
      title: "Authentication logs monitoring",
      description: "Set up monitoring and alerts for failed authentication attempts.",
      member: "Arun Kumar",
      status: "To Do",
      priority: "Low",
      dueDate: "May 27, 2025",
      category: "DevOps",
    },
  ];

  const getStatusColor = (status) => {
    const colors = {
      "To Do": "#3b82f6",
      "In Progress": "#f59e0b",
      "In Review": "#8b5cf6",
      Done: "#10b981",
    };
    return colors[status] || "#6b7280";
  };

  const getStatusBgColor = (status) => {
    const colors = {
      "To Do": "#eff6ff",
      "In Progress": "#fffbf0",
      "In Review": "#faf5ff",
      Done: "#ecfdf5",
    };
    return colors[status] || "#f3f4f6";
  };

  const getPriorityColor = (priority) => {
    const colors = {
      High: "#ef4444",
      Medium: "#f59e0b",
      Low: "#10b981",
    };
    return colors[priority] || "#6b7280";
  };

  const handleTagToggle = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleClearSearch = () => {
    setSearchTerm("");
  };

  return (
    <div className="search-page">
      <div className="page-header">
        <div className="breadcrumb">
          <span>Home</span>
          <FiChevronRight className="breadcrumb-icon" />
          <span>Search Tasks</span>
        </div>
        <h1>Search Tasks</h1>
      </div>

      <div className="search-container">
        {/* Main Content */}
        <div className="search-main">
          {/* Search Bar */}
          <div className="search-bar-section">
            <div className="search-bar">
              <FiSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search tasks, members..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button className="clear-btn" onClick={handleClearSearch}>
                  <FiX />
                </button>
              )}
            </div>

            {/* Filter Buttons */}
            <div className="filter-section">
              <div className="filter-buttons">
                {/* Members Filter */}
                <div className="filter-dropdown">
                  <button className="filter-btn">
                    <span>{selectedMember}</span>
                    <FiChevronDown size={16} />
                  </button>
                  <div className="dropdown-menu">
                    {members.map((member) => (
                      <button
                        key={member}
                        className={`dropdown-item ${
                          selectedMember === member ? "active" : ""
                        }`}
                        onClick={() => setSelectedMember(member)}
                      >
                        {member}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Status Filter */}
                <div className="filter-dropdown">
                  <button className="filter-btn">
                    <span>{selectedStatus}</span>
                    <FiChevronDown size={16} />
                  </button>
                  <div className="dropdown-menu">
                    {statuses.map((status) => (
                      <button
                        key={status}
                        className={`dropdown-item ${
                          selectedStatus === status ? "active" : ""
                        }`}
                        onClick={() => setSelectedStatus(status)}
                      >
                        {status}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Priority Filter */}
                <div className="filter-dropdown">
                  <button className="filter-btn">
                    <span>{selectedPriority}</span>
                    <FiChevronDown size={16} />
                  </button>
                  <div className="dropdown-menu">
                    {priorities.map((priority) => (
                      <button
                        key={priority}
                        className={`dropdown-item ${
                          selectedPriority === priority ? "active" : ""
                        }`}
                        onClick={() => setSelectedPriority(priority)}
                      >
                        {priority}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Category Filter */}
                <div className="filter-dropdown">
                  <button className="filter-btn">
                    <span>{selectedCategory}</span>
                    <FiChevronDown size={16} />
                  </button>
                  <div className="dropdown-menu">
                    {categories.map((category) => (
                      <button
                        key={category}
                        className={`dropdown-item ${
                          selectedCategory === category ? "active" : ""
                        }`}
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                {/* More Filters */}
                <button
                  className="filter-btn more-filters-btn"
                  onClick={() => setShowMoreFilters(!showMoreFilters)}
                >
                  More Filters
                  <FiChevronDown size={16} />
                </button>
              </div>

              {/* Results Info */}
              <div className="results-info">
                <span className="results-count">12 results found for "{searchTerm}"</span>
                <div className="action-buttons">
                  <button className="action-btn">Clear All</button>
                  <button className="action-btn save-btn">Save Search</button>
                </div>
              </div>
            </div>
          </div>

          {/* Results Table */}
          <div className="results-table-section">
            <div className="table-header">
              <div className="header-col">
                <input type="checkbox" />
              </div>
              <div className="header-col col-task">Task</div>
              <div className="header-col col-member">Member</div>
              <div className="header-col col-status">Status</div>
              <div className="header-col col-priority">Priority</div>
              <div className="header-col col-date">Due Date</div>
              <div className="header-col col-action">
                <FiEye size={16} />
              </div>
            </div>

            <div className="table-body">
              {tasks.map((task) => (
                <div key={task.id} className="table-row">
                  <div className="row-col">
                    <input type="checkbox" />
                  </div>
                  <div className="row-col col-task">
                    <div className="task-info">
                      <p className="task-title">{task.title}</p>
                      <p className="task-description">{task.description}</p>
                    </div>
                  </div>
                  <div className="row-col col-member">
                    <div className="member-avatar">
                      {task.member
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <span>{task.member}</span>
                  </div>
                  <div className="row-col col-status">
                    <span
                      className="status-badge"
                      style={{
                        color: getStatusColor(task.status),
                        backgroundColor: getStatusBgColor(task.status),
                      }}
                    >
                      {task.status}
                    </span>
                  </div>
                  <div className="row-col col-priority">
                    <span
                      className="priority-badge"
                      style={{ color: getPriorityColor(task.priority) }}
                    >
                      {task.priority}
                    </span>
                  </div>
                  <div className="row-col col-date">
                    <div className="date-badge">
                      📅 {task.dueDate}
                    </div>
                  </div>
                  <div className="row-col col-action">
                    <button className="action-icon-btn">
                      <FiEye size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="pagination">
              <button className="pagination-btn" disabled={currentPage === 1}>
                <FiChevronLeft size={16} />
              </button>
              <button className="pagination-item active">1</button>
              <button className="pagination-item">2</button>
              <span className="pagination-ellipsis">...</span>
              <button className="pagination-btn">
                <FiChevronRight size={16} />
              </button>
              <div className="pagination-info">
                <span>Showing 1 to 6 of 12 results</span>
                <select className="pagination-select">
                  <option>10</option>
                  <option>20</option>
                  <option>50</option>
                </select>
                <span>per page</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Filters */}
        <div className="search-sidebar">
          {/* Search In */}
          <div className="sidebar-section">
            <h3>Search in</h3>
            <div className="radio-group">
              {searchOptions.map((option) => (
                <label key={option} className="radio-label">
                  <input
                    type="radio"
                    name="searchIn"
                    value={option}
                    checked={searchIn === option}
                    onChange={(e) => setSearchIn(e.target.value)}
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Date Range */}
          <div className="sidebar-section">
            <h3>Date Range</h3>
            <div className="date-range-section">
              <div className="date-picker">
                <input
                  type="date"
                  value={dateRange.start}
                  onChange={(e) =>
                    setDateRange({ ...dateRange, start: e.target.value })
                  }
                />
              </div>
              <span className="date-separator">→</span>
              <div className="date-picker">
                <input
                  type="date"
                  value={dateRange.end}
                  onChange={(e) =>
                    setDateRange({ ...dateRange, end: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="quick-date-buttons">
              <button className="quick-date-btn">May 01, 2025</button>
              <button className="quick-date-btn">May 31, 2025</button>
            </div>
          </div>

          {/* Tags */}
          <div className="sidebar-section">
            <h3>Tags</h3>
            <div className="tags-dropdown">
              <button className="tags-dropdown-btn">
                All Tags
                <FiChevronDown size={16} />
              </button>
              <div className="tags-list">
                {allTags.map((tag) => (
                  <label key={tag} className="tag-checkbox">
                    <input
                      type="checkbox"
                      checked={selectedTags.includes(tag)}
                      onChange={() => handleTagToggle(tag)}
                    />
                    <span>{tag}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
