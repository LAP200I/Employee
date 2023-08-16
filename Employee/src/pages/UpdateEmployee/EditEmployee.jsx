import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FetchUserObj, UpdateEmployee } from "../../Redux/Action";
import {
  TextField,
  Button,
  Card,
  Grid,
  Box,
  Avatar,
  CardHeader,
  CardContent,
  CardActions,
} from "@mui/material";

const EditEmployee = () => {
  const [id, setId] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [job, setJob] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const code = useParams();

  //extract data from the Redux store state
  const userObj = useSelector((state) => state.user.userObj);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: firstName + " " + lastName,
      job: job,
    };

    dispatch(UpdateEmployee(code, data));
    navigate("/employee");
  };
  const handleReset = (e) => {
    e.preventDefault();
    setFirstName(userObj.first_name);
    setLastName(userObj.last_name);
    setEmail(userObj.email);
    setJob("");
  };
  useEffect(() => {
    dispatch(FetchUserObj(code.id));
    // console.log("code", code);
    // console.log("props.userObj", userObj);
  }, []);

  useEffect(() => {
    if (userObj) {
      setId(userObj.id);
      setFirstName(userObj.first_name);
      setLastName(userObj.last_name);
      setEmail(userObj.email);
    }
  }, [userObj]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Card
          sx={{
            boxShadow: 3,
            maxWidth: "80%",
            margin: "20px auto",
          }}
        >
          <CardHeader title="Edit Employee" style={{ textAlign: "left" }} />
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  sx={{
                    boxShadow: 3,
                  }}
                  label="First Name"
                  value={firstName || ""}
                  onChange={(e) => setFirstName(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  sx={{
                    boxShadow: 3,
                  }}
                  label="Last Name"
                  value={lastName || ""}
                  onChange={(e) => setLastName(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  sx={{
                    boxShadow: 3,
                  }}
                  label="Email"
                  value={email || ""}
                  onChange={(e) => setEmail(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  sx={{
                    boxShadow: 3,
                  }}
                  label="Job"
                  value={job || ""}
                  onChange={(e) => setJob(e.target.value)}
                  fullWidth
                />
              </Grid>
            </Grid>
          </CardContent>

          <CardActions sx={{ padding: "16px" }}>
            <Button
              sx={{
                marginLeft: "auto",
              }}
              variant="contained"
              color="error"
              type="reset"
              onClick={handleReset}
            >
              Reset
            </Button>
            <Button
              sx={{
                marginLeft: "auto",
              }}
              variant="contained"
              color="primary"
              type="submit"
            >
              Save
            </Button>
          </CardActions>
        </Card>
      </form>
    </>
  );
};

export default EditEmployee;
