import React, { FC } from "react";
import { Route, Routes as Switch } from "react-router-dom";
import { HomePage } from "../pages/HomePage";

export const Routes: FC = () => {
  return (
    <Switch>
      <Route path="/" element={<HomePage />} />
    </Switch>
  );
};
