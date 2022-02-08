import React from "react";
import {
  Drawer,
  Toolbar,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Grid,
  Typography,
  Button,
  TextField,
  Paper,
  Checkbox,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormControl,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Carousel from "react-material-ui-carousel";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { withStyles } from "@mui/styles";
import "./Styles.css";
const items = [
  {
    id: 1,
    url: "http://seyasoftech.com/wreno/images/crcl_design.png",
  },
  {
    id: 2,
    url: "http://seyasoftech.com/wreno/images/2.png",
  },
  {
    id: 3,
    url: "http://seyasoftech.com/wreno/images/3.png",
  },
  {
    id: 4,
    url: "http://seyasoftech.com/wreno/images/4.png",
  },
];

const checkBoxes = [
  { id: 1, name: "Phoneix" },
  { id: 2, name: "Atlanta" },
  { id: 3, name: "Charlotte" },
  { id: 4, name: "Raleigh" },
  { id: 5, name: "Dallas" },
  { id: 6, name: "Tampa" },
  { id: 7, name: "Austin" },
  { id: 8, name: "Las Vegas" },
];

const detailBox = [
  { id: 1, name: "Appliance Repair / Installation" },
  { id: 2, name: "Carpentry" },
  { id: 3, name: "Carpet Repar / Replacement" },
  { id: 4, name: "Demolition" },
  { id: 5, name: "DryWall Hanging" },
  { id: 6, name: "Cleaning(refresh / deep)" },
  { id: 7, name: "Electrical" },
  { id: 8, name: "Fencing Repair / Replacement" },
  { id: 9, name: "Fixture Repair / Installation" },
  { id: 10, name: "Flooring Repair / Installation" },
  { id: 12, name: "Foundation" },
  { id: 13, name: "Handyman (drywall repair, paint touch-up, general repair)" },
  { id: 14, name: "Junk Removal / Trash out" },
  { id: 16, name: "Landscaping" },
  { id: 17, name: "Locksmith" },
  { id: 18, name: "Masonry" },
  { id: 19, name: "Mold Remediation" },
  { id: 20, name: "Plumbing" },
  { id: 21, name: "Paint Interior / Exterior" },
  { id: 22, name: "Pool Repair & Remodeling" },
  { id: 23, name: "Pool Service & Maintenance" },
  { id: 25, name: "Pressure Washing" },
  { id: 26, name: "Roofing" },
  { id: 27, name: "Siding Repair / Replacement" },
  { id: 28, name: "Smell or Odor Elimination" },
  { id: 29, name: "Window Repair / Replacement" },
  { id: 30, name: "Other" },
];

const detailBox1 = [
  { id: 1, name: "Yes,Same day" },
  { id: 2, name: "Yes, Next day" },
  { id: 3, name: "I need more than 48 hours to complete jobs upon assignment" },
];

const detailBox2 = [
  { id: 1, name: "1-4" },
  { id: 2, name: "5-10" },
  { id: 3, name: "10+" },
  { id: 4, name: "others" },
];

const Field = styled(TextField)({
  "& .MuiOutlinedInput-input": {
    padding: "6px",
  },
});

const styles = {
  dot: {
    cursor: "pointer",
    height: "15px",
    width: "15px",
    margin: "0 2px",
    backgroundColor: "#bbb",
    borderRadius: "50%",
    //transition: "background-color 0.6s ease"
  },
  class1:{
    background:"red"
  },
  class2:{
    background:"blue"
  },
  class3:{
    background:"orange"
  },
  class4:{
    background:"green"
  },
};
class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      BusinessName: "",
      OwnerName: "",
      Email: "",
      PhNo: "",
      checkBox1: "",
      RadioBox: "",
      selected: new Map(),
      citiesBox: [],
      service: new Map(),
      serviceBox: [],
      TeamBox: new Map(),
      DayBox: [],
      WeekTeamBox: new Map(),
      WeekBox: [],
      DummyBox: false,
      DummyWeek: false,
      errors: {},
      isChecked: true,
      WeekValue: "",
      ServiceValue: "",
      sampleArray: [{ head: "1" }],
      OriginalArray: [
        { head: "1" },
        { head: "2" },
        { head: "3" },
        { head: "4" },
        { head: "5" },
        { head: "6" },
        { head: "7" },
        { head: "8" },
      ],
      index: 0,
      method: 0,
      methods: 0,
    };
  }
  next = () => {
    if (this.state.index < this.state.OriginalArray.length - 1) {
      this.setState({ index: this.state.index + 1 });
    }
    console.log(this.state.index);
    this.state.sampleArray.splice(
      0,
      1,
      this.state.OriginalArray[this.state.Index]
    );
  };
  previous = () => {
    this.setState({ index: this.state.index - 1 });
    if (this.state.index !== 0) {
      this.state.sampleArray.splice(
        0,
        1,
        this.state.OriginalArray[this.state.index]
      );
    }
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onChange = (e) => {
    const item = e.target.name;
    const isChecked = e.target.checked;
    this.setState((prevState) => ({
      selected: prevState.selected.set(item, isChecked),
    }));
  };
  // onChange=(id)=>{
  //   let selected = this.state.selected
  //   //console.log("name",selected)
  //   let find = selected.findIndex(item => item.id === id)
  //   if(find > -1) {
  //     selected.splice(find, 1)
  //   } else {
  //     selected.push(checkBoxes.find(item=>item.id===id))

  //   }
  //   this.setState({ selected }) }
  onChange1 = (e) => {
    const item = e.target.name;
    this.setState({ DummyBox: item });
    const isChecked = e.target.checked;
    this.setState((prevState) => ({
      service: prevState.service.set(item, isChecked),
    }));
    if (item === "Other" && isChecked === true) {
      this.setState({ DummyBox: true });
    } else {
      this.setState({ DummyBox: false });
    }
  };

  onChange2 = (e) => {
    const item = e.target.name;
    const isChecked = e.target.checked;
    this.setState((prevState) => ({
      TeamBox: prevState.TeamBox.set(item, isChecked),
    }));
  };
  onChange3 = (e) => {
    const item = e.target.name;
    const isChecked = e.target.checked;
    this.setState((prevState) => ({
      WeekTeamBox: prevState.WeekTeamBox.set(item, isChecked),
    }));
    if (item === "others" && isChecked === true) {
      this.setState({ DummyWeek: true });
    } else {
      this.setState({ DummyWeek: false });
    }
  };
  WeekBoxCities_Validation = () => {
    let arr = [];
    for (const user of this.state.WeekTeamBox.values()) {
      arr.push(user);
    }
    const even = (element) => element === true;
    let check = arr.some(even);
    return check;
  };
  teamBoxCities_Validation = () => {
    let arr = [];
    for (const user of this.state.TeamBox.values()) {
      arr.push(user);
    }
    const even = (element) => element === true;
    let check = arr.some(even);
    return check;
  };
  checkBoxCities_Validation = () => {
    let arr = [];
    for (const user of this.state.selected.values()) {
      arr.push(user);
    }
    const even = (element) => element === true;
    let check = arr.some(even);
    return check;
  };
  serviceBoxCities_Validation = () => {
    let arr = [];
    for (const user of this.state.service.values()) {
      arr.push(user);
    }
    const even = (element) => element === true;
    console.log("service", arr);
    let check = arr.some(even);
    return check;
  };
  WeekBoxCities_Filter = () => {
    let arr = [];
    for (const user of this.state.WeekTeamBox.keys()) {
      let name = this.state.WeekTeamBox.get(user) === true ? user : "";
      arr.push(name);
    }
    let names = arr.filter((i) => i !== "");
    this.state.WeekBox.push(...names);
    console.log(this.state.WeekBox);
  };
  teamBoxCities_Filter = () => {
    let arr = [];
    for (const user of this.state.TeamBox.keys()) {
      let name = this.state.TeamBox.get(user) === true ? user : "";
      arr.push(name);
    }
    let names = arr.filter((i) => i !== "");
    this.state.DayBox.push(...names);
    console.log(this.state.DayBox);
  };
  checkBoxCities_Filter = () => {
    let arr = [];
    for (const user of this.state.selected.keys()) {
      let name = this.state.selected.get(user) === true ? user : "";
      arr.push(name);
    }
    let names = arr.filter((i) => i !== "");
    this.state.citiesBox.push(...names);
    console.log(this.state.citiesBox);
  };
  serviceBoxCities_Filter = () => {
    let arr = [];
    for (const user of this.state.service.keys()) {
      let name = this.state.service.get(user) === true ? user : "";
      arr.push(name);
    }
    let names = arr.filter((i) => i !== "");
    this.state.serviceBox.push(...names);
    console.log(this.state.serviceBox);
  };

  validationFields = () => {
    const { BusinessName, OwnerName, Email, PhNo, selected } = this.state;
    let errors = {};
    if (BusinessName === "") {
      errors.BusinessName = "please enter the Business name";
    }
    if (OwnerName === "") {
      errors.OwnerName = "please enter the name";
    }
    if (Email === "") {
      errors.Email = "please the fill the email";
    }
    if (PhNo === "") {
      errors.PhNo = "please fill the Phoneno";
    }
    let check = this.checkBoxCities_Validation();
    if (check === false || selected.size === 0) {
      errors.cities = "please fill any cities";
    }
    let check1 = this.serviceBoxCities_Validation();
    if (check1 === false || this.state.service.size === 0) {
      errors.services = "please fill any service";
    }
    let check2 = this.teamBoxCities_Validation();
    if (check2 === false || this.state.TeamBox.size === 0) {
      errors.Day = "please fill any day";
    }
    let check3 = this.WeekBoxCities_Validation();
    if (check3 === false || this.state.WeekTeamBox.size === 0) {
      errors.Week = "please fill any Week days";
    }
    return errors;
  };

  othersBox1 = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  getInitialState = () => {
    this.setState({ selected: new Map() });
    this.setState({ errors: {} });
    this.setState({ BusinessName: "" });
    this.setState({ OwnerName: "" });
    this.setState({ PhNo: "" });
    this.setState({ Email: "" });
    this.setState({ service: new Map() });
    this.setState({ TeamBox: new Map() });
    this.setState({ WeekTeamBox: new Map() });
    this.setState({ WeekValue: "" });
    this.setState({ ServiceValue: "" });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let errors = this.validationFields();
    if (Object.keys(errors).length === 0) {
      this.checkBoxCities_Filter();
      this.serviceBoxCities_Filter();
      this.teamBoxCities_Filter();
      this.WeekBoxCities_Filter();
      this.getInitialState();
      console.log(this.state.ServiceValue);
      console.log(this.state.WeekValue);
    } else {
      this.setState({ errors });
    }
  };
  onNext = (next) => {
    this.state.method = next;
    console.log("hai", this.state.method);
  };
  onPrev = (prev) => {
    this.state.methods = prev;
    console.log("hais", this.state.methods);
  };
  render() {
    const { classes } = this.props;
    const { errors } = this.state;
    // console.log(this.state.selected)
    console.log(errors);
    return (
      <div>
        <Box sx={{ mt: 11.5, minHeight: 50 }} className="root">
          <Grid container>
            <Grid item sm={3} md={3} className="hiddenimg">
              <div style={{ width: "107%", height: "518px" }}>
                <Carousel
                  autoPlay={false}
                  indicators={false}
                  navButtonsAlwaysVisible={true}
                  navButtonsProps={{
                    style: {
                      marginLeft: "10px",
                      marginRight: "10px",
                      width: "44px",
                      height: "44px",
                      backgroundColor: "hsla(0, 0%, 100%, 0.75)",
                      borderRadius: "50%",
                      color: "#000",
                    },
                  }}
                  NextIcon={
                    <ChevronRightIcon
                      sx={{ fontSize: "50px", color: "#000" }}
                    />
                  }
                  PrevIcon={
                    <ChevronLeftIcon sx={{ fontSize: "50px", color: "#000" }} />
                  }
                  next={(next, active) => this.onNext(next)}
                  prev={(prev, active) => this.onPrev(prev)}
                  //   NavButton={({onClick, className, style, next, prev}) => {
                  //     return (
                  //       <>
                  //        <Button onClick={onClick} className={className} style={style}>
                  //             {next && <ChevronRightIcon sx={{fontSize:"50px",color:"#000"}}/>}
                  //         </Button>
                  //         <Button onClick={onClick} className={className} style={style}>
                  //         {prev && <ChevronLeftIcon sx={{fontSize:"50px",color:"#000"}}/> }
                  //         </Button>
                         
                  //       </>
                         
                  //     )
                  // }}
                >
                  {items.map((item) => {
                    return (
                      <div style={{ width: "100%", height: "100%" }}>
                        <img
                          key={item.id}
                          style={{ width: "100%", height: "518px" }}
                          src={item.url}
                        />
                      </div>
                    );
                  })}
                </Carousel>
                {/* <img src="http://seyasoftech.com/wreno/images/crcl_design.png"   style={{ width: "100%",height:"520px"}}></img> */}
              </div>
            </Grid>
            <Grid item sm={12} md={9} xs={12} lg={9}>
              <form onSubmit={this.handleSubmit}>
                <div style={{ height: "450px" }}>
                  <div style={{ height: "450px", overflow: "auto" }}>
                    <Box sx={{ ml: 6, mr: 4 }} className="setText">
                      <Typography
                        variant="subtitle2"
                        gutterBottom
                        component="div"
                        sx={{
                          fontWeight: "bold",
                          fontSize: "16px",
                          color: "#025886",
                          marginBottom: "30px",
                        }}
                      >
                        Allow 72 hours for processing and someone on our team
                        will reach out to you.
                      </Typography>
                      <Box sx={{ mt: 2 }}>
                        {Object.keys(errors).length !== 0 && (
                          <Grid container>
                            <Grid item xs={12} sm={12}>
                              <Paper
                                elevation={1}
                                sx={{
                                  background: "#f2dede",
                                  borderColor: "#ebccd1",
                                  height: "13vh",
                                  borderRadius: "4px",
                                }}
                              >
                                <Typography
                                  variant="subtitle2"
                                  sx={{
                                    color: "#a94442",
                                    fontWeight: "bold",
                                    fontSize: "16px",
                                    paddingTop: "10px",
                                  }}
                                >
                                  {errors.BusinessName ||
                                    errors.OwnerName ||
                                    errors.Email ||
                                    errors.PhNo ||
                                    errors.cities ||
                                    errors.services ||
                                    errors.Day ||
                                    errors.Week}
                                </Typography>
                              </Paper>
                            </Grid>
                          </Grid>
                        )}
                        <div>
                          {this.state.index === 0 && (
                            <div>
                              <Grid container className="FirstBox">
                                <Grid item xs={12} sm={12} md={11} lg={11}>
                                  <Grid container spacing={2}>
                                    <Grid item sm={12} xs={12} md={6} lg={6}>
                                      <Paper
                                        elevation={1}
                                        sx={{
                                          boxShadow:
                                            "rgb(60 64 67 / 30%) 0px 1px 2px 0px, rgb(60 64 67 / 15%) 0px 2px 6px 2px",
                                        }}
                                      >
                                        <Box sx={{ p: 1 }}>
                                          <Box>
                                            <Typography
                                              variant="body2"
                                              sx={{
                                                fontWeight: "normal",
                                                color: "#025886",
                                              }}
                                            >
                                              Business name
                                            </Typography>
                                          </Box>
                                          <Box>
                                            <Field
                                              type="text"
                                              fullWidth
                                              name="BusinessName"
                                              variant="outlined"
                                              required
                                              autoFocus
                                              value={this.state.BusinessName}
                                              sx={{
                                                width: "100%",
                                              }}
                                              onChange={(e) =>
                                                this.handleChange(e)
                                              }
                                            />
                                          </Box>
                                        </Box>
                                      </Paper>
                                    </Grid>
                                    <Grid item sm={12} xs={12} lg={6} md={6}>
                                      <Paper
                                        elevation={1}
                                        sx={{
                                          boxShadow:
                                            "rgb(60 64 67 / 30%) 0px 1px 2px 0px, rgb(60 64 67 / 15%) 0px 2px 6px 2px",
                                        }}
                                      >
                                        <Box sx={{ p: 1 }}>
                                          <Box>
                                            <Typography
                                              variant="body2"
                                              sx={{
                                                fontWeight: "normal",
                                                color: "#025886",
                                              }}
                                            >
                                              Business Owner's name:
                                            </Typography>
                                          </Box>
                                          <Box>
                                            <Field
                                              type="text"
                                              fullWidth
                                              name="OwnerName"
                                              variant="outlined"
                                              required
                                              autoFocus
                                              value={this.state.OwnerName}
                                              sx={{
                                                width: "100%",
                                              }}
                                              onChange={(e) =>
                                                this.handleChange(e)
                                              }
                                            />
                                          </Box>
                                        </Box>
                                      </Paper>
                                    </Grid>
                                    <Grid item sm={12} xs={12} lg={6} md={6}>
                                      <Paper
                                        elevation={1}
                                        sx={{
                                          boxShadow:
                                            "rgb(60 64 67 / 30%) 0px 1px 2px 0px, rgb(60 64 67 / 15%) 0px 2px 6px 2px",
                                        }}
                                      >
                                        <Box sx={{ p: 1 }}>
                                          <Box>
                                            <Typography
                                              variant="body2"
                                              sx={{
                                                fontWeight: "normal",
                                                color: "#025886",
                                              }}
                                            >
                                              Best Contect email:
                                            </Typography>
                                          </Box>
                                          <Box>
                                            <Field
                                              type="text"
                                              fullWidth
                                              name="Email"
                                              variant="outlined"
                                              required
                                              autoFocus
                                              value={this.state.Email}
                                              sx={{
                                                width: "100%",
                                              }}
                                              onChange={(e) =>
                                                this.handleChange(e)
                                              }
                                            />
                                          </Box>
                                        </Box>
                                      </Paper>
                                    </Grid>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </div>
                          )}
                          {this.state.index === 1 && (
                            <div>
                              <Box>
                                <Grid container>
                                  <Grid item xs={12} sm={12} md={12} lg={12}>
                                    <Grid container>
                                      <Grid
                                        item
                                        sm={12}
                                        sx={12}
                                        md={5}
                                        lg={5}
                                        xs={12}
                                      >
                                        <Paper
                                          elevation={1}
                                          sx={{
                                            ml: 0.5,
                                            boxShadow:
                                              "rgb(60 64 67 / 30%) 0px 1px 2px 0px, rgb(60 64 67 / 15%) 0px 2px 6px 2px",
                                          }}
                                        >
                                          <Box sx={{ p: 1 }}>
                                            <Box>
                                              <Typography
                                                variant="body2"
                                                sx={{
                                                  fontWeight: "normal",
                                                  color: "#025886",
                                                }}
                                              >
                                                Business or owner's phone
                                                number:
                                              </Typography>
                                            </Box>
                                            <Box>
                                              <Field
                                                type="text"
                                                fullWidth
                                                name="PhNo"
                                                variant="outlined"
                                                required
                                                value={this.state.PhNo}
                                                autoFocus
                                                sx={{
                                                  width: "100%",
                                                }}
                                                onChange={(e) =>
                                                  this.handleChange(e)
                                                }
                                              />
                                            </Box>
                                          </Box>
                                        </Paper>
                                      </Grid>
                                      <Grid
                                        item
                                        sm={12}
                                        md={7}
                                        lg={7}
                                        xs={12}
                                      ></Grid>
                                    </Grid>
                                    <Grid container>
                                      <Grid
                                        item
                                        xs={12}
                                        sm={12}
                                        md={12}
                                        lg={12}
                                      >
                                        <Paper
                                          elevation={2}
                                          sx={{
                                            mb: 1,
                                            mr: 0.4,
                                            ml: 0.5,
                                            mt: 2,
                                            p: 1,
                                            boxShadow:
                                              "rgb(60 64 67 / 30%) 0px 1px 2px 0px, rgb(60 64 67 / 15%) 0px 2px 6px 2px",
                                          }}
                                        >
                                          <Box
                                            sx={{
                                              display: "flex",
                                              flexDirection: "column",
                                              flexGrow: 1,
                                            }}
                                          >
                                            <Box>
                                              <Typography
                                                variant="body2"
                                                sx={{
                                                  fontWeight: "normal",
                                                  color: "#025886",
                                                }}
                                              >
                                                What cities do you operate in ?
                                              </Typography>
                                            </Box>
                                            <Box sx={{ mt: 0.5 }}>
                                              {checkBoxes.map((check) => {
                                                return (
                                                  <Box
                                                    sx={{
                                                      display: "flex",
                                                      flexDirection: "row",
                                                      alignItems: "center",
                                                      ml: 2,
                                                    }}
                                                    key={check.id}
                                                  >
                                                    <Box>
                                                      <input
                                                        style={{
                                                          fontSize: "1.2rem",
                                                          padding: "2px",
                                                          marginRight: "8px",
                                                        }}
                                                        type="checkbox"
                                                        name={check.name}
                                                        checked={this.state.selected.get(
                                                          check.name
                                                        )}
                                                        onChange={this.onChange}
                                                      ></input>

                                                      {/* <input type="checkbox"
                                              onChange={ () => this.onChange(check.id) }
                                              selected={ this.state.selected.includes(check.id) }
                                              checked={this.state.isChecked}
                                              ></input> */}
                                                      {/* <Checkbox
                                                  sx={{
                                                    padding: "0px",
                                                    fontSize: "1.2rem",
                                                    mr: 1,
                                                    "& .css-i4bv87-MuiSvgIcon-root":
                                                      {
                                                        fontSize: "1.2rem",
                                                      },
                                                  }}
                                                 
                                                
                                                /> */}
                                                    </Box>
                                                    <Box>
                                                      <Typography
                                                        variant="body2"
                                                        sx={{
                                                          fontWeight: "normal",
                                                          color: "#025886",
                                                        }}
                                                      >
                                                        {check.name}
                                                      </Typography>
                                                    </Box>
                                                  </Box>
                                                );
                                              })}
                                            </Box>
                                          </Box>
                                        </Paper>
                                      </Grid>
                                    </Grid>
                                  </Grid>
                                </Grid>
                              </Box>
                            </div>
                          )}
                          {this.state.index === 2 && (
                            <div className="ScrScroll2">
                              <Box>
                                <Grid container>
                                  <Grid item xs={12} sm={12} lg={12} md={12}>
                                    <Paper
                                      elevation={2}
                                      sx={{
                                        mb: 1,
                                        mr: 0.4,
                                        ml: 0.5,
                                        //mt: 2,
                                        p: 1,
                                        boxShadow:
                                          "rgb(60 64 67 / 30%) 0px 1px 2px 0px, rgb(60 64 67 / 15%) 0px 2px 6px 2px",
                                      }}
                                    >
                                      <Box
                                        sx={{
                                          display: "flex",
                                          flexDirection: "column",
                                          flexGrow: 1,
                                        }}
                                      >
                                        <Box>
                                          <Typography
                                            variant="body2"
                                            sx={{
                                              fontWeight: "normal",
                                              color: "#025886",
                                            }}
                                          >
                                            What service do you provide? Choose
                                            all that apply.
                                          </Typography>
                                        </Box>
                                        <Box sx={{ width: "100%" }}>
                                          <Grid container rowSpacing={1}>
                                            <Grid
                                              item
                                              xs={12}
                                              md={12}
                                              lg={12}
                                              sm={12}
                                            >
                                              <Grid container>
                                                {detailBox.map((check) => {
                                                  return (
                                                    <Grid
                                                      item
                                                      xs={12}
                                                      sm={12}
                                                      md={6}
                                                      lg={6}
                                                    >
                                                      <Box
                                                        sx={{
                                                          display: "flex",
                                                          flexDirection: "row",
                                                          alignItems: "center",
                                                        }}
                                                      >
                                                        <Box
                                                          key={check.id}
                                                          sx={{ ml: 1 }}
                                                        >
                                                          <input
                                                            style={{
                                                              fontSize:
                                                                "1.2rem",
                                                              padding: "2px",
                                                              marginRight:
                                                                "8px",
                                                            }}
                                                            type="checkbox"
                                                            name={check.name}
                                                            checked={this.state.service.get(
                                                              check.name
                                                            )}
                                                            onChange={
                                                              this.onChange1
                                                            }
                                                          ></input>

                                                          {/* <input type="checkbox"
                                                    onChange={()=>this.OnChange1(check.id)}
                                                    selected={()=>this.state.service.includes(check.id)}
                                                    >
                                                    </input> */}
                                                          {/* <Checkbox
                                                      sx={{
                                                        "& .css-i4bv87-MuiSvgIcon-root":
                                                          {
                                                            fontSize: "1.2rem",
                                                          },
                                                        padding: "0px",
                                                        fontSize: "1.2rem",
                                                        mr: 1,
                                                        mt: -1,
                                                      }}
                                                    /> */}
                                                        </Box>
                                                        <Box>
                                                          <Typography
                                                            variant="body2"
                                                            sx={{
                                                              fontWeight:
                                                                "normal",
                                                              color: "#025886",
                                                            }}
                                                          >
                                                            {check.name}
                                                          </Typography>
                                                        </Box>
                                                      </Box>
                                                    </Grid>
                                                  );
                                                })}
                                              </Grid>
                                              {this.state.DummyBox === true && (
                                                <Grid container>
                                                  <Grid
                                                    item
                                                    xs={12}
                                                    sm={12}
                                                    md={12}
                                                    lg={12}
                                                  >
                                                    <input
                                                      type="text"
                                                      name="ServiceValue"
                                                      value={
                                                        this.state.ServiceValue
                                                      }
                                                      onChange={this.othersBox1}
                                                      className="otherBox"
                                                    />
                                                  </Grid>
                                                </Grid>
                                              )}
                                            </Grid>
                                          </Grid>
                                        </Box>
                                      </Box>
                                    </Paper>
                                  </Grid>
                                </Grid>
                              </Box>
                            </div>
                          )}
                          {this.state.index === 3 && (
                            <div>
                              <Box>
                                <Grid container>
                                  <Grid item xs={12} sm={12} md={12}>
                                    <Grid container>
                                      <Grid
                                        item
                                        xs={12}
                                        sm={12}
                                        md={12}
                                        lg={12}
                                      >
                                        <Paper elevation={1} sx={{ p: 1 }}>
                                          <Box>
                                            <Typography
                                              variant="body2"
                                              sx={{
                                                fontSize: "16px",
                                                fontWeight: "normal",
                                                color: "#025886",
                                              }}
                                            >
                                              Do you have any relevant required
                                              trade licensing? Please upload all
                                              your trade licenses below.
                                            </Typography>
                                          </Box>
                                          <Box sx={{ pt: 2 }}>
                                            <div class="upload-btn-wrapper">
                                              <button class="btn">
                                                Upload a file
                                              </button>
                                              <input
                                                type="file"
                                                name="myfile"
                                              />
                                            </div>
                                          </Box>
                                        </Paper>
                                        <Paper
                                          elevation={1}
                                          sx={{ p: 1, mt: 2 }}
                                        >
                                          <Typography
                                            variant="body2"
                                            sx={{
                                              fontSize: "15px",
                                              fontWeight: "normal",
                                              color: "#025886",
                                            }}
                                          >
                                            We require at least $300,000 per
                                            occurrence business coverage limits
                                            for General Liability insurance
                                            (subject to further requirements
                                            depending on trade) and Worker’s
                                            Compensation if you have W2
                                            employees. You will be required to
                                            meet or exceed these insurance
                                            requirements in order to be able to
                                            work with us. No exceptions are
                                            made.
                                          </Typography>
                                          <Box
                                            sx={{
                                              mt: 1,
                                              ml: 2,
                                              display: "flex",
                                              flexDirection: "row",
                                            }}
                                          >
                                            <RadioGroup
                                              aria-labelledby="demo-radio-buttons-group-label"
                                              defaultValue="yes"
                                              name="RadioBox"
                                              value={this.RadioBox}
                                              onChange={this.handleChange}
                                            >
                                              <FormControlLabel
                                                value="yes"
                                                control={
                                                  <Radio
                                                    sx={{
                                                      padding: "2px",
                                                      marginTop: "-22px",
                                                    }}
                                                    size="small"
                                                  />
                                                }
                                                sx={{
                                                  color: "#025886",
                                                  fontWeight: "normal",
                                                  fontSize: "15px",
                                                  letterSpacing: 0,
                                                }}
                                                label="Yes, I have reviewed the requirements and understand that I will need to carry insurance that meets or exceeds the listed requirements."
                                              />
                                              <FormControlLabel
                                                value="No"
                                                control={
                                                  <Radio
                                                    sx={{ padding: "2px" }}
                                                    size="small"
                                                    disabled
                                                  />
                                                }
                                                sx={{
                                                  fontSize: "15px",
                                                  color: "#025886",
                                                  fontWeight: "normal",
                                                  letterSpacing: 0,
                                                }}
                                                label="No"
                                              />
                                            </RadioGroup>
                                          </Box>
                                        </Paper>
                                      </Grid>
                                    </Grid>
                                  </Grid>
                                </Grid>
                              </Box>
                            </div>
                          )}
                          {this.state.index === 4 && (
                            <Box>
                              <Grid container>
                                <Grid item xs={12} sm={12}>
                                  <Paper elevation={1} sx={{ p: 1, pr: 1.5 }}>
                                    <Box sx={{ mb: 2 }}>
                                      <Typography
                                        variant="body2"
                                        sx={{
                                          fontWeight: "normal",
                                          color: "#025886",
                                          fontSize: "16px",
                                        }}
                                      >
                                        Please see below an example Certificate
                                        of Insurance. Please add{" "}
                                        <strong>
                                          "Wreno Home Services, LLC"{" "}
                                        </strong>{" "}
                                        and address (15333 North Pima Road,
                                        Suite 305, Scottsdale, Arizona 85260) as
                                        an additional insured under "Certificate
                                        Holder" on your general liability policy
                                        and upload a copy of the file here. (
                                        <b style={{ color: "red" }}>
                                          Upload Only PDF Format
                                        </b>
                                        )
                                      </Typography>
                                    </Box>
                                    <Box
                                      sx={{ flexGrow: 1, width: "90%" }}
                                      className="ImgAlign"
                                    >
                                      <img
                                        style={{ width: "100%" }}
                                        src="http://seyasoftech.com/wreno/images/TradeCOI.png"
                                      />
                                    </Box>
                                    <Box sx={{ pt: 1 }}>
                                      {/* <button className="uploadBtn">
                                  Upload a file
                                </button> */}
                                      <div class="upload-btn-wrapper">
                                        <button class="btn">
                                          Upload a file
                                        </button>
                                        <input type="file" name="myfile" />
                                      </div>
                                    </Box>
                                  </Paper>
                                </Grid>
                              </Grid>
                            </Box>
                          )}
                          {this.state.index === 5 && (
                            <Box>
                              <Grid container>
                                <Grid item xs={12} sm={12} lg={12} md={12}>
                                  <Paper elevation={1} sx={{ p: 2 }}>
                                    <Box>
                                      <Typography
                                        variant="body2"
                                        sx={{
                                          fontWeight: "normal",
                                          color: "#025886",
                                        }}
                                      >
                                        Can you provide same day or next day
                                        service?
                                      </Typography>
                                    </Box>
                                    <Box sx={{ mt: 1 }}>
                                      {detailBox1.map((item) => {
                                        return (
                                          <Box
                                            key={item.id}
                                            sx={{
                                              display: "flex",
                                              flexDirection: "row",
                                              alignItems: "center",
                                            }}
                                          >
                                            <Box>
                                              <input
                                                style={{
                                                  fontSize: "1.2rem",
                                                  padding: "2px",
                                                  marginRight: "8px",
                                                }}
                                                type="checkbox"
                                                name={item.name}
                                                checked={this.state.TeamBox.get(
                                                  item.name
                                                )}
                                                onChange={this.onChange2}
                                              ></input>
                                              {/* <input
                                                type="checkbox"
                                                onChange={() =>
                                                  this.OnChange2(item.id)
                                                }
                                                selected={() =>
                                                  this.TeamBox.includes(item.id)
                                                }
                                              ></input> */}
                                              {/* <Checkbox
                                          sx={{
                                            "& .css-i4bv87-MuiSvgIcon-root": {
                                              fontSize: "1.2rem",
                                            },
                                            padding: "0px",
                                            fontSize: "1.2rem",
                                            mr: 1,
                                            mt: -1,
                                          }}
                                        /> */}
                                            </Box>
                                            <Box>
                                              <Typography
                                                variant="body2"
                                                sx={{
                                                  fontWeight: "normal",
                                                  color: "#025886",
                                                }}
                                              >
                                                {item.name}
                                              </Typography>
                                            </Box>
                                          </Box>
                                        );
                                      })}
                                    </Box>
                                  </Paper>

                                  <Paper elevation={1} sx={{ p: 2, mt: 2 }}>
                                    <Box>
                                      <Typography
                                        variant="body2"
                                        sx={{
                                          fontWeight: "normal",
                                          color: "#025886",
                                        }}
                                      >
                                        How many jobs can you take on a weekly
                                        basis?
                                      </Typography>
                                    </Box>
                                    <Box sx={{ mt: 1 }}>
                                      {detailBox2.map((item) => {
                                        return (
                                          <Box
                                            key={item.id}
                                            sx={{
                                              display: "flex",
                                              flexDirection: "row",
                                              alignItems: "center",
                                            }}
                                          >
                                            <Box>
                                              <input
                                                style={{
                                                  fontSize: "1.2rem",
                                                  padding: "2px",
                                                  marginRight: "8px",
                                                }}
                                                type="checkbox"
                                                name={item.name}
                                                checked={this.state.WeekTeamBox.get(
                                                  item.name
                                                )}
                                                onChange={this.onChange3}
                                              ></input>
                                              {/* <input
                                                type="checkbox"
                                                onChange={() =>
                                                  this.OnChange3(item.id)
                                                }
                                                selected={() =>
                                                  this.state.NxtTeamBox.includes(
                                                    item.id
                                                  )
                                                }
                                              ></input> */}
                                              {/* <Checkbox
                                          sx={{
                                            "& .css-i4bv87-MuiSvgIcon-root": {
                                              fontSize: "1.2rem",
                                            },
                                            padding: "0px",
                                            fontSize: "1.2rem",
                                            mr: 1,
                                            mt: -1,
                                          }}
                                        /> */}
                                            </Box>
                                            <Box>
                                              <Typography
                                                variant="body2"
                                                sx={{
                                                  fontWeight: "normal",
                                                  color: "#025886",
                                                }}
                                              >
                                                {item.name}
                                              </Typography>
                                            </Box>
                                          </Box>
                                        );
                                      })}
                                    </Box>
                                    {this.state.DummyWeek === true && (
                                      <Grid container>
                                        <Grid
                                          item
                                          xs={12}
                                          sm={12}
                                          md={12}
                                          lg={12}
                                        >
                                          <input
                                            type="text"
                                            name="WeekValue"
                                            className="otherBox"
                                            value={this.state.WeekValue}
                                            onChange={this.othersBox1}
                                          />
                                        </Grid>
                                      </Grid>
                                    )}
                                  </Paper>
                                </Grid>
                              </Grid>
                            </Box>
                          )}
                          {this.state.index === 6 && (
                            <Box>
                              <Grid container>
                                <Grid item xs={12} sm={12} md={12} lg={12}>
                                  <Paper elevation={1} sx={{ p: 1 }}>
                                    <Box>
                                      <Typography>
                                        Please follow the link below to book a
                                        time for your HR onboarding and mobile
                                        app training. We will send you your HR
                                        paperwork and a mobile app training
                                        video ahead of the meeting. Please watch
                                        the training video and complete
                                        necessary HR paperwork ahead of time. .
                                      </Typography>
                                    </Box>
                                    <Box sx={{ mt: 2 }}>
                                      <iframe
                                        width="100%"
                                        height="400px"
                                        src="https://www.youtube.com/embed/tgbNymZ7vqY"
                                      ></iframe>
                                    </Box>
                                  </Paper>
                                </Grid>
                              </Grid>
                            </Box>
                          )}
                          {this.state.index === 7 && (
                            <Box>
                              <Grid container>
                                <Grid item xxs={12} md={12} lg={12}>
                                  <Box>
                                    <Paper elevation={2} sx={{ p: 1.5 }}>
                                      <Box>
                                        <Typography
                                          variant="body1"
                                          sx={{
                                            fontWeight: "normal",
                                            color: "#025886",
                                            mb: 2,
                                          }}
                                        >
                                          Wreno reserves the right to cancel or
                                          reschedule this meeting if the
                                          Certificate of Insurance does not show
                                          the required minimum coverage limits
                                          and / or Wreno Home Services, LLC is
                                          not added under the "Certificate
                                          Holder".
                                        </Typography>
                                      </Box>
                                    </Paper>
                                  </Box>
                                </Grid>
                              </Grid>
                            </Box>
                          )}
                          <Box sx={{ mt: 4 }}>
                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "center",
                              }}
                            >
                              <span className={`dot ${this.state.index===0?"class1":"class2"} ${this.state.index > 0?"class2":""} ${this.state.index <0 ?"class3":""}`}></span>
                              <span className={`dot ${this.state.index===1?"class1":"class2"} ${this.state.index > 1?"class2":""}${this.state.index <1 ?"class3":""}`}></span>
                              <span className={`dot ${this.state.index===2?"class1":"class2"} ${this.state.index > 2?"class2":""}${this.state.index <2 ?"class3":""}`}></span>
                              <span className={`dot ${this.state.index===3?"class1":"class2"} ${this.state.index > 3?"class2":""}${this.state.index <3 ?"class3":""}`}></span>
                              <span className={`dot ${this.state.index===4?"class1":"class2"} ${this.state.index > 4?"class2":""}${this.state.index <4 ?"class3":""}`}></span>
                              <span className={`dot ${this.state.index===5?"class1":"class2"} ${this.state.index > 5?"class2":""}${this.state.index <5 ?"class3":""}`}></span>
                              <span className={`dot ${this.state.index===6?"class1":"class2"} ${this.state.index > 6?"class2":""}${this.state.index <6 ?"class3":""}`}></span>
                              <span className={`dot ${this.state.index===7?"class1":"class2"} ${this.state.index > 7?"class2":""}${this.state.index <7 ?"class3":""}`}></span> 
                            </Box>
                          </Box>
                        </div>
                      </Box>
                    </Box>
                  </div>
                </div>
                <Box
                  sx={{
                    mt: 1,
                    ml: 4,
                    mr: 4,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  {this.state.index === 0 && <Box></Box>}
                  {this.state.index !== 0 && (
                    <Box
                      sx={{
                        color: "#fff",
                        background: "#025886",
                        padding: "5px 2%",
                        borderRadius: "8px",
                        margin: "8px 0px",
                      }}
                    >
                      <Button
                        sx={{ color: "#fff" }}
                        onClick={() => this.previous()}
                      >
                        Previous
                      </Button>
                    </Box>
                  )}
                  {this.state.index === 7 ? (
                    <Box
                      sx={{
                        color: "#fff",
                        background: "#378061",
                        padding: "5px 2%",
                        borderRadius: "8px",
                        margin: "8px 0px",
                      }}
                    >
                      <Button
                        sx={{ color: "#fff" }}
                        onClick={(e) => this.handleSubmit(e)}
                      >
                        {" "}
                        Submit
                      </Button>
                    </Box>
                  ) : (
                    <Box
                      sx={{
                        color: "#fff",
                        background: "#378061",
                        padding: "5px 2%",
                        borderRadius: "8px",
                        margin: "8px 0px",
                      }}
                    >
                      <Button
                        sx={{ color: "#fff" }}
                        onClick={() => this.next()}
                      >
                        {" "}
                        Next
                      </Button>
                    </Box>
                  )}
                </Box>
              </form>
            </Grid>
          </Grid>
        </Box>
      </div>
    );
  }
}
export default withStyles(styles)(HomePage);
