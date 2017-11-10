import AxiosInstance from '../config/AxiosInstance';

const BooksService = {
  getBookDetail: id => AxiosInstance.get(`/books/${id}`),
  getBooks: () => AxiosInstance.get('/books')
};

export default BooksService;
