import AxiosInstance from '../../config/AxiosInstance';

const BookService = {
  getBooks(author = '', title = '') {
    return AxiosInstance.get(`/books?title=${title}&author=${author}`);
  }
};

export default BookService;
