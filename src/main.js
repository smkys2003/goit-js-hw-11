import { getImagesByQuery } from './js/pixabay-api.js';
import {
  renderGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.querySelector('.form').addEventListener('submit', e => {
  e.preventDefault();
  const query = e.currentTarget.elements['search-text'].value.trim();
  if (!query) return;

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(data => {
      if (!data.hits.length) {
        return iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
      }
      renderGallery(data.hits);
    })
    .catch(() =>
      iziToast.error({
        message: 'Something went wrong. Please try again later!',
        position: 'topRight',
      })
    )
    .finally(hideLoader);
});
