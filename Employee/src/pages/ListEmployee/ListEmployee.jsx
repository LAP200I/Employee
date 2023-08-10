import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEmployee } from "../../api/GetEmployee";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { FetchUserList } from "../../Redux/Action";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ListEmployee = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    props.loaduser();
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/", { replace: true });
    toast.success("Logout successfully");
  };

  return props.user.loading ? (
    <>
      <Box
        sx={{
          width: "100%",
          marginTop: "20px",
        }}
      >
        <LinearProgress />
      </Box>
    </>
  ) : props.user.errmessage ? (
    <>
      <h2>{props.user.errmessage}</h2>
    </>
  ) : (
    <>
      <Link to="/" sx={{ textDecoration: "none" }}>
        <Button
          variant="contained"
          color="error"
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            transform: "translate(-20%, 30%)",
          }}
          onClick={() => {
            handleLogout();
          }}
        >
          Logout
        </Button>
      </Link>
      {/*circle button to top */}
      {/* <Button
        variant="contained"
        color="success"
        sx={{
          position: "fixed",
          bottom: 0,
          right: 0,
          m: 3,
          // circle button
          borderRadius: "50%",
          width: "10px",
          height: "30px",
        }}
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <i className="fas fa-arrow-up" />
      </Button> */}

      <List
        className="list--container"
        sx={{
          margin: "20px auto",
          width: "100%",
          maxWidth: 500,
          bgcolor: "background.paper",
        }}
      >
        {props.user.userlist.map((user) => {
          return (
            <>
              <ListItem key={user.id} alignItems="center">
                {/* <List></List> */}
                <ListItemAvatar>
                  {/* <Avatar alt="Remy Sharp" src={user.avatar} loading="lazy" /> */}
                  {user.avatar ? (
                    <Avatar alt="Remy Sharp" src={user.avatar} loading="lazy" />
                  ) : (
                    <Avatar
                      alt="Remy Sharp"
                      src="https://www.w3schools.com/howto/img_avatar.png"
                    />
                  )}
                </ListItemAvatar>
                <ListItemText
                  primary={user.first_name + " " + user.last_name}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {"Email: "}
                      </Typography>
                      {user.email}
                    </React.Fragment>
                  }
                />
                {/* <Link to={`/user/${user.id}`} sx={{ textDecoration: "none" }}>
                  <button className="btn btn-primary">View</button>
                </Link> */}
                <ButtonGroup
                  variant="contained"
                  aria-label="outlined primary button group"
                >
                  <Button>View</Button>
                  <Button>Edit</Button>
                </ButtonGroup>
                <hr />
              </ListItem>
              <Divider variant="inset" component="li" />
            </>
          );
        })}
      </List>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    loaduser: () => dispatch(FetchUserList()),
    // removeuser: (code) => dispatch(Removeuser(code)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListEmployee);

{
  /* <div className="card">
    <div className="card-header"></div>
    <div className="card-body">
      <table className="table table-bordered">
        <thead className="bg-dark text-white">
          <tr>
            <td>Code</td>
            <td>Name</td>
            <td>Email</td>

            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {props.user.userlist.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.first_name + " " + user.last_name}</td>
                <td>{user.email}</td>
              </tr>
            );
          })}


        </tbody>
      </table>
    </div>
  </div> */
}
