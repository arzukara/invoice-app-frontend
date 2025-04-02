import React, { useState } from "react";
import {
  Box,
  Typography,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import DescriptionIcon from "@mui/icons-material/Description";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FoxLogo from "../foxLogo";
import Envelope from "../icons/envelope";
import Squares2x2 from "../icons/squares2x2";
import Clock from "../icons/clock";
import ChartBar from "../icons/chartBar";
import DocumentText from "../icons/documentText";

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Box
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: expanded ? 220 : 64,
        transition: "width 0.3s",
        zIndex: 10,
        backgroundColor: "#ffffff1a", // Yeni background-color
        border: "1px solid #ffffff33", // Yeni border
        backdropFilter: "blur(29.1px)", // Yeni backdrop-filter
        boxShadow:
          "0px 25px 56px 0px rgba(0, 0, 0, 0.08), 0px 101px 101px 0px rgba(0, 0, 0, 0.07), 0px 228px 137px 0px rgba(0, 0, 0, 0.04), 0px 406px 162px 0px rgba(0, 0, 0, 0.01), 0px 634px 177px 0px rgba(0, 0, 0, 0)",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: expanded ? "flex-start" : "center",
        p: 1,
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          mb: 2,
          justifyContent: "flex-start",
        }}
      >
        <Box sx={{ flexShrink: 0 }}>
          <FoxLogo width={45} height={45} />
        </Box>
        <Typography
          variant="body1"
          sx={{
            fontWeight: "bold",
            ml: expanded ? 1 : 0, // Genişlediğinde araya boşluk bırakır
            opacity: expanded ? 1 : 0,
            transition: "opacity 0.3s, margin 0.3s",
            whiteSpace: "nowrap",
          }}
        >
          Reynox
        </Typography>
      </Box>

      <Divider sx={{ mb: 1, width: "100%" }} />

      <List sx={{ width: "100%", flexGrow: 1 }}>
        <ListItemButton sx={{ justifyContent: "center" }}>
          <ListItemIcon sx={{ minWidth: 0 }}>
            <Squares2x2 />
          </ListItemIcon>
          {expanded && <ListItemText primary="Dashboard" sx={{ ml: 1 }} />}
        </ListItemButton>

        <ListItemButton sx={{ justifyContent: "center" }}>
          <ListItemIcon sx={{ minWidth: 0 }}>
            <Clock />
          </ListItemIcon>
          {expanded && <ListItemText primary="History" sx={{ ml: 1 }} />}
        </ListItemButton>

        <ListItemButton sx={{ justifyContent: "center" }}>
          <ListItemIcon sx={{ minWidth: 0 }}>
            <ChartBar/>
          </ListItemIcon>
          {expanded && <ListItemText primary="Analysis" sx={{ ml: 1 }} />}
        </ListItemButton>

        <Divider sx={{ my: 1 }} />

        {expanded && (
          <Typography variant="subtitle2" sx={{ ml: 2, mb: 1, color: "gray" }}>
            Services
          </Typography>
        )}

        <ListItemButton sx={{ justifyContent: "center" }}>
          <ListItemIcon sx={{ minWidth: 0 }}>
            <Envelope />
          </ListItemIcon>
          {expanded && <ListItemText primary="Messages" sx={{ ml: 1 }} />}
        </ListItemButton>

        <ListItemButton sx={{ justifyContent: "center" }}>
          <ListItemIcon sx={{ minWidth: 0 }}>
            <DocumentText />
          </ListItemIcon>
          {expanded && <ListItemText primary="Documents" sx={{ ml: 1 }} />}
        </ListItemButton>
      </List>
    </Box>
  );
};

export default Sidebar;
