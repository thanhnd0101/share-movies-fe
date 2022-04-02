import { Typography, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { logoutAC } from "../reducers";

export default function AuthenticatedRightHeader({
  refresh,
}: {
  refresh: Function;
}) {
  const user = useSelector((state: any) => state.user);
  const dispatch = useDispatch();

  function logout() {
    dispatch(logoutAC());
    refresh();
  }

  return (
    <>
      <Typography variant="subtitle1" style={{ marginRight: 5 }}>
        Welcome {user.username}
      </Typography>
      <Button variant="contained" color="success" style={{ marginRight: 5 }}>
        Share a movie
      </Button>
      <Button variant="contained" color="secondary" onClick={logout}>
        Logout
      </Button>
    </>
  );
}
