import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryListRef = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryListRef.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryMarkup(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `
		<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join("");
}

let lightbox = new SimpleLightbox(".gallery a", {
  captionType: "alt",
  captionPosition: bottom,
  captionDelay: 250,
});
