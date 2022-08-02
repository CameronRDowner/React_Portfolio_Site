import { CSSProperties } from "@mui/material/styles/createMixins";

export const scaleInAnimation: CSSProperties = {
  animation: "scale-in 0.25s cubic-bezier(0.215, 0.610, 0.355, 1.000) forwards",
  "@keyframes scale-in": {
    "0%": { transform: "scale(0)", opacity: 0 },
    "100%": { transform: "scale(0)", opacity: 1 },
  },
};

export const radialOutAnimation: CSSProperties = {
  display: "inline-block",
  verticalAlign: "middle",
  transform: "perspective(1px) translateZ(0)",
  boxShadow: "0 0 1px rgba(0, 0, 0, 0)",
  position: "relative",
  overflow: "hidden",
  transitionProperty: "color",
  transitionDuration: "0.3s",
  "&:before": {
    content: "''",
    position: "absolute",
    zIndex: -1,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "#2098D1",
    borderRadius: "50px",
    transform: "scale(0)",
    transitionProperty: "transform",
    transitionDuration: "0.3s",
    transitionTimingFunction: "ease-out",
  },
};
