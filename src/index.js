import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import { HabitContext, HabitProvider } from "./contexts/HabitContext";

export { HabitContext };
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Router>
      <HabitProvider>
        <App />
      </HabitProvider>
    </Router>
  </StrictMode>
);
