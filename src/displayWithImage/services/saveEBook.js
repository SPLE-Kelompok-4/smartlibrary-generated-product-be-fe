import axios from 'axios'
import tokenManager from '@/commons/utils/token'
import environment from '@/commons/utils/environment'

const saveEBook = (data = {}) => {
  const { getToken } = tokenManager();
  const token = getToken();
  
  const isFormData = data instanceof FormData;
  
  const headers = {
    'Authorization': token,
  };
  
  if (!isFormData) {
    headers['Content-Type'] = 'application/json';
  }
  
  return axios.post(
    `${environment.rootApi}/call/ebook/save`, 
    data,
    {
      params: { token },
      headers: headers
    }
  );
}

export default saveEBook;