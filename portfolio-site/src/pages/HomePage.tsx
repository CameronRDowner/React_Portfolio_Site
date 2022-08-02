import { Card, Container, IconButton, Stack, Typography } from "@mui/material";
import React, { FC } from "react";

export const HomePage: FC = () => {
  return (
    <Stack
      direction="row"
      sx={{ backgroundColor: "primary.main" }}
      justifyContent="spaced-evenly"
    >
      <div>
        <Typography variant="h4" color="secondary">
          Hi My Name Is Cameron.
        </Typography>
        <Typography variant="h5" color="secondary">
          I am a developer with a passion for <b>clean maintainable</b> code,
          <b>responsive</b> designs, and <b>memorable</b> user experiences.
        </Typography>
      </div>
      <Card>
        <img src="../assets/images/profile.jpg" alt="profile picture"></img>
        <Typography variant="h4">Cameron Downer</Typography>
        <Typography variant="h5">Web Developer</Typography>
        <Stack direction="row">
          <IconButton />
          <IconButton />
          <IconButton />
        </Stack>
      </Card>
    </Stack>
  );
};
