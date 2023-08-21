import PublicLayout from "../../layout";
import ListEmployee from "./ListEmployee";
import { Box } from "@mui/material";
import SearchBar from "../../component/Search/SeacrhBar";

import "./index.css";

function ListPage() {
  return (
    <>
      <PublicLayout>
        <Box
          sx={{
            width: "100%",
            maxWidth: "80%",
            margin: "20px auto",
          }}
        >
          <SearchBar />

          <ListEmployee />
        </Box>
      </PublicLayout>
    </>
  );
}
//access the state from the store

export default ListPage;
