import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import {
  LinearProgress,
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

function ViewDetail({
  email,
  firstName,
  lastName,
  avatar,
  handleEditClick,
  handleDeleteClick,
}) {
  return (
    <StyledInfCard>
      <Card sx={{ maxWidth: 400 }}>
        <CardMedia
          component="img"
          alt="avatar"
          sx={{
            borderRadius: 1,
            height: 400,
          }}
          image={avatar || "https://source.unsplash.com/random?wallpapers"}
          loading="lazy"
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
            variant="contained"
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
            variant="contained"
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
  );
}

const StyledInfCard = styled(Card)(() => ({
  boxShadow: "none",
  backgroundColor: "transparent",
  margin: "0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export default ViewDetail;
