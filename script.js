const container = document.getElementById("cards-container");


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