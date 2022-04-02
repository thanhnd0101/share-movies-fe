import { Grid, Pagination } from "@mui/material";
import { useState, useEffect } from "react";
import { getVideosAsync } from "./apiCalls/videos";
import DocumentCard, { DocumentInput } from "./components/DocumentCard";
import Header from "./shared/components/Header";

type DocumentAPIReturn = {
  username: string;
  meta_data: DocumentInput["metaData"] & { id: string };
};

export default function Main() {
  const [documents, setDocuments] = useState<DocumentInput[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const [reRender, setRerender] = useState(false);
  function refresh() {
    setRerender((state) => !state);
  }
  useEffect(() => {
    getVideosAsync(currentPage, 1).then((res) => {
      if (res.status == 200) {
        const data = JSON.parse(res.data);
        const dataDeepCopy = data.documents.map(
          (doc: DocumentAPIReturn): DocumentInput => {
            const metaData = Object.assign({}, doc.meta_data);
            return {
              youtubeId: metaData.id,
              metaData: {
                username: doc.username,
                title: metaData.title,
                description: metaData.description,
                viewCount: metaData.viewCount,
                likeCount: metaData.likeCount,
                favoriteCount: metaData.favoriteCount,
                commentCount: metaData.commentCount,
              },
            };
          }
        );
        setTotalPages(data.total_pages);
        setDocuments(dataDeepCopy);
      }
    });
  }, [reRender, currentPage]);

  const documentCards = documents.map((doc) => {
    return (
      <DocumentCard
        key={doc.youtubeId}
        youtubeId={doc.youtubeId}
        metaData={doc.metaData}
      />
    );
  });

  return (
    <>
      <Header />
      <Grid container justifyContent="center" style={{ marginTop: 20 }}>
        {documentCards}
      </Grid>
      {totalPages > 1 && (
        <Pagination
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: 50,
          }}
          count={totalPages}
          variant="outlined"
          shape="rounded"
          onChange={(e, value) => {
            setCurrentPage(value);
          }}
        />
      )}
    </>
  );
}
