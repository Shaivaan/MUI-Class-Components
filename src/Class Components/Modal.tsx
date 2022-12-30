import { Box,Modal } from "@material-ui/core";
import { Component } from "react";
import Button from '@material-ui/core/Button';


function getModalStyle(){
    const top = 50;
    const left = 50;
    

    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
      position: "absolute",
      width: "30%",
      border: "2px solid #000",
      fontFamily: "sans-serif",
      backgroundColor: "white",
      // boxShadow: theme.shadows[5],
      padding: "40px",
      
    };
  }
export class GenerateModal extends Component<{}, { open: boolean }> {
    // classes = useStyles();
    modalStyle:any = getModalStyle();
  constructor(props: any) {
    super(props);
    
    this.state = {
      open: false,
    };
  }

  handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

   

  render(): React.ReactNode {
    const body = (
      <Box
      style = {this.modalStyle}
      // className = {this.classes.paper}
      >
          <Box>Content of Model</Box>
          <Box>Content of Model</Box>
      </Box>
    );

    return (
      <>
        <Box>
            <Button
              onClick={this.handleOpen}
              style={{
                backgroundColor: "#4EABF8",
                color: "white",
                padding: "10px 15px",
                textTransform: "none",
              }}
              variant={"contained"}
            >
              Generate Invoices
            </Button>
            <Modal
              open={this.state.open}
              onClose={this.handleClose}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
            >
              {body}
            </Modal>
          </Box>
      </>
    );
  }
}


// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/Shaivaan/MUI-Class-Components.git
// git push -u origin main