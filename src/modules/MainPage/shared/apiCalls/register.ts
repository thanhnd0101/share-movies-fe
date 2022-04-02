import axios from "axios";
import { getMainAppHost } from "../../../../lib/globalUtils";

export const registerAsync = (username: string, password: string) => {
  const formData = new FormData();
  formData.append(`username`, username);
  formData.append(`password`, password);

  return axios({
    method: "post",
    url: `${getMainAppHost}/api/v1/users`,
    headers: {
      "content-type": "application/form-data",
    },
    data: formData,
  });
};
