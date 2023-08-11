import PublicLayout from "../../layout";
import ListEmployee from "./ListEmployee";
import { Box } from "@mui/material";
import SearchBar from "../../component/Search/SeacrhBar";
import "./index.css";

export default function ListEmployeePage() {
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
          <SearchBar
            sx={
              {
                // margin: "20px 0",
                // bgcolor: "background.paper",
              }
            }
          />

          <ListEmployee />
        </Box>
      </PublicLayout>
    </>
  );
}
