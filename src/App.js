import { Outlet } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme }  from "./theme";
import ResponsiveAppBar from "./components/appBar/appBar.jsx";

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <ResponsiveAppBar></ResponsiveAppBar>
      <Outlet />
    </ThemeProvider>
  );
};
export default App;
