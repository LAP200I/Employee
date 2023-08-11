import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FetchUserObj, FunctionUpdateEmployee } from "../../Redux/Action";
import { Button } from "@mui/material";

const UpdateEmployee = () => {
  const [id, idchange] = useState(0);
  const [firstname, firstnamechange] = useState("");
  const [lastname, lastnamechange] = useState("");
  const [email, emailchange] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { code } = useParams();

  const userobj = useSelector((state) => state.user.userobj);

  const handlesubmit = (e) => {
    e.preventDefault();
    const userobj = { id, firstname, lastname, email, avatar };
    dispatch(FunctionUpdateEmployee(userobj, id));
    navigate("/employee");
  };

  useEffect(() => {
    dispatch(FetchUserObj(code));
  }, []);

  useEffect(() => {
    if (userobj) {
      idchange(userobj.id);
      firstnamechange(userobj.firstname);
      lastnamechange(userobj.lastname);
      emailchange(userobj.email);
    }
  }, [userobj]);

  return (
    <>
      <form onSubmit={handlesubmit}>
        <div className="card">
          <div className="card-header" style={{ textAlign: "left" }}>
            <h2>Add User</h2>
          </div>
          <div className="card-body" style={{ textAlign: "left" }}>
            <div className="row">
              <div className="col-lg-12">
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    value={firstname || ""}
                    onChange={(e) => firstnamechange(e.target.value)}
                    className="form-control"
                  ></input>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    value={lastname || ""}
                    onChange={(e) => lastnamechange(e.target.value)}
                    className="form-control"
                  ></input>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="form-group">
                  <label>Email</label>
                  <input
                    value={email || ""}
                    onChange={(e) => emailchange(e.target.value)}
                    className="form-control"
                  ></input>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer" style={{ textAlign: "left" }}>
            <button className="btn btn-primary" type="submit">
              Submit
            </button>{" "}
            |
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                navigate("/employee");
              }}
            >
              Back
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default UpdateEmployee;
