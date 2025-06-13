import api from '../api';

export const provider_books = {
  getBooks: query => api.get(`/books/v1/volumes?q=${query}`),
};
