import { Form, Field } from "react-final-form";
import { Validate } from "../../component/Validate/Validate";
import {
  TextField,
  Button,
  Card,
  Grid,
  CardHeader,
  CardContent,
  CardActions,
} from "@mui/material";

const UpdateEmployee = ({ handleSubmit }) => {
  return (
    <>
      <Form
        onSubmit={handleSubmit}
        validate={Validate}
        render={({ handleSubmit, hasValidationErrors }) => (
          <form onSubmit={handleSubmit}>
            <Card
              sx={{
                boxShadow: 3,
                maxWidth: "70%",
                margin: "auto",
                marginTop: "10%",
              }}
            >
              <CardHeader title="Add User" style={{ textAlign: "left" }} />
              <CardContent>
                <Grid container spacing={3}>
                  <Field
                    name="firstName"
                    render={({ input, meta }) => (
                      <Grid item xs={12} sm={6}>
                        <TextField
                          label="First Name"
                          fullWidth
                          {...input}
                          error={Boolean(meta.touched && meta.error)}
                          helperText={meta.touched && meta.error}
                        />
                      </Grid>
                    )}
                  />
                  <Field
                    name="lastName"
                    render={({ input, meta }) => (
                      <Grid item xs={12} sm={6}>
                        <TextField
                          label="Last Name"
                          fullWidth
                          {...input}
                          error={Boolean(meta.touched && meta.error)}
                          helperText={meta.touched && meta.error}
                        />
                      </Grid>
                    )}
                  />
                  <Field
                    name="email"
                    render={({ input, meta }) => (
                      <Grid item xs={12} sm={6}>
                        <TextField
                          label="Email"
                          fullWidth
                          {...input}
                          error={Boolean(meta.touched && meta.error)}
                          helperText={meta.touched && meta.error}
                        />
                      </Grid>
                    )}
                  />
                  <Field
                    name="job"
                    render={({ input, meta }) => (
                      <Grid item xs={12} sm={6}>
                        <TextField
                          label="Job"
                          fullWidth
                          {...input}
                          error={Boolean(meta.touched && meta.error)}
                          helperText={meta.touched && meta.error}
                        />
                      </Grid>
                    )}
                  />
                </Grid>
              </CardContent>
              <CardActions style={{ padding: "16px", textAlign: "right" }}>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    marginLeft: "auto",
                  }}
                  type="submit"
                  disabled={hasValidationErrors}
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </CardActions>
            </Card>
          </form>
        )}
      />
    </>
  );
};

export default UpdateEmployee;
