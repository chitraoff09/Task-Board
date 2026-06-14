import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Board from "./pages/Board";
import AddTask from "./pages/AddTask";
import Dashboard from "./pages/Dashboard";
import TaskDetails from "./pages/TaskDetails";
import TeamMembers from "./pages/TeamMembers";
import Reports from "./pages/Reports";
import Search from "./pages/Search";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/board" element={<Board />} />
          <Route path="/add-task" element={<AddTask />} />
          <Route path="/task-details" element={<TaskDetails />} />
          <Route path="/team" element={<TeamMembers />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;