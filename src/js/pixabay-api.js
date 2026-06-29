import axios from 'axios';

const PRIVATE_API_KEY = '56499472-080893bfed44fcf3a0d134fcd';
const BASE_URL = 'https://pixabay.com/api/';

export function getImagesByQuery(searchQuery) {
  const requestQueryParams = {
    key: PRIVATE_API_KEY,
    q: searchQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  return axios.get(BASE_URL, { params: requestQueryParams });
}
