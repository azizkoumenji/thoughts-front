import { useEffect, useState } from "react";
import "./App.css";
import Landing from "./components/landing/Landing";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { NewUser } from "./components/landing/NewUser";
import SlideRoutes from "react-slide-routes";

function App() {
  let [mode, setMode] = useState("dark");

  useEffect(() => {
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? setMode("dark")
      : setMode("light");

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        const colorScheme = event.matches ? "dark" : "light";
        setMode(colorScheme);
      });
  }, []);

  let classes = "";
  if (mode === "dark") {
    classes = "dark text-foreground bg-background min-h-screen";
  } else {
    classes = "min-h-screen";
  }

  return (
    <main className={classes}>
      <Router>
        <SlideRoutes>
          <Route path="/" element={<Landing />} />
          <Route path="/newuser" element={<NewUser />} />
        </SlideRoutes>
      </Router>
    </main>
  );
}

export default App;
