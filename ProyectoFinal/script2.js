
  const itemsPerPage = 10;
  let currentPage = 1;
  let filteredProducts = [...productos];
  let filters = [];
  function fetchProductos() {
      return new Promise((resolve) => {
          setTimeout(() => {
              resolve(productos);
          }, 2000); 
      });
  }
  
  function updateFilterOptions() {
      const filterType = document.getElementById('filter-type').value;
      const filterValueSelect = document.getElementById('filter-value');
      filterValueSelect.innerHTML = '';
  
      let options = [];
      if (filterType === 'categoria') {
          options = [...new Set(productos.map(p => p.categoria))];
      } else if (filterType === 'marca') {
          options = [...new Set(productos.map(p => p.marca))];
      } else if (filterType === 'precio') {
          options = ['Menor a 200000', 'Entre 200000 y 500000', 'Mayor a 500000'];
      }
  
      options.forEach(option => {
          const opt = document.createElement('option');
          opt.value = option;
          opt.textContent = option;
          filterValueSelect.appendChild(opt);
      });
  }
  
  function addFilter() {
      const filterType = document.getElementById('filter-type').value;
      const filterValue = document.getElementById('filter-value').value;
  
      if (filterType && filterValue) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                filters.push({ type: filterType, value: filterValue });
                applyFilters();
                resolve(); 
            }, 2000); 
        });
      }
      
    }
  
  function clearFilters() {
      filters = [];
      filteredProducts = [...productos];
      currentPage = 1;
      renderProducts();
  }
  
  function applyFilters() {
      filteredProducts = productos.filter(product => {
        return filters.every(filter => {
            switch (filter.type) {
              case 'categoria':
                return product.categoria === filter.value;
              case 'marca':
                return product.marca === filter.value;
              case 'precio':
                switch (filter.value) {
                  case 'Menor a 200000':
                    return product.precio < 200000;
                  case 'Entre 200000 y 500000':
                    return product.precio >= 200000 && product.precio <= 500000;
                  case 'Mayor a 500000':
                    return product.precio > 500000;
                  default:
                    break;
                }
              default:
                break;
            }
          });
      });
      currentPage = 1;
      renderProducts();
  }
  
  function renderProducts() {
      const tableBody = document.getElementById('productos-table').querySelector('tbody');
      tableBody.innerHTML = '';
  
      const start = (currentPage - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      const productsToRender = filteredProducts.slice(start, end);
  
      productsToRender.forEach(product => {
          const row = document.createElement('tr');
          row.innerHTML = `
              <td>${product.nombre}</td>
              <td>$${product.precio.toLocaleString()}</td>
              <td>${product.marca}</td>
              <td>${product.id}</td>
              <td>${product.categoria}</td>
              <td><img src="${product.imagen}" alt="${product.nombre}" width="50"></td>
          `;
          tableBody.appendChild(row);
      });
  
      document.getElementById('prev').disabled = currentPage === 1;
      document.getElementById('next').disabled = end >= filteredProducts.length;
  }
  
  function nextPage() {
      if ((currentPage * itemsPerPage) < filteredProducts.length) {
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
      fetchProductos().then(products => {
          productos = products;
          filteredProducts = [...productos];
          renderProducts();
          updateFilterOptions();
      });
  };

  console.log(productos);