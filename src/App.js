import { Route, Routes } from "react-router-dom";

import { LandingPage } from "./components/LandingPage";
import { NewHabitDialog } from "./components/NewHabitDialog";
import "./styles.css";
import { AboutHabit } from "./components/AboutHabit";
import { EditHabit } from "./components/EditHabit";
import { ArchivedHabits } from "./components/ArchivedHabits";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/create" element={<NewHabitDialog />}></Route>
        <Route path="/edit/:habitId" element={<EditHabit />}></Route>
        <Route path="/about/:habitId" element={<AboutHabit />}></Route>
        <Route path="/archived" element={<ArchivedHabits />}></Route>
      </Routes>
    </div>
  );
}
