import * as React from "react";
import { useEffect, useState } from "react";
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
import { FetchData, FetchUserList, RemoveUser } from "../../Redux/Action";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { confirmAlert } from "react-confirm-alert";
import ReactPaginate from "react-paginate";

const ListEmployee = (props) => {
  const navigate = useNavigate();
  const [pageCount, setPageCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // props.loaduser(currentPage);
    props.loadData(currentPage);
    setPageCount(props.userobj.total_pages);
  }, [currentPage, props.userobj.total_pages]);
  console.log(props.user.userobj, "userobj");
  console.log("currentPage", currentPage);
  console.log("total_pages", props.userobj.total_pages);

  const handlePageClick = (event) => {
    if (event && event.target) {
      console.log(event.target.value);
      const selectedPage = event.target + 1;
      setCurrentPage(selectedPage);
      props.loadData(selectedPage);
    }
  };

  const handleDelete = (code, name) => {
    confirmAlert({
      title: "Confirm to Delete",
      message: `Are you sure to delete '${name}'.`,
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
            props.removeuser(code);
            toast.success("User Deleted Successfully");
          },
        },
      ],
    });
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
  ) : props.user.userobj.errmessage ? (
    <>
      <h2>{props.user.userobj.errmessage}</h2>
    </>
  ) : (
    <>
      <Link to="/" sx={{ textDecoration: "none" }}></Link>
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
            {props.user.userobj.data.map((user) => {
              // {props.userobj.data.map((user) => {
              return (
                <>
                  <StyledTableRow align="center" key={user.id}>
                    <StyledTableCell component="th" scope="row">
                      <ListItemAvatar align="center">
                        {/* <Avatar alt=" " src={user.avatar} loading="lazy" /> */}
                        {user.avatar ? (
                          <Avatar alt=" " src={user.avatar} loading="lazy" />
                        ) : (
                          <Avatar
                            alt=" "
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
                        <Button
                          onClick={() => {
                            navigate(`/employee/${user.id}`);
                          }}
                        >
                          Edit
                        </Button>
                        <Button
                          onClick={() => {
                            handleDelete(
                              user.id,
                              user.first_name + " " + user.last_name
                            );
                          }}
                        >
                          Delete
                        </Button>
                      </ButtonGroup>
                    </StyledTableCell>
                  </StyledTableRow>
                </>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <ReactPaginate
        previousLabel={"← Previous"}
        nextLabel={"Next →"}
        pageCount={pageCount}
        onPageChange={(event) => {
          handlePageClick(event);
          console.log(event);
        }}
        containerClassName={"pagination"}
        activeClassName={"active"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        nextClassName={"page-item"}
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    userobj: state.user.userobj,
    data: state.user.userobj.data,
  };
};

const mapDispatchToProps = (dispatch) => ({
  loaduser: (currentPage) => dispatch(FetchUserList(currentPage)),
  removeuser: (code) => dispatch(RemoveUser(code)),
  loadData: (currentPage) => dispatch(FetchData(currentPage)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListEmployee);

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
