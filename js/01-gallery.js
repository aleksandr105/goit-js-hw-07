import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryEl = document.querySelector(".gallery");

galleryEl.addEventListener("click", openModal);

function onGalleryItems(items) {
  return items
    .map(
      ({ original, preview, description }) => `<div class="gallery__item">
  <a class="gallery__link" href="${preview}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    )
    .join("");
}

galleryEl.innerHTML = onGalleryItems(galleryItems);

const instance = basicLightbox.create(`
<img src=""
alt=""
/>
`);
const imgEl = instance.element().querySelector("img");

function openModal(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  imgEl.alt = event.target.alt;
  imgEl.src = event.target.dataset.source;
  instance.show();
}
