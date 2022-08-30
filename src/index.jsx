import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { red, green } from "@material-ui/core/colors";
import DenseTable from "./table";
import FindBar from "./searchBar";
import { Switch } from "@material-ui/core";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper
  }
}));
// In App function for dark and light mode useState is used
export default function App() {
  const classes = useStyles();
  const [toggleDark, settoggleDark] = useState(false);
  const [value, setValue] = useState(0);
  const [apiData, setApiData] = useState([]);

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: red[500]
      },
      secondary: {
        main: green[500]
      },
      type: toggleDark ? "dark" : "light"
    }
  });
  //fetching data from API
  useEffect(() => {
    (async () => {
      const fetchedApiData = await fetch("https://api.publicapis.org/entries");
      const fetchData = await fetchedApiData.json();
      setApiData(fetchData?.entries);
    })();
  }, []);

  function handleChange(event, newValue) {
    setValue(newValue);
  }
  const handleModeChange = () => {
    settoggleDark(!toggleDark);
  };

  return (
    // Higher order component (HOC) for light and dark theme change
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            <Tab label="API Table" {...a11yProps(0)} />
            <Tab label="Card View + Search" {...a11yProps(1)} />
            <Tab label="Dark/Light" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <DenseTable />
        </TabPanel>
        <TabPanel value={value} index={1}>
          {/* search bar functionality in card view tab */}
          <FindBar />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Switch
            checked={toggleDark}
            onChange={handleModeChange}
            name="toggleDark"
            color="default"
          />
        </TabPanel>
      </div>
    </MuiThemeProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
