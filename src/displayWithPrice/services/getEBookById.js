import axios from "axios";
import tokenManager from "@/commons/utils/token";
import environment from "@/commons/utils/environment";
import { notifyError } from "@/commons/utils/toaster";

const getEBookById = (id) => {
  const { getToken } = tokenManager();
  const token = getToken();
  
  return axios.get(`${environment.rootApi}/call/displaywithprice/${id}`, {
    params: { token },
    headers: {
      'Authorization': token,
    }
  }).catch((error) => {
    console.error(error);
    notifyError(error);
  });
};

export default getEBookById;