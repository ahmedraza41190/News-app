import "./index.css";
import { Header, Content, Footer } from "./components";
import { useState } from "react";

export default function App() {
  //useState ka Variable for theme mode dark ya light
  const [themeMode, setThemeMode] = useState(false);

  //function to enable dark mode
  const toggleThemeMode = () => setThemeMode(!themeMode);

  return (
    <div className={themeMode ? "dark" : "light"}>
      <Header toggleThemeMode={toggleThemeMode} mode={themeMode} />
      <Content />
      <Footer />
    </div>
  );
}
