import axios from "axios";
import tokenManager from "@/commons/utils/token";
import environment from "@/commons/utils/environment";

const deleteWishlistItem = (id) => {
  const { getToken } = tokenManager();
  const token = getToken();

  return axios.delete(`${environment.rootApi}/call/wishlistitem/delete`, {
    params: { token },
    headers: {
      Authorization: token,
    },
    data: { id },
  });
};

export default deleteWishlistItem;
