import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import Home from "./views/Home";
import Freelancers from "./views/Freelancers";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/home-overview" />
  },
  {
    path: "/home-overview",
    layout: DefaultLayout,
    component: Home
  },
  {
    path: "/freelancers-regsitration",
    layout: DefaultLayout,
    component: Freelancers
  },
];
