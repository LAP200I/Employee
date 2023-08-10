import React, { useState, useEffect } from "react";
import PublicLayout from "../../layout";
import ListEmployee from "./ListEmployee";
import SearchBar from "../../component/Search/SeacrhBar";

export default function ListEmployeePage() {
  return (
    <>
      <PublicLayout>
        <SearchBar
          sx={{
            margin: "20px 0",
            width: "100%",
            bgcolor: "background.paper",
          }}
        />
        <ListEmployee />
      </PublicLayout>
    </>
  );
}
