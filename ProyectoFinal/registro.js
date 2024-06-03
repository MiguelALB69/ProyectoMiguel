
const botonBajar = document.getElementById('boton-bajar');

botonBajar.addEventListener('click', function() {
  const seccionObjetivo = document.getElementById('PRODUCTOS'); 
  seccionObjetivo.scrollIntoView({ behavior: 'smooth' });
});
const form = document.getElementById('product-form');

/* localStorage.getItem('productos'); */

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const categoria = document.getElementById('categoria').value;
    const imagen = document.getElementById('imagen').value;
    const precio = parseInt(document.getElementById('precio').value);
    const descripcion = document.getElementById('descripcion').value;
    const marca = document.getElementById('marca').value;
    const id = document.getElementById('id').value;

    const idRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d.*\d)[a-zA-Z\d]{8,}$/;
    if (!idRegex.test(id)) {
        alert('El ID del producto no cumple con los requisitos.');
        return;
    }

    const nuevoProducto = {
        id: productos.length + 1,
        nombre: nombre,
        precio: precio,
        imagen: imagen,
        marca: marca,
        categoria: categoria,
        descripcion: descripcion
    };

    productos.push(nuevoProducto);
    /* localStorage.setItem('productos', JSON.stringify(productos)); */
    console.log(productos);
    window.alert("Registro exitoso");
});
 