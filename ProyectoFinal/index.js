const botonBajar = document.getElementById('boton-bajar');

botonBajar.addEventListener('click', function() {
  const seccionObjetivo = document.getElementById('PRODUCTOS'); 
  seccionObjetivo.scrollIntoView({ behavior: 'smooth' });
});

const itemsPerPage = 15;
let currentPage = 1;

function renderProducts() {
    /* localStorage.getItem('productos'); */
    const container = document.getElementById('productos-container');
    container.innerHTML = '';
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const productsToRender = productos.slice(start, end);

    productsToRender.forEach(productos => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${productos.imagen}" alt="${productos.nombre}">
            <div class="card-content">
                <h3 class="card-title">${productos.nombre}</h3>
                <p class="card-text">${productos.marca}</p>
                <p class="card-price">$${productos.precio.toLocaleString()}</p>
                <p class="card-text">${productos.descripcion}</p>
            </div>
        `;
        container.appendChild(card);
    });

    document.getElementById('prev').disabled = currentPage === 1;
    document.getElementById('next').disabled = end >= productos.length;
}

function nextPage() {
    if ((currentPage * itemsPerPage) < productos.length) {
        currentPage++;
        renderProducts();
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        renderProducts();
    }
}

window.onload = function() {
    renderProducts();
};
