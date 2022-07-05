import DownloadIcon from "@mui/icons-material/Download";
import { AppBar, Button, Link, Stack, Typography } from "@mui/material";
import React, { FC } from "react";

import { pxToRem } from "../styles/theme";

export const NavBar: FC = () => {
  return (
    <AppBar position="static">
      <Stack
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography>CD</Typography>
        <Stack flexDirection="row" spacing={1} alignItems="center">
          <nav>
            <ul
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: pxToRem(40),
              }}
            >
              <li>
                <Link href="#about">
                  <Typography color="white">About</Typography>
                </Link>
              </li>
              <li>
                <Link href="#projects">
                  <Typography color="white">Projects</Typography>
                </Link>
              </li>
              <li>
                <Link href="#technologies">
                  <Typography color="white">Technologies</Typography>
                </Link>
              </li>
              <li>
                <Link href="#education">
                  <Typography color="white">Education</Typography>
                </Link>
              </li>
            </ul>
          </nav>
          <Button
            variant="outlined"
            color="secondary"
            size="small"
            style={{ marginLeft: pxToRem(40) }}
          >
            Resume
            <DownloadIcon color="secondary" />
          </Button>
        </Stack>
      </Stack>
    </AppBar>
  );
};
