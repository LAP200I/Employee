import PublicLayout from "../../layout";
import EditEmployee from "./EditEmployee";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { FetchUserObj, UpdateEmployee } from "../../Redux/Action";
export default function EditPage() {
  const [id, setId] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageForUpload, setImageForUpload] = useState(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const code = useParams();
  //extract data from the Redux store state
  let userObj = useSelector((state) => state.user.userObj);

  const handleSubmit = (values) => {
    const data = {
      name: values.firstName.trim() + " " + values.lastName.trim(),
      job: values.job.trim(),
    };
    dispatch(UpdateEmployee(code.id, data));
    navigate("/employee");
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageForUpload(file);
    setSelectedImage(URL.createObjectURL(file));
  };
  const handleSubmitImage = () => {
    handleClose();
    toast.success("Uploading successfully.");
  };
  const handleReset = (form) => {
    form.reset();
  };
  //fetch user object
  useEffect(() => {
    dispatch(FetchUserObj(code.id));
    if (userObj) {
      setId(userObj.id);
      setFirstName(userObj.first_name);
      setLastName(userObj.last_name);
      setEmail(userObj.email);
      setAvatar(userObj.avatar);
    }
  }, [userObj.id]);

  return (
    <>
      <PublicLayout>
        <EditEmployee
          open={open}
          handleOpen={handleOpen}
          handleClose={handleClose}
          selectedImage={selectedImage}
          handleImageChange={handleImageChange}
          handleSubmitImage={handleSubmitImage}
          handleSubmit={handleSubmit}
          handleReset={handleReset}
          id={id}
          firstName={firstName}
          lastName={lastName}
          email={email}
          avatar={avatar}
        />
      </PublicLayout>
    </>
  );
}
