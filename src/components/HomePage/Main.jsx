import React from "react";
import { useNavigate } from "react-router-dom";
import Bg from "./sony-centrer3.png";
import Button from "@mui/material/Button";
import { createTheme, colors, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    secondary: {
      main: colors.cyan[100],
    },
  },
});

const Main = () => {
  const navigate = useNavigate();
  const openGitRepo = () => {
    // Replace 'YOUR_GIT_REPO_URL' with the actual URL of your Git repository
    window.open("https://github.com/gone-keerthi/zevi-", "_blank");
  };

  const openAssignmentPdf = () => {
    // Replace 'YOUR_PDF_URL' with the actual URL of your PDF document
    window.open("https://docs.google.com/document/d/1QwoQR5ZC8dND3nqU_t4A-kx8lEcB_JEt0IYVG04RlOw/edit", "_blank");
  };

  const navigateToNextPage = () => {
    // Replace '/next-page' with the actual path you want to navigate to
    navigate("/transaction");
  };

  return (
    <ThemeProvider theme={theme}>
      <div
        className="home-page-component"
        style={{
          backgroundColor: theme.palette.secondary.main,
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          
        }}
      >
        
        <img src={Bg} alt="bg" style={{ width: "70%", height: "70%" }} />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            // color: "#fff",
            color: '#424242',
            display:"flex",
            flexDirection: "column",
            alignItems: 'center',
            padding: '30',
            gap: '30px',
            // background: '#424242'
          }}
        >
          <div>
            <h2>Frontend Developer Internship Technical Round </h2>
            <p>
              The primary purpose of this assignment is not only to test your
              technical skills, but also to understand your problem-solving
              approach, coding style, and ability to meet the requirements.
              Given the nature of this assignment, familiarity with Web3 and
              DeFi concepts is beneficial. Good luck!
            </p>
          </div>
          <div style={{ display: "flex",alignItems: "center", gap:'20px', padding:'30'}}>
            <Button
              id="git-repo-btn"
              onClick={openGitRepo}
              variant="contained"
              size="medium"
            >

              Git Repo{" "}
            </Button>
            <Button
              id="assignment-btn"
              onClick={openAssignmentPdf}
              variant="contained"
              size="medium"
            >

              Developer Assignment
            
            </Button>
            </div>
            <div>
              <Button
                id="transaction-page-btn"
                variant="contained"
                color="success"
                onClick={navigateToNextPage}
              >
                Next{" "}
              </Button>
            </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Main;
