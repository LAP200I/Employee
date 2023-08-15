import { FetchUserObj, RemoveUser, UpdateEmployee } from "../../Redux/Action";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { confirmAlert } from "react-confirm-alert";
import { useEffect, useState } from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import {
  CardActions,
  CardContent,
  CardMedia,
  Box,
  Card,
  styled,
  Stack,
  Avatar,
  Typography,
  Grid,
  Button,
  ButtonGroup,
  Modal,
  Menu,
  MenuItem,
} from "@mui/material";
import Paper from "@mui/material/Paper";
// import ListItemAvatar from "@mui/material/ListItemAvatar";
// import EditIcon from "@material-ui/icons/Edit";
// import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import LinearProgress from "@mui/material/LinearProgress";

const ViewDetail = (props) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    props.loadUserObj(id);
  }, [id]);
  useEffect(() => {
    if (props.userObj) {
      setEmail(props.userObj.email);
      setFirstName(props.userObj.first_name);
      setLastName(props.userObj.last_name);
      setAvatar(props.userObj.avatar);
    }
  }, [props.userObj]);
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleEditClick = () => {
    navigate(`/employee/edit/${id}`);
    handleMenuClose();
  };
  const handleDeleteClick = () => {
    confirmAlert({
      title: "Confirm to delete",
      message: "Are you sure to delete this user?",
      buttons: [
        {
          label: "No",
          onClick: () => {
            // console.log("No");
          },
        },
        {
          label: "Yes",
          onClick: () => {
            props.removeUser(id);
            toast.success("User Deleted Successfully");
            navigate("/employee");
          },
        },
      ],
    });
    handleMenuClose();
  };

  return (
    <>
      {props.user.loading ? (
        <LinearProgress />
      ) : (
        <StyledInfCard>
          <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
            <CardMedia
              component="img"
              alt="avatar"
              sx={{
                borderRadius: 1,
              }}
              image={avatar}
            />
            <CardContent sx={{ padding: "10px 0" }}>
              <Typography gutterBottom variant="h5" component="div">
                {firstName + " " + lastName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Email: {email}
              </Typography>
            </CardContent>
            <CardActions
              sx={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px 0",
              }}
            >
              <Button
                variant="outlined"
                size="small"
                onClick={() => {
                  handleEditClick();
                }}
              >
                {" "}
                <EditIcon />
                Edit
              </Button>
              <Button
                variant="outlined"
                size="small"
                color="error"
                onClick={() => {
                  handleDeleteClick();
                }}
              >
                {" "}
                <DeleteForeverIcon />
                Delete
              </Button>
            </CardActions>
          </Card>
        </StyledInfCard>
      )}
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    userObj: state.user.userObj,
    user: state.user,
  };
};
const mapDispatchToProps = (dispatch) => ({
  loadUserObj: (id) => dispatch(FetchUserObj(id)),
  updateUser: (data, id) => dispatch(UpdateEmployee(data, id)),
  removeUser: (id) => dispatch(RemoveUser(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewDetail);

const StyledAvatar = styled(Avatar)(() => ({
  width: 120,
  height: 120,
}));

const StyledInfCard = styled(Card)(() => ({
  // height: 400,
  maxWidth: "60%",
  margin: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  // borderRadius: 20,
  // border: "1px solid rgba(0, 0, 0, 0.1)",
  // boxShadow: "none",
}));
