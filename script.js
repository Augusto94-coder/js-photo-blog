const container = document.querySelector(".container");
const overlay = document.querySelector(".overlay");
const overlayImg = overlay.querySelector(".overlay-content");
const closeBtn = overlay.querySelector(".close");


axios.get("https://lanciweb.github.io/demo/api/pictures/")
  .then(response => {
    const data = response.data;


    let cardsHTML = "";

    for (let i = 0; i < 6 && i < data.length; i++) {
      const item = data[i];

      cardsHTML += `
        <article>
          <img src="img/pin.svg" alt="Pin" class="pin">
          <div>
            <img src="${item.url}" alt="${item.title}">
          </div>
          <h2>${item.title}</h2>
          <p>${item.date}</p>
        </article>
      `;
    }

    container.innerHTML = cardsHTML;

  })
  .catch(error => {
    console.error("Errore nel caricamento dei dati:", error);
  });

console.log(container);

container.addEventListener("click", (e) => {
  const articolo = container.querySelector("article");
  if (!articolo) return;

  const imgEl = articolo.querySelector("div img");
  if (!imgEl) return;

  overlay.style.display = "block";
  overlayImg.src = imgEl.src;
  overlayImg.alt = imgEl.alt || "";
});

closeBtn.addEventListener("click", () => {
  overlay.style.display = "none";
  overlayImg.src = "";
});
