import React, {useState} from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import "./Home.css";

function Home() {
  const width = {xs:10, sm:8, md:6, lg:4, xl:4};
  const [style, setStyle] = useState("");

  function handleAnimationEnd() {
    setStyle("");
  }

  function rotateLeft() {
    setStyle("rotatate-left");
  }

  function rotateRight() {
    setStyle("rotatate-right");
  }

  function fadeIn() {
    setStyle("fade-in");
  }

  function fadeOut() {
    setStyle("fade-out");
  }

  function fadeInOut() {
    setStyle("fade-in-out");
  }

  function zoomIn() {
    setStyle("zoom-in");
  }

  function zoomOut() {
    setStyle("zoom-out");
  }

  function leftIn() {
    setStyle("left-in");
  }

  function rightIn() {
    setStyle("right-in");
  }

  function topBot() {
    setStyle("top-bot");
  }

  function flash() {
    setStyle("flash");
  }

  function bounce() {
    setStyle("bounce");
  }

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid item {...width}>
        <Box my={3} display="flex" flexDirection="row" justifyContent="center" py={6}
             border={1} borderRadius={5} borderColor="orange">
          <img className={style} style={{"width":"50%"}}
               src="/images/image.png" onAnimationEnd={handleAnimationEnd} alt="rleft">
          </img>
        </Box>

        <Box my={3} display="flex" flexDirection="column"
             justifyContent="space-around" py={3}>

          <Box display="flex" flexDirection="row" justifyContent="space-around" pb={3}>
            <Button variant="contained" color="primary" 
                    onClick={rotateLeft}>
              Rotate Left
            </Button>

            <Button variant="contained" color="primary" 
                    onClick={rotateRight}>
              Rotate Right
            </Button>
          </Box>

          <Box display="flex" flexDirection="row" justifyContent="space-around" pb={3}>
            <Button variant="contained" color="primary" 
                    onClick={fadeIn}>
              Fade In
            </Button>

            <Button variant="contained" color="primary" 
                    onClick={fadeInOut}>
              Fade In Out
            </Button>

            <Button variant="contained" color="primary" 
                    onClick={fadeOut}>
              Fade Out
            </Button>
          </Box>

          <Box display="flex" flexDirection="row" justifyContent="space-around" pb={3}>

            <Button variant="contained" color="primary" 
                    onClick={zoomIn}>
              Zoom In
            </Button>

            <Button variant="contained" color="primary" 
                    onClick={zoomOut}>
              Zoom Out
            </Button>

          </Box>

          <Box display="flex" flexDirection="row" justifyContent="space-around" pb={3}>
            <Button variant="contained" color="primary" 
                    onClick={leftIn}>
              Left In
            </Button>

            <Button variant="contained" color="primary" 
                    onClick={topBot}>
              Top Bot
            </Button>

            <Button variant="contained" color="primary" 
                    onClick={rightIn}>
              Right In
            </Button>
          </Box>

          <Box display="flex" flexDirection="row" justifyContent="space-around">
            <Button variant="contained" color="primary" 
                    onClick={bounce}>
              Bounce
            </Button>

            <Button variant="contained" color="primary" 
                    onClick={flash}>
              Flash
            </Button>
          </Box>

        </Box>

      </Grid>
    </Grid>
  )
}

export default Home;