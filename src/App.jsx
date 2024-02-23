import AddressForm from "./components/AddressForm";
import "./App.css";
import ProductScroll from "./components/ProductScroll";
import { useEffect, useState } from "react";
import { ThemeProvider } from "./context/Theme";
import ThemeBtn from "./components/ThemeBtn";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };
  const darkTheme = () => {
    setThemeMode("dark");
  };
  useEffect(() => {
    document.querySelector("html").classList.remove("dark");
    if (themeMode === "dark")
      document.querySelector("html").classList.add(themeMode);
    console.log;
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      {/* Address Selection  Component */}
      <div
        className={themeMode === "light" ? "light-mode-text" : "dark-mode-text"}
      >
        <ThemeBtn />
        <ProductScroll />
      </div>
      {/* Price */}
      {/* <AddressForm /> */}
    </ThemeProvider>
  );
}

export default App;
