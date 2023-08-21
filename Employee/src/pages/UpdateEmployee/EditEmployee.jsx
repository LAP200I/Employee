import { Form, Field } from "react-final-form";
import {
  TextField,
  Button,
  Card,
  Grid,
  Box,
  Modal,
  Avatar,
  CardHeader,
  CardContent,
  CardActions,
} from "@mui/material";
import { Validate } from "../../component/Validate/Validate";
import { useSelector } from "react-redux";

const EditEmployee = ({
  avatar,
  // userObj,
  handleSubmit,
  handleReset,
  handleOpen,
  handleClose,
  open,
  selectedImage,
  handleImageChange,
  handleSubmitImage,
}) => {
  let userObj = useSelector((state) => state.user.userObj);
  return (
    <>
      <Form
        onSubmit={handleSubmit}
        initialValues={{
          firstName: userObj?.first_name || "",
          lastName: userObj?.last_name || "",
          email: userObj?.email || "",
          job: "",
          avatar: userObj?.avatar || "",
        }}
        validate={Validate}
        render={({ handleSubmit, form, submitting, pristine, invalid }) => (
          <Card
            sx={{
              boxShadow: 3,
              maxWidth: "60%",
              maxHeight: "90%",
              margin: "auto",
            }}
          >
            <CardHeader title="Edit Employee" style={{ textAlign: "left" }} />
            <Avatar
              sx={{
                width: 100,
                height: 100,
                margin: "auto",
                marginTop: "16px",
              }}
              alt="Remy Sharp"
              src={avatar || "https://www.w3schools.com/howto/img_avatar.png"}
            />
            <Button
              onClick={handleOpen}
              variant="contained"
              sx={{
                display: "block",
                margin: "10px auto",
              }}
            >
              {avatar ? "Edit Image" : "Choose Image"}
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                {selectedImage ? (
                  <>
                    <Avatar
                      src={selectedImage}
                      sx={{ width: 200, height: 200, mb: 2 }}
                    />
                    <Button
                      variant="contained"
                      component="span"
                      onClick={handleSubmitImage}
                      style={{
                        marginBottom: 3,
                      }}
                    >
                      Upload this image
                    </Button>
                  </>
                ) : (
                  ""
                )}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  style={{ display: "none" }}
                  id="upload-image"
                />
                <label htmlFor="upload-image">
                  <Button variant="contained" component="span">
                    Choose other
                  </Button>
                </label>
              </Box>
            </Modal>
            <CardContent>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <Field name="firstName">
                    {({ input, meta }) => (
                      <TextField
                        sx={
                          {
                            // boxShadow: 3,
                          }
                        }
                        label="First Name"
                        {...input}
                        fullWidth
                        error={Boolean(meta.touched && meta.error)}
                        helperText={meta.touched && meta.error}
                      />
                    )}
                  </Field>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field name="lastName">
                    {({ input, meta }) => (
                      <TextField
                        sx={
                          {
                            // boxShadow: 3,
                          }
                        }
                        label="Last Name"
                        {...input}
                        fullWidth
                        error={Boolean(meta.touched && meta.error)}
                        helperText={meta.touched && meta.error}
                      />
                    )}
                  </Field>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field name="email">
                    {({ input, meta }) => (
                      <TextField
                        sx={
                          {
                            // boxShadow: 3,
                          }
                        }
                        label="Email"
                        {...input}
                        fullWidth
                        error={Boolean(meta.touched && meta.error)}
                        helperText={meta.touched && meta.error}
                      />
                    )}
                  </Field>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field name="job">
                    {({ input, meta }) => (
                      <TextField
                        sx={
                          {
                            // boxShadow: 3,
                          }
                        }
                        label="Job"
                        {...input}
                        error={Boolean(meta.touched && meta.error)}
                        helperText={meta.touched && meta.error}
                        fullWidth
                      />
                    )}
                  </Field>
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
                onClick={() => handleReset(form)}
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
                disabled={submitting || pristine || invalid}
                onClick={handleSubmit}
              >
                Save
              </Button>
            </CardActions>
          </Card>
        )}
      />
    </>
  );
};

export default EditEmployee;
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
