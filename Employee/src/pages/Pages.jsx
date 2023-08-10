import React from "react";
import PublicLayout from "../layout";
import Home from "./Home/Home";

function PagesComponent() {
  return (
    <>
      <Home />
    </>
  );
}

function Pages() {
  return (
    <PublicLayout>
      <PagesComponent />
    </PublicLayout>
  );
}

export default Pages;
