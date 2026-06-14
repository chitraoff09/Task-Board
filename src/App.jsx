import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Board from "./pages/Board";
import AddTask from "./pages/AddTask";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import TaskDetails from "./pages/TaskDetails";
import TeamMembers from "./pages/TeamMembers";
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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;