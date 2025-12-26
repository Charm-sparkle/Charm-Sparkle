const productImages = document.querySelectorAll("#Designs img");
const preview = document.getElementById("productPreview");
const previewImg = document.getElementById("previewImg");
const previewText = document.getElementById("previewText");

productImages.forEach(img => {
  img.addEventListener("click", () => {
    previewImg.src = img.src;

    const text = img.nextElementSibling;
    previewText.innerText = text ? text.innerText : "";

    preview.style.display = "flex";
  });
});

preview.addEventListener("click", () => {
  preview.style.display = "none";
});