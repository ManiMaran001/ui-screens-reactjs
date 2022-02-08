import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  mainRoot: {
    display: "flex",
    flexDirection: "row",
    paddingTop: "8px",
    paddingBottom:"6px",
    justifyContent: "space-between",
  },
  root: {
    marginLeft: "16px",
    borderRadius: "8px",
    marginTop: "-3px",
    padding: "8px 8px 6px 8px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    background: "#fff",
    flexGrow: 1,
  },
  logo1: {
    width: "100%",
    height: "40px",
  },
  logo2: {
    width: "80%",
    height: "30px",
  },
  "@media (max-width: 600px)": {
    root: {
      paddingLeft: "1px",
      marginLeft: "1px",
      borderRadius: "8px",
      marginTop: "2px",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      background: "#fff",
    },
  },
  // '@media (min-width: 600px)' : {
  //   root:{
  //     background:"green"
  //   },
  // },
  // '@media (min-width: 768px)' : {
  //   root:{
  //     background:"orange"
  //   },
  // },
  // '@media (min-width: 992px)' : {
  //   root:{
  //     background:"green"
  //   },
  // }
});

const Root = styled(AppBar)(({ theme }) => ({
  padding: theme.spacing(1),
  borderRadius: "0px 0px 8px 8px",
  minHeight: "60px",
  width: "98%",
  right: "1%",
  left: "1%",
  background: "#025886",
  [theme.breakpoints.down("sm")]: {
    borderRadius: "0px 0px 8px 8px",
    minHeight: "60px",
    width: "90%",
    right: "3%",
    left: "5%",
    background: "#025886",
  },
}));

function Header() {
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Root position="fixed">
        <Toolbar>
          <Box className={classes.mainRoot}>
            <Box className={classes.root}>
              <Box sx={{ ml: 2 }}>
                <img
                  className={classes.logo1}
                  src="http://seyasoftech.com/wreno/images/Werno_Logo.png"
                />
              </Box>
              <Box sx={{ ml: 1 }}>
                <img
                  className={classes.logo2}
                  src="http://seyasoftech.com/wreno/images/Wreno_Name_logo.png"
                />
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </Root>
    </Box>
  );
}
export default Header;
