import { AppBar, Button, Link, Stack, Typography } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import React, { FC } from "react";

export const NavBar: FC = () => {
  return (
    <AppBar position="static">
      <Stack
        flexDirection="row"
        justifyContent="flex-end"
        spacing={1}
        alignItems="center"
      >
        <Link>
          <Typography color="white">About</Typography>
        </Link>
        <Link>
          <Typography color="white">Projects</Typography>
        </Link>
        <Link>
          <Typography color="white">Technologies</Typography>
        </Link>
        <Link>
          <Typography color="white">Education</Typography>
        </Link>
        <Button variant="outlined" color="secondary" size="small">
          Resume
          <DownloadIcon color="secondary" />
        </Button>
      </Stack>
    </AppBar>
  );
};
