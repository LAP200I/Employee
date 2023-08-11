import * as React from "react";
import { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { FetchUserList } from "../../Redux/Action";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

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

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Avatar</StyledTableCell>
              <StyledTableCell align="center">Name</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Status</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.user.userlist.map((user) => {
              return (
                <>
                  <StyledTableRow align="center" key={user.id}>
                    <StyledTableCell component="th" scope="row">
                      <ListItemAvatar align="center">
                        {/* <Avatar alt="Remy Sharp" src={user.avatar} loading="lazy" /> */}
                        {user.avatar ? (
                          <Avatar
                            alt="Remy Sharp"
                            src={user.avatar}
                            loading="lazy"
                          />
                        ) : (
                          <Avatar
                            alt="Remy Sharp"
                            src="https://www.w3schools.com/howto/img_avatar.png"
                          />
                        )}
                      </ListItemAvatar>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {user.first_name + " " + user.last_name}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {user.email}
                    </StyledTableCell>
                    <StyledTableCell align="center">Working</StyledTableCell>
                    <StyledTableCell align="center">
                      <ButtonGroup
                        variant="outlined"
                        aria-label="outlined secondary button group"
                      >
                        <Button>Edit</Button>
                        <Button>Delete</Button>
                      </ButtonGroup>
                    </StyledTableCell>
                  </StyledTableRow>
                </>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
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
