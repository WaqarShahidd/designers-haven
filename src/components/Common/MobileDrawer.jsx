import { Box, List, SwipeableDrawer } from "@mui/material";
import {
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { fonts } from "../../theme/theme";
import { nav } from "../../assets/data/dummyData";
import { useNavigate } from "react-router-dom";

const MobileDrawer = ({ open, toggleSidebar }) => {
  const navigate = useNavigate();

  return (
    <SwipeableDrawer
      anchor="left"
      open={open}
      onClose={toggleSidebar}
      onOpen={toggleSidebar}
    >
      <Box
        sx={{
          width: 250,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
        role="presentation"
        onClick={toggleSidebar}
        onKeyDown={toggleSidebar}
      >
        <List>
          <Box
            sx={{
              py: 4,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              onClick={() => navigate("/")}
              sx={{
                fontSize: "32px",
                fontWeight: 700,
                color: "#000",
                fontFamily: fonts.styreneBlack,
                lineHeight: "0",
                letterSpacing: "0.5px",
                cursor: "pointer",
                mb: 6,
                mx: 4,
              }}
            >
              DH.
            </Typography>
            {nav?.map((item, index) => {
              return (
                <ListItem key={item.id} disablePadding>
                  <ListItemButton
                    onClick={() => navigate(item.link)}
                    sx={{
                      borderBottom: "1px solid #DDDDDD",
                      "&:hover": { backgroundColor: "transparent" },
                    }}
                  >
                    <ListItemText
                      disablePadding
                      primary={
                        <Typography
                          sx={{
                            fontFamily: fonts.styreneLight,
                            fontSize: "12px",
                            color: "#000",
                          }}
                        >
                          {item.name}
                        </Typography>
                      }
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </Box>
        </List>
      </Box>
    </SwipeableDrawer>
  );
};

export default MobileDrawer;
