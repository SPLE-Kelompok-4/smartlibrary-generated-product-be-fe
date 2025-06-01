import axios from "axios";
import tokenManager from "@/commons/utils/token";
import environment from "@/commons/utils/environment";

const editWishlistItem = (wishlistItemId, data = {}) => {
  let body = { ...data, wishlistItemId };

  const { getToken } = tokenManager();
  const token = getToken();

  return axios.put(`${environment.rootApi}/call/wishlistitem/update`, body, {
    params: { token },
    headers: {
      Authorization: token,
    },
  });
};

export default editWishlistItem;
