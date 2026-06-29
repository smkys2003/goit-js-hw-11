export function createImageGalleryMarkup(imagesArray) {
  return imagesArray
    .map(image => {
      return `
        <li class="gallery-item">
          <a class="gallery-link" href="${image.largeImageURL}">
            <img 
              class="gallery-image" 
              src="${image.webformatURL}" 
              alt="${image.tags}" 
            />
          </a>
          <div class="info-block">
            <div class="info-item">
              <b class="info-title">Likes</b>
              <span class="info-value">${image.likes}</span>
            </div>
            <div class="info-item">
              <b class="info-title">Views</b>
              <span class="info-value">${image.views}</span>
            </div>
            <div class="info-item">
              <b class="info-title">Comments</b>
              <span class="info-value">${image.comments}</span>
            </div>
            <div class="info-item">
              <b class="info-title">Downloads</b>
              <span class="info-value">${image.downloads}</span>
            </div>
          </div>
        </li>
      `;
    })
    .join('');
}
