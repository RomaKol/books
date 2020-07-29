import axios from 'axios';
import config, {handleRequest, handleResponse, handleResponseError} from './initialConfig';

const api = axios.create({
  ...config,
  baseURL: 'http://openlibrary.org/api'
});

api.interceptors.request.use(handleRequest);
api.interceptors.response.use(handleResponse, handleResponseError);

class ApiService {
  getBook(isbn) {
    return api.get(`/books?bibkeys=ISBN:${isbn}&jscmd=data&format=json`);
  }
}

export default new ApiService();