import { Grid, Typography } from "@mui/material";
import YoutubeEmbed from "../YoutubeEmbed";
import Icon from "@mdi/react";
import { mdiAccountEye, mdiThumbUp, mdiHeart, mdiCommentText } from "@mdi/js";

export type DocumentInput = {
  youtubeId: string;
  metaData: {
    username: string;
    title: string;
    description: string;
    viewCount: string;
    likeCount: string;
    favoriteCount: string;
    commentCount: string;
  };
};

export default function DocumentCard({ youtubeId, metaData }: DocumentInput) {
  return (
    <Grid container style={{ maxWidth: "80%", marginBottom: 20}}>
      <Grid item xs={5}>
        <YoutubeEmbed embedId={youtubeId} />
      </Grid>
      <Grid
        item
        xs={7}
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Typography variant="h5">{metaData.title}</Typography>
        <Typography variant="body1">Shared by: {metaData.username}</Typography>
        <Grid container alignItems="center">
          <Grid
            item
            xs={5}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Icon size={1} path={mdiAccountEye} /> {metaData.viewCount}
            <Icon size={1} path={mdiThumbUp} /> {metaData.likeCount}
            <Icon size={1} path={mdiHeart} /> {metaData.favoriteCount}
            <Icon size={1} path={mdiCommentText} /> {metaData.commentCount}
          </Grid>
        </Grid>
        <Typography variant="body1">Description:</Typography>
        <Typography variant="body1">{metaData.description}</Typography>
      </Grid>
    </Grid>
  );
}
