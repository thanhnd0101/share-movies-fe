import { Avatar, Grid, Typography, Divider } from "@mui/material";
import RightHeader from "./RightHeader";

export default function Header({ refreshList }: { refreshList: Function }) {
  return (
    <>
      <Grid container spacing={2}>
        <Grid
          item
          xs={4}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Avatar src="/play-button.png" sx={{ width: 100, height: 100 }} />
          <Typography variant="h3">Fun Movies</Typography>
        </Grid>
        <Grid
          item
          xs={8}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <RightHeader refreshList={refreshList} />
        </Grid>
      </Grid>
      <Divider />
    </>
  );
}
