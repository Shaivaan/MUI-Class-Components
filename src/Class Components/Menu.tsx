import { Box, Button, Menu, MenuItem } from "@material-ui/core";
import { Component } from "react";

interface MenuState {
    anchorEl: any;
  }

export class Menuu extends Component<{}, MenuState> {
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
  
    render() {
      return (
        <>
          <Box>
              <Box
                component={"div"}
                
              > 
             {[1,2].map((el)=>{
                return <Button {...{ ref: this.state.anchorEl }}
                onClick={this.handleClick} variant={"outlined"}>Menu {el}</Button>
             })}
                
              </Box>
            <Menu
              id="simple-menu"
              anchorEl={this.state.anchorEl}
              keepMounted
              open={Boolean(this.state.anchorEl)}
              onClose={this.handleClose}
            >
              <MenuItem onClick={this.handleClose}>.pdf</MenuItem>
              <MenuItem onClick={this.handleClose}>.xls</MenuItem>
              <MenuItem onClick={this.handleClose}>.docx</MenuItem>
            </Menu>
          </Box>
        </>
      );
    }
  }
  