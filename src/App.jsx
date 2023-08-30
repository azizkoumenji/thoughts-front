import { useEffect, useState } from "react";
import "./App.css";
import Landing from "./Components/Landing/Landing";

function App() {
  let [mode, setMode] = useState("light");

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

  console.log(mode);

  let classes = "";
  if (mode === "dark") {
    classes = "dark text-foreground bg-background min-h-screen";
  } else {
    classes = "min-h-screen";
  }
  console.log(classes);

  return (
    <main className={classes}>
      <Landing />
    </main>
  );
}

export default App;
