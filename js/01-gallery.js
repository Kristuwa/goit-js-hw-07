import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryListRef = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryListRef.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryMarkup(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `
		<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

galleryListRef.addEventListener("click", onClickImage);

function onClickImage(e) {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return;
  }

  e.target.src = e.target.dataset.source;

  createBasicLightbox(e.target);
}

function createBasicLightbox(elem) {
  const instance = basicLightbox.create(
    `
	 <div class="modal">
	 <img src='${elem.src}' alt='${elem.alt}' width="1280"/>
	 </div>
  `,
    {
      onShow: (instance) => {
        instance
          .element()
          .querySelector("img")
          .addEventListener("click", instance.close);

        window.addEventListener("keydown", onPressEscape);
      },

      onClose: (instance) => {
        instance
          .element()
          .querySelector("img")
          .removeEventListener("click", instance.close);

        window.removeEventListener("keydown", onPressEscape);
      },
    }
  );

  function onPressEscape(e) {
    if (e.code === "Escape") {
      instance.close();
    }
  }

  instance.show();
}
