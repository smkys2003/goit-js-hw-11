import { getImagesByQuery } from './js/pixabay-api.js';
import { createImageGalleryMarkup } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const imageSearchForm = document.querySelector('.form');
const imagesGalleryContainer = document.querySelector('.gallery');
const loadingSpinner = document.querySelector('.loader');

const galleryLightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

imageSearchForm.addEventListener('submit', event => {
  event.preventDefault();

  const userSearchQuery =
    event.currentTarget.elements['search-text'].value.trim();

  if (userSearchQuery === '') {
    return;
  }

  imagesGalleryContainer.innerHTML = '';

  loadingSpinner.classList.remove('is-hidden');

  getImagesByQuery(userSearchQuery)
    .then(apiResponse => {
      const receivedImagesArray = apiResponse.data.hits;

      if (receivedImagesArray.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }

      const generatedMarkup = createImageGalleryMarkup(receivedImagesArray);
      imagesGalleryContainer.insertAdjacentHTML('beforeend', generatedMarkup);

      galleryLightbox.refresh();
    })
    .finally(() => {
      loadingSpinner.classList.add('is-hidden');
    });
});
