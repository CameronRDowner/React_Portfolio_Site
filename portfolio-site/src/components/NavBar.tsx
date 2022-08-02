import DownloadIcon from "@mui/icons-material/Download";
import { AppBar, Button, Link, Stack, Typography } from "@mui/material";
import React, { CSSProperties, FC } from "react";

import { pxToRem } from "../styles/theme";

const staticNavBarStyles: CSSProperties = {
  borderTopRightRadius: "1.3rem",
  borderTopLeftRadius: "1.3rem",
};

export const NavBar: FC = () => {
  return (
    <AppBar position="static" style={staticNavBarStyles}>
      <Stack
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography
          sx={{
            fontSize: "1.25rem",
            fontStyle: "italic",
            fontWeight: "900",
            cursor: "pointer",
            fontFamily: "Montserrat",
          }}
        >
          CD
        </Typography>
        <Stack flexDirection="row" spacing={1} alignItems="center">
          <nav style={{ marginRight: pxToRem(40) }}>
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
            size="small"
            color="secondary"
            style={{ margin: 0 }}
          >
            Resume
            <DownloadIcon style={{ height: "0.7em", width: "0.7em" }} />
          </Button>
        </Stack>
      </Stack>
    </AppBar>
  );
};
