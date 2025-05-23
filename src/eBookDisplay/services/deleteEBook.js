import axios from 'axios'
import tokenManager from '@/commons/utils/token'
import environment from '@/commons/utils/environment'

const deleteEBook = (id) => {
  const { getToken } = tokenManager();
  const token = getToken();
  
  return axios.delete(`${environment.rootApi}/call/ebookdisplay/delete/${id}`, {
    params: { token },
    headers: {
      'Authorization': token,
    }
  });
}

export default deleteEBook;