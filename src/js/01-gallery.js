// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryRef = document.querySelector('.gallery');
function createMarkup({ preview, original, description}){
    return `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>`
};
const markup = galleryItems.map(createMarkup).join('');
galleryRef.insertAdjacentHTML('afterbegin', markup);

let lightbox = new SimpleLightbox('.gallery a');
lightbox.defaultOptions.captionDelay = 250;
lightbox.defaultOptions.captionsData = 'Alt';

console.log(galleryItems);
