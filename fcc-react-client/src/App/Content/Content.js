import React from "react";
import { ProjectRoutes } from "../../Projects";
import { Route } from "react-router-dom";

import { Home } from "../../Home";

const Content = () => {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <ProjectRoutes />
    </div>
  );
};

export default Content;
