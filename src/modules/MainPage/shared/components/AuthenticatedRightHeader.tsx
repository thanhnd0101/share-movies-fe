import { Typography, Button, Modal, TextField, Box } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { shareYoutubeAsync } from "../apiCalls/shareYoutube";
import { logoutAC } from "../reducers";
import { toast } from "react-toastify";
import { isElementAccessExpression } from "typescript";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function AuthenticatedRightHeader({
  refresh,
  refreshList,
}: {
  refresh: Function;
  refreshList: Function;
}) {
  const token = useSelector((state: any) => state.user.token);
  const user = useSelector((state: any) => state.user);
  const dispatch = useDispatch();

  function logout() {
    dispatch(logoutAC());
    refresh();
  }

  const [url, setUrl] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  function shareYoutube() {
    shareYoutubeAsync(token, url).then((res) => {
      if (res.status == 200) {
        toast.success("Share successful");
        refreshList();
      } else {
        toast.error("Share failed");
      }
    });
  }

  return (
    <>
      <Typography variant="subtitle1" style={{ marginRight: 5 }}>
        Welcome {user.username}
      </Typography>
      <Button
        variant="contained"
        color="success"
        style={{ marginRight: 5 }}
        onClick={handleOpen}
      >
        Share a movie
      </Button>
      <Button variant="contained" color="secondary" onClick={logout}>
        Logout
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box
          sx={{ ...style, width: 400 }}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <TextField
            id="outlined-basic"
            label="Youtube URL"
            variant="outlined"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUrl(e.target.value)
            }
            style={{ marginBottom: 10 }}
          />
          <Button
            variant="contained"
            onClick={() => {
              shareYoutube();
              handleClose();
            }}
          >
            Share
          </Button>
        </Box>
      </Modal>
    </>
  );
}
