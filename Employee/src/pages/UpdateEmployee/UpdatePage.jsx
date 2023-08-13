import PublicLayout from "../../layout";
import { Box } from "@mui/material";
import UpdateEmployee from "./UpdateEmployee";
import ButtonControl from "../../component/Button/ButtonControl";
// import PublicLayout from "../../layout";

export default function UpdatePage() {
  return (
    <>
      <PublicLayout>
        <UpdateEmployee />
      </PublicLayout>
    </>
  );
}
