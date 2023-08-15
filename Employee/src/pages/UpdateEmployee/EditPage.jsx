import PublicLayout from "../../layout";
import { Box } from "@mui/material";
import EditEmployee from "./EditEmployee";
import ButtonControl from "../../component/Button/ButtonControl";
// import PublicLayout from "../../layout";

export default function EditPage() {
  return (
    <>
      <PublicLayout>
        <EditEmployee />
      </PublicLayout>
    </>
  );
}
