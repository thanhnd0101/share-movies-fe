import axios from "axios";
import { getMainAppHost } from "../../../lib/globalUtils";

export const getVideosAsync = (
  pageIndex: number = 1,
  itemsPerPage: number = 25
) => {
  return axios({
    method: "get",
    url: `${getMainAppHost}/api/v1/videos?page_index=${pageIndex}&items_per_page=${itemsPerPage}`,
  });
};
