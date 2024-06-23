import "./App.css";
import Nav from "./Components/Nav/Nav";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Outlet />
    </div>
  );
}
