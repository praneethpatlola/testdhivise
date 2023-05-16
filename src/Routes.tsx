import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Home0012Expand = React.lazy(() => import("pages/Home0012Expand"));
const Home0012ExpandFive = React.lazy(() => import("pages/Home0012ExpandFive"));
const Home0012ExpandThree = React.lazy(
  () => import("pages/Home0012ExpandThree")
);
const Home0012ExpandSix = React.lazy(() => import("pages/Home0012ExpandSix"));
const Home0012ExpandFour = React.lazy(() => import("pages/Home0012ExpandFour"));
const Home0012ExpandOne = React.lazy(() => import("pages/Home0012ExpandOne"));
const Home0012ExpandTwo = React.lazy(() => import("pages/Home0012ExpandTwo"));
const Home0011 = React.lazy(() => import("pages/Home0011"));
const Home0011One = React.lazy(() => import("pages/Home0011One"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home0011One />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/home0011" element={<Home0011 />} />
          <Route path="/home0012expandtwo" element={<Home0012ExpandTwo />} />
          <Route path="/home0012expandone" element={<Home0012ExpandOne />} />
          <Route path="/home0012expandfour" element={<Home0012ExpandFour />} />
          <Route path="/home0012expandsix" element={<Home0012ExpandSix />} />
          <Route
            path="/home0012expandthree"
            element={<Home0012ExpandThree />}
          />
          <Route path="/home0012expandfive" element={<Home0012ExpandFive />} />
          <Route path="/home0012expand" element={<Home0012Expand />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
