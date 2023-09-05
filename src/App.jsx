import { useEffect, useState } from "react";
import Landing from "./components/landing/Landing";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { NewUser } from "./components/landing/NewUser";
import Home from "./components/home/Home";

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
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Landing />} />
          <Route path="/newuser" element={<NewUser />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
