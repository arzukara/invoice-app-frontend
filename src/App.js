import { Outlet } from "react-router-dom";
import "./App.css";
import { ThemeProvider, Box } from "@mui/material";
import { lightTheme }  from "./theme";
import Sidebar from "./components/sideBar/sideBar.jsx";

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box sx={{ position: "relative", height: "100vh" }}>
        <Sidebar />
        <Box sx={{ p: 2, height: "100vh" }}>
          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
