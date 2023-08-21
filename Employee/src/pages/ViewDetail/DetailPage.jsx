import ViewDetail from "./ViewDetail";
import { FetchUserObj, RemoveUser } from "../../Redux/Action";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { confirmAlert } from "react-confirm-alert";
import { useEffect, useState } from "react";
import PublicLayout from "../../layout";

function DetailPage(props) {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [avatar, setAvatar] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    props.loadUserObj(id);
    if (props.userObj) {
      setEmail(props.userObj.email);
      setFirstName(props.userObj.first_name);
      setLastName(props.userObj.last_name);
      setAvatar(props.userObj.avatar);
    }
  }, [props.userObj.id]);
  const handleEditClick = () => {
    navigate(`/employee/edit/${id}`);
  };
  const handleDeleteClick = () => {
    confirmAlert({
      title: "Confirm to delete",
      message: "Are you sure to delete this employee?",
      buttons: [
        {
          label: "No",
          onClick: () => {},
        },
        {
          label: "Yes",
          onClick: () => {
            props.removeUser(id);
            toast.success("Successfully Deleted ");
            navigate("/employee");
          },
        },
      ],
    });
  };

  return (
    <PublicLayout>
      {props.userObj.loading ? (
        <LinearProgress />
      ) : (
        <ViewDetail
          email={email}
          firstName={firstName}
          lastName={lastName}
          avatar={avatar}
          handleEditClick={handleEditClick}
          handleDeleteClick={handleDeleteClick}
        />
      )}
    </PublicLayout>
  );
}

const mapStateToProps = (state) => {
  return {
    userObj: state.user.userObj,
    user: state.user,
  };
};
const mapDispatchToProps = (dispatch) => ({
  loadUserObj: (id) => dispatch(FetchUserObj(id)),
  removeUser: (id) => dispatch(RemoveUser(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);
