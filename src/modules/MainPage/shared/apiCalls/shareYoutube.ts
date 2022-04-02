import axios from "axios";
import { getMainAppHost } from "../../../../lib/globalUtils";

export const shareYoutubeAsync = (token: string, youtubeUrl: string) => {
  const formData = new FormData();
  formData.append(`youtube_url`, youtubeUrl);

  return axios({
    method: "post",
    url: `${getMainAppHost}/api/v1/videos/share-youtube-video`,
    headers: {
      Authorization: token,
      "content-type": "application/form-data",
    },
    data: formData,
  });
};
