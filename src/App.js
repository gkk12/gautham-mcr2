import { Route, Routes } from "react-router-dom";

import { LandingPage } from "./components/LandingPage";
import { NewHabitDialog } from "./components/NewHabitDialog";
import "./styles.css";
import { AboutHabit } from "./components/AboutHabit";

export default function App() {
  return (
    <div className="App">
      {/* <LandingPage /> */}

      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/create" element={<NewHabitDialog />}></Route>
        <Route path="/about/:imageId" element={<AboutHabit />}></Route>
      </Routes>
    </div>
  );
}
