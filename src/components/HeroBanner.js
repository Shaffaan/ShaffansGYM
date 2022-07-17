import React from "react";
import { Box } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Typography } from "@mui/material";
// import Typography from "@mui/material"; this is wrong as material ui does not contain a default export (imported as 'Typography').
import { Button } from "@mui/material";
// to navigate to somewhere use a link tag
import ExerciseBanner from "../assets/images/main.jpg";
// we can import the image with anyname as long as we dont repeat

const HeroBanner = () => {
  return (
    <Box
      sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
      position="relative"
      p="20px"
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography
        fontWeight="700"
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="23px"
        mt="30px"
      >
        Sweat, Smile <br />
        And Repeat
      </Typography>
      <Typography
        fontSize="22px"
        fontFamily="Alegreya"
        lineHeight="35px"
        mb={3}
      >
        Check out the most effective exercises personalized to you
      </Typography>
      <Button
        variant="contained"
        color="error"
        href="#exercises"
        sx={{ backgroundColor: "#FF2625", padding: "10px" }}
      >
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        color="#FF2625"
        sx={{
          opacity: "0.1",
          display: { lg: "block", xs: "none" },
          fontSize: "200px",
        }}
      >
        Exercise
      </Typography>
      <img src={ExerciseBanner} alt="Banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
