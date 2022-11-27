import { Box,Button, FormControl, InputLabel, MenuItem, Popover, Select, TextField } from "@material-ui/core";
import { Component } from "react";

interface MenuState {
    anchorEl: any;
  }

export class Popperr extends Component<{}, MenuState> {
    constructor(props: any) {
      super(props);
      this.state = {
        anchorEl: null,
      };
    }
  
    handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      this.setState({ anchorEl: event.currentTarget });
    };
  
    handleClose = () => {
      this.setState({ anchorEl: null });
    };
  
    render(): React.ReactNode {
      return (
        <>
          <Box>
            <Box style = {{display:"flex",justifyContent:"center"}}>
             <Button onClick={this.handleClick} className={"actionButton"} variant={"outlined"}>Click</Button>
            </Box>
            <Popover
              // id={id}
              open={Boolean(this.state.anchorEl)}
              anchorEl={this.state.anchorEl}
              onClose={this.handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            //   transformOrigin={{
            //     vertical: "top",
            //     horizontal: "center",
            //   }}
            >
              <Box style={{ padding: "10px" }}>
                <Box display={"flex"} justifyContent={"space-between"}>
                  <Box>Filter</Box>
                  <Box style={{ textDecoration: "underline" }}>Clear Filter</Box>
                </Box>
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  margin={"3vh 0px"}
                >
                  <Box width={"48%"}>
                    <Box fontWeight={"bold"}>From Date</Box>
                    <Box>
                      <TextField variant={"outlined"} type={"date"} />
                    </Box>
                  </Box>
                  <Box width={"48%"}>
                    <Box fontWeight={"bold"}>To Date</Box>
                    <Box>
                      <TextField variant={"outlined"} type={"date"} />
                    </Box>
                  </Box>
                </Box>
                <Box>
                  <Box fontWeight={"bold"}>Status</Box>
                  <Box>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Select
                      </InputLabel>
                      <Select
                        variant={"outlined"}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        // value={age}
                        label="Select"
                        // onChange={handleChange}
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Box>
                <Box marginTop={"3vh"} display={"flex"} justifyContent={"end"}>
                  <Button
                    style={{ width: "48%", textTransform: "none" }}
                    variant="contained"
                    onClick={this.handleClose}
                  >
                    Cancel
                  </Button>
                  <Button
                    style={{
                      width: "48%",
                      textTransform: "none",
                      backgroundColor: "#4EABF8",
                    }}
                    variant="contained"
                  >
                    Generate
                  </Button>
                </Box>
              </Box>
            </Popover>
          </Box>
        </>
      );
    }
  }