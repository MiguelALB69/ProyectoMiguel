const productos = [
    {
        id: 1,
        nombre: "Silla Gamer Razer Iskur X",
        precio: 350000,
        imagen: "https://th.bing.com/th/id/R.37158832ee47beba62137fa131009545?rik=IwanJLEaEHvt5g&riu=http%3a%2f%2fwww.achorao.com%2fcdn%2fshop%2fproducts%2fRZISKURXBLACK_GREEN_1.png%3fv%3d1664317753&ehk=Uvev5lQ9IqyABbMQPds6qfTXwq7ZewFjNGK17DbuhzU%3d&risl=&pid=ImgRaw&r=0",
        marca: "Razer",
        categoria: "sillas-gamer",
        descripcion: "Silla gamer ergonómica con soporte lumbar ajustable y reposacabezas reclinable."
    },
    {
        id: 2,
        nombre: "Silla Gamer Secretlab Titan Evo 2022",
        precio: 420000,
        imagen: "https://m.media-amazon.com/images/I/511WatvmDFL.jpg",
        marca: "Secretlab",
        categoria: "sillas-gamer",
        descripcion: "Silla gamer de alta gama con materiales de primera calidad y soporte lumbar 4D."
    },
    {
        id: 3,
        nombre: "Silla Gamer Corsair T1 Race",
        precio: 280000,
        imagen: "https://th.bing.com/th/id/R.09582f12af8cdb652f68e30b899dbdc7?rik=Tted8qPUawR6Sw&pid=ImgRaw&r=0",
        marca: "Corsair",
        categoria: "sillas-gamer",
        descripcion: "Silla gamer cómoda y resistente con reposapiés retráctil y respaldo reclinable."
    },
  
    {
        id: 4,
        nombre: "Silla Gamer Noblechairs Hero",
        precio: 320000,
        imagen: "https://th.bing.com/th/id/OIP.ZUD71RpcVnLoLsLxxUz6bAHaHa?rs=1&pid=ImgDetMain",
        marca: "Noblechairs",
        categoria: "sillas-gamer",
        descripcion: "Silla gamer ergonómica con diseño elegante y soporte lumbar ajustable."
    },
  
    {
        id: 5,
        nombre: "Silla Gamer DXRacer OH/RS1",
        precio: 250000,
        imagen: "https://th.bing.com/th/id/OIP.VKLQWPSzgS0dFqhNAilQbwHaHa?rs=1&pid=ImgDetMain",
        marca: "DXRacer",
        categoria: "sillas-gamer",
        descripcion: "Silla gamer económica con buena calidad de materiales y diseño deportivo."
    },
  
    {
        id: 6,
        nombre: "Silla Gamer Vertagear Iron Throne L500",
        precio: 380000,
        imagen: "https://th.bing.com/th/id/OIP.Wth9GgamcZMHzjbZHn3hFgHaHa?rs=1&pid=ImgDetMain",
        marca: "Vertagear",
        categoria: "sillas-gamer",
        descripcion: "Silla gamer de alta gama con diseño futurista y soporte lumbar 4D."
    },
  
    {
        id: 7,
        nombre: "Silla Gamer AKRacing Nitro Pro",
        precio: 230000,
        imagen: "https://th.bing.com/th/id/R.df888a5731f9bd7a2d20742bbe53f2fe?rik=KMw8ODEwo9Y56A&pid=ImgRaw&r=0",
        marca: "AKRacing",
        categoria: "sillas-gamer",
        descripcion: "Silla gamer cómoda y versátil con reposabrazos ajustables en 4D y respaldo reclinable."
    },
  
    {
        id: 8,
        nombre: "Silla Gamer Arozzi Verona Pro V2",
        precio: 360000,
        imagen: "https://th.bing.com/th/id/R.4413890e97015dfd0ceb88114dc42cb8?rik=29R%2fDCZ3bNC8vg&pid=ImgRaw&r=0",
        marca: "Arozzi",
        categoria: "sillas-gamer",
        descripcion: "Silla gamer de alta gama con diseño elegante y materiales de primera calidad."
    },
  
    {
        id: 9,
        nombre: "Silla Gamer Cooler Master ErgoChair 2",
        precio: 300000,
        imagen: "https://th.bing.com/th/id/OIP.91ZjUkVttE7lXX8cw4E9JQHaHa?rs=1&pid=ImgDetMain",
        marca: "Cooler Master",
        categoria: "sillas-gamer",
        descripcion: "Silla gamer ergonómica con soporte lumbar ajustable y reposacabezas reclinable."
    },
  
    {
        id: 10,
        nombre: "Silla Gamer ASUS ROG Strix XG1",
        precio: 400000,
        imagen: "https://th.bing.com/th/id/OIP.-GoJazcf7K41KZMkJqbWtgHaHa?rs=1&pid=ImgDetMain",
        marca: "ASUS",
        categoria: "sillas-gamer",
        descripcion: "Silla gamer de alta gama con diseño inspirado en la estética ROG y soporte lumbar 4D."
    },

    {
        id: 11,
        nombre: "Teclado Gamer Razer Huntsman V2 Analog",
        precio: 280000,
        imagen: "https://th.bing.com/th/id/R.5f8900b3ac10ed66054f130225e051ea?rik=ekovib1He1R0NA&pid=ImgRaw&r=0",
        marca: "Razer",
        categoria: "teclados-gamer",
        descripcion: "Teclado gamer con interruptores analógicos para un control preciso y personalización ilimitada."
    },
    
    {
        id: 12,
        nombre: "Teclado Gamer Corsair K100 RGB OPX",
        precio: 320000,
        imagen: "https://images7.kabum.com.br/produtos/fotos/131187/teclado-optico-mecanico-gamer-corsair-k100-pro-rgb-switch-opx-us-ch-912a01a-na_1605121971_gg.jpg",
        marca: "Corsair",
        categoria: "teclados-gamer",
        descripcion: "Teclado gamer mecánico con interruptores ópticos y switches Cherry MX Speed Silver."
    },
    
    {
        id: 13,
        nombre: "Teclado Gamer Logitech G915 TKL Lightspeed",
        precio: 350000,
        imagen: "https://ddtech.mx/assets/uploads/af9749d60011a141ba65660c0a8bf6ec.jpg",
        marca: "Logitech",
        categoria: "teclados-gamer",
        descripcion: "Teclado gamer inalámbrico con switches Romer-G LINEARES y tecnología Lightspeed."
    },
    
    {
        id: 14,
        nombre: "Teclado Gamer HyperX Alloy Origins Core Tenkeyless",
        precio: 230000,
        imagen: "https://th.bing.com/th/id/R.caec1d4e9dc60b5a8a72ef103ea8d171?rik=ErgODBmJSzIcXA&pid=ImgRaw&r=0",
        marca: "HyperX",
        categoria: "teclados-gamer",
        descripcion: "Teclado gamer mecánico con switches HyperX Pudding PBT y diseño tenkeyless."
    },
    
    {
        id: 15,
        nombre: "Teclado Gamer SteelSeries Apex Pro Mini Wireless",
        precio: 300000,
        imagen: "https://th.bing.com/th/id/OIP.R4oV6QvqVoxoQ36L_w-6zwAAAA?rs=1&pid=ImgDetMain",
        marca: "SteelSeries",
        categoria: "teclados-gamer",
        descripcion: "Teclado gamer inalámbrico con switches ajustables OmniPoint 2.0 y diseño compacto."
    },
    
    {
        id: 16,
        nombre: "Teclado Gamer Ducky One 2 Mini RGB White",
        precio: 250000,
        imagen: "https://th.bing.com/th/id/OIP.xewbPtbDQDrJLyv5AOQfxAHaFj?rs=1&pid=ImgDetMain",
        marca: "Ducky",
        categoria: "teclados-gamer",
        descripcion: "Teclado gamer mecánico con switches Cherry MX y diseño tenkeyless."
    },
    
    {
        id: 17,
        nombre: "Teclado Gamer Asus ROG Strix Flare TKL",
        precio: 280000,
        imagen: "https://th.bing.com/th/id/OIP.qfGsQiCQDOrdfR3le-WkjQHaHa?rs=1&pid=ImgDetMain",
        marca: "ASUS",
        categoria: "teclados-gamer",
        descripcion: "Teclado gamer mecánico con switches Cherry MX RGB y diseño tenkeyless."
    },
    
    {
        id: 18,
        nombre: "Teclado Gamer NZXT Vulcan Pro Mini",
        precio: 270000,
        imagen: "https://th.bing.com/th/id/OIP.w8YIZ6yoore2Myj17OMa7wHaHa?w=500&h=500&rs=1&pid=ImgDetMain",
        marca: "NZXT",
        categoria: "teclados-gamer",
        descripcion: "Teclado gamer mecánico con switches Kailh Box Brown y diseño tenkeyless."
    },
    
    {
        id: 19,
        nombre: "Teclado Gamer Razer BlackWidow V3 Tenkeyless",
        precio: 240000,
        imagen: "https://th.bing.com/th/id/OIP.mpxcuS6VztzCHGQrUGmlfgHaHa?w=850&h=850&rs=1&pid=ImgDetMain",
        marca: "Razer",
        categoria: "teclados-gamer",
        descripcion: "Teclado gamer mecánico con switches Razer Green y diseño tenkeyless."
    },
    
    {
        id: 20,
        nombre: "Teclado Gamer Logitech G913 TKL Lightspeed",
        precio: 310000,
        imagen: "https://th.bing.com/th/id/OIP.eU4lkeSb9k_tEypASexz_AHaHa?rs=1&pid=ImgDetMain",
        marca: "Logitech",
        categoria: "teclados-gamer",
        descripcion: "Teclado gamer inalámbrico con switches Romer-G TÁCTILES y tecnología Lightspeed."
    },
      
    {
        id: 21,
        nombre: "Teclado Gamer Glorious GMMK Pro 75%",
        precio: 380000,
        imagen: "https://pegasum.cl/wp-content/uploads/2022/03/2491278-n1.jpg",
        marca: "Glorious",
        categoria: "teclados-gamer",
        descripcion: "Teclado gamer mecánico hot-swappable con diseño 75% y switches Gateron G Pro Yellow."
    },
      
    {
        id: 22,
        nombre: "Teclado Gamer Fnatic Streak65 LP",
        precio: 290000,
        imagen: "https://th.bing.com/th/id/R.587f873e80c3a7454af36e2bcdf9c4f2?rik=zr07ZLCGsat1hw&pid=ImgRaw&r=0",
        marca: "Fnatic",
        categoria: "teclados-gamer",
        descripcion: "Teclado gamer mecánico low profile con switches FlareTech Linear y diseño 65%."
    },
      
    {
        id: 23,
        nombre: "Teclado Gamer Cooler Master MasterKeys Pro L White",
        precio: 220000,
        imagen: "https://th.bing.com/th/id/OIP.f_I0Ld2Xc_PWcbfBZUUA7QHaHa?rs=1&pid=ImgDetMain",
        marca: "Cooler Master",
        categoria: "teclados-gamer",
        descripcion: "Teclado gamer mecánico con switches Cherry MX Red y diseño minimalista."
    },
      
    {
        id: 24,
        nombre: "Teclado Gamer MSI Vigor GK71 Slim",
        precio: 260000,
        imagen: "https://th.bing.com/th/id/OIP.eRy7EgTIeR3Qmsge2-MKPwHaHa?rs=1&pid=ImgDetMain",
        marca: "MSI",
        categoria: "teclados-gamer",
        descripcion: "Teclado gamer mecánico low profile con switches Kailh Box White y diseño compacto."
    },
      
    {
        id: 25,
        nombre: "Teclado Gamer Logitech G413 SE",
        precio: 180000,
        imagen: "https://th.bing.com/th/id/OIP.D0ETHW2uIbA2R-Wi1NqAiAHaHa?rs=1&pid=ImgDetMain",
        marca: "Logitech",
        categoria: "teclados-gamer",
        descripcion: "Teclado gamer con teclas Romer-G TÁCTILES y diseño minimalista."
    },

    {
        id: 26,
        nombre: "Mouse Gamer Logitech G502 Hero",
        precio: 150000,
        imagen: "https://falabella.scene7.com/is/image/Falabella/gsc_112633836_338795_1?wid=800&hei=800&qlt=70",
        marca: "Logitech",
        categoria: "mouses-gamer",
        descripcion: "Mouse gamer inalámbrico con sensor HERO de alta precisión y 11 botones programables."
    },
        
    {
        id: 27,
        nombre: "Mouse Gamer Razer DeathAdder V2 Pro",
        precio: 200000,
        imagen: "https://th.bing.com/th/id/OIP.vWktjVzw5QJS7KIws7Tk6QHaHa?rs=1&pid=ImgDetMain",
        marca: "Razer",
        categoria: "mouses-gamer",
        descripcion: "Mouse gamer inalámbrico ultraligero con switches ópticos y sensor Razer Focus+."
    },
        
    {
        id: 28,
        nombre: "Mouse Gamer SteelSeries Rival 5",
        precio: 180000,
        imagen: "https://th.bing.com/th/id/OIP.eAey88Xv07tCtGp5XMxrnwHaGk?rs=1&pid=ImgDetMain",
        marca: "SteelSeries",
        categoria: "mouses-gamer",
        descripcion: "Mouse gamer ambidiestro con switches ópticos y sensor TrueMove Air."
    },
        
    {
        id: 29,
        nombre: "Mouse Gamer Corsair M65 RGB Elite",
        precio: 160000,
        imagen: "https://th.bing.com/th/id/OIP.l94ju50aOAnazoO07WdvGwAAAA?rs=1&pid=ImgDetMain",
        marca: "Corsair",
        categoria: "mouses-gamer",
        descripcion: "Mouse gamer ergonómico con switches ópticos y sensor PixArt PMW3360."
    },
        
    {
        id: 30,
        nombre: "Mouse Gamer HyperX Pulsefire Surge",
        precio: 120000,
        imagen: "https://th.bing.com/th/id/R.360839d37743fe87bc5410243110d9fc?rik=OcTq48%2fTmcbBNg&riu=http%3a%2f%2fgearstudiokh.com%2fweb%2fimage%2fproduct.template%2f336%2fimage_1024%3funique%3d9249964&ehk=vrifCZ%2bOsiITx5cg5p3y%2balh5uNjALq6aMz%2f4JFSYug%3d&risl=&pid=ImgRaw&r=0",
        marca: "HyperX",
        categoria: "mouses-gamer",
        descripcion: "Mouse gamer ligero con switches Kailh TTC Red y sensor PixArt PMW3325."
    },
        
    {
        id: 31,
        nombre: "Mouse Gamer Logitech G Pro Wireless",
        precio: 230000,
        imagen: "https://th.bing.com/th/id/OIP.W2n7xNhOeyRvK_hsT7bQSwHaHa?rs=1&pid=ImgDetMain",
        marca: "Logitech",
        categoria: "mouses-gamer",
        descripcion: "Mouse gamer inalámbrico ultraligero con sensor HERO de alta precisión y switches Lightspeed."
    },
        
    {
        id: 32,
        nombre: "Mouse Gamer Razer Viper Mini Signature Edition",
        precio: 190000,
        imagen: "https://th.bing.com/th/id/OIP.vrALVYuCaZIBaPL7MwdDbwHaHa?rs=1&pid=ImgDetMain",
        marca: "Razer",
        categoria: "mouses-gamer",
        descripcion: "Mouse gamer inalámbrico ultraligero con switches ópticos y sensor Razer Focus+."
    },
        
    {
        id: 33,
        nombre: "Mouse Gamer SteelSeries Sensei Ten",
        precio: 140000,
        imagen: "https://media.ldlc.com/r1600/ld/products/00/05/47/62/LD0005476233_2.jpg",
        marca: "SteelSeries",
        categoria: "mouses-gamer",
        descripcion: "Mouse gamer ambidiestro con switches ópticos y sensor TrueMove Air."
    },
        
    {
        id: 34,
        nombre: "Mouse Gamer Corsair M65 RGB Elite - White",
        precio: 160000,
        imagen: "https://th.bing.com/th/id/OIP.oWpqQaf1ik0ijvzrV0pxlwHaGD?rs=1&pid=ImgDetMain",
        marca: "Corsair",
        categoria: "mouses-gamer",
        descripcion: "Mouse gamer ergonómico con switches ópticos y sensor PixArt PMW3360."
    },
        
    {
        id: 35,
        nombre: "Mouse Gamer HyperX Pulsefire Core",
        precio: 80000,
        imagen: "https://th.bing.com/th/id/OIP.ETc1TQ82dVGOJIPTNgcD-QHaHa?rs=1&pid=ImgDetMain",
        marca: "HyperX",categoria: "mouses-gamer",
        descripcion: "Mouse gamer con sensor PixArt 3327 y botones programables."
    },
          
    {
        id: 36,
        nombre: "Mouse Gamer Logitech G203 Lightsync",
        precio: 70000,
        imagen: "https://th.bing.com/th/id/OIP.9RRgMX0zgAxmsSl__-_tGwHaHt?rs=1&pid=ImgDetMain",
        marca: "Logitech",
        categoria: "mouses-gamer",
        descripcion: "Mouse gamer con sensor HERO de 8.000 DPI y tecnología Lightsync RGB."
    },
          
    {
        id: 37,
        nombre: "Mouse Gamer Razer DeathAdder Essential",
        precio: 100000,
        imagen: "https://th.bing.com/th/id/OIP.4OSYGrbhcBXopLhlbEoXVQAAAA?rs=1&pid=ImgDetMain",
        marca: "Razer",
        categoria: "mouses-gamer",
        descripcion: "Mouse gamer con sensor óptico de 6.400 DPI y switches Razer 5G."
    },
          
    {
        id: 38,
        nombre: "Mouse Gamer SteelSeries Rival 3 Wireless",
        precio: 130000,
        imagen: "https://th.bing.com/th/id/OIP.oH8gxvntpcB_TcFZw3eiqAHaEO?rs=1&pid=ImgDetMain",
        marca: "SteelSeries",
        categoria: "mouses-gamer",
        descripcion: "Mouse gamer inalámbrico con sensor TrueMove Air y batería de larga duración."
    },
          
    {
        id: 39,
        nombre: "Mouse Gamer Corsair Katar Pro XT",
        precio: 110000,
        imagen: "https://th.bing.com/th/id/OIP.417vBe4_UfWwtF6NLD5-HQHaFn?rs=1&pid=ImgDetMain",
        marca: "Corsair",
        categoria: "mouses-gamer",
        descripcion: "Mouse gamer ultraligero con switches Omron y sensor PixArt 3389."
    },
          
    {
        id: 40,
        nombre: "Mouse Gamer ASUS ROG Strix Impact II Wireless",
        precio: 170000,
        imagen: "https://th.bing.com/th/id/OIP.yCUn3y5LmaP9Y8dDlLQqMQHaFd?rs=1&pid=ImgDetMain",
        marca: "ASUS",
        categoria: "mouses-gamer",
        descripcion: "Mouse gamer inalámbrico con sensor óptico de 12.000 DPI y switches Omron."
    },

    {
        id: 41,
        nombre: "Monitor Gamer ASUS ROG Swift PG32UQXE",
        precio: 5500000,
        imagen: "https://th.bing.com/th/id/OIP.f2u7wN6Nu4C5683h9CtCpQAAAA?rs=1&pid=ImgDetMain",
        marca: "ASUS",
        categoria: "monitores-gamer",
        descripcion: "Monitor gamer de 32 pulgadas con resolución 4K UHD, panel Mini LED y frecuencia de actualización de 160Hz."
    },
            
    {
        id: 42,
        nombre: "Monitor Gamer Alienware AW2523HF",
        precio: 2800000,
        imagen: "https://elchapuzasinformatico.com/wp-content/uploads/2022/08/AW2523HF.jpg",
        marca: "Alienware",
        categoria: "monitores-gamer",
        descripcion: "Monitor gamer de 25 pulgadas con resolución Full HD, panel TN y frecuencia de actualización de 360Hz."
    },
            
    {
        id: 43,
        nombre: "Monitor Gamer Samsung Odyssey G9",
        precio: 5000000,
        imagen: "https://th.bing.com/th/id/OIP.JQFUBZr7yPJLVTSYE11zwQHaE7?rs=1&pid=ImgDetMain",
        marca: "Samsung",
        categoria: "monitores-gamer",
        descripcion: "Monitor gamer curvo de 49 pulgadas con resolución Super Ultrawide DQHD y frecuencia de actualización de 240Hz."
    },
            
    {
        id: 44,
        nombre: "Monitor Gamer LG UltraGear 38WN950-B",
        precio: 3500000,
        imagen: "https://th.bing.com/th/id/OIP.7Kw4hjjB5w_XX6Gd0PLT5wAAAA?rs=1&pid=ImgDetMain",
        marca: "LG",
        categoria: "monitores-gamer",
        descripcion: "Monitor gamer curvo de 38 pulgadas con resolución UltraWide QHD+ y frecuencia de actualización de 144Hz."
    },
            
    {
        id: 45,
        nombre: "Monitor Gamer MSI Optix MAG321CQR-V",
        precio: 2500000,
        imagen: "https://th.bing.com/th/id/OIP.PVpXOmpI_K228Zxnzhmw2AHaG5?rs=1&pid=ImgDetMain",
        marca: "MSI",
        categoria: "monitores-gamer",
        descripcion: "Monitor gamer curvo de 32 pulgadas con resolución WQHD y frecuencia de actualización de 165Hz."
    },
            
    {
        id: 46,
        nombre: "Monitor Gamer Gigabyte AORUS FI27Q-X",
        precio: 3000000,
        imagen: "https://th.bing.com/th/id/OIP.nW0SKb6E7cUNAN3z8esZEwHaHa?rs=1&pid=ImgDetMain",
        marca: "Gigabyte",
        categoria: "monitores-gamer",
        descripcion: "Monitor gamer de 27 pulgadas con resolución QHD y frecuencia de actualización de 165Hz."
    },
            
    {
        id: 47,
        nombre: "Monitor Gamer Acer Nitro XV272U KF",
        precio: 2200000,
        imagen: "https://th.bing.com/th/id/OIP.pfIH8d5oGMMuSeu1tZkPMwHaH_?rs=1&pid=ImgDetMain",
        marca: "Acer",
        categoria: "monitores-gamer",
        descripcion: "Monitor gamer de 27 pulgadas con resolución 4K UHD y frecuencia de actualización de 144Hz."
    },
            
    {
        id: 48,
        nombre: "Monitor Gamer HP Omen X27 250Q",
        precio: 2700000,
        imagen: "https://th.bing.com/th/id/OIP.adQsYXJmeGlzAnKtchsYDAAAAA?rs=1&pid=ImgDetMain",
        marca: "HP",
        categoria: "monitores-gamer",
        descripcion: "Monitor gamer de 27 pulgadas con resolución QHD y frecuencia de actualización de 240Hz."
    },
            
    {
        id: 49,
        nombre: "Monitor Gamer AOC AGON AG273QCX",
        precio: 2000000,
        imagen: "https://th.bing.com/th/id/OIP.t_C68_BJzwREXdOcXSf4SQHaHa?rs=1&pid=ImgDetMain",
        marca: "HP",
        categoria: "monitores-gamer",
        descripcion: "Monitor gamer curvo de 27 pulgadas con resolución QHD y frecuencia de actualización de 165Hz."
    },
              
    {
        id: 50,
        nombre: "Monitor Gamer BenQ Zowie XL2546K",
        precio: 3200000,
        imagen: "https://th.bing.com/th/id/OIP.oXqkIT6tfaDtoMxshCgLBQHaHa?rs=1&pid=ImgDetMain",
        marca: "BenQ",
        categoria: "monitores-gamer",
        descripcion: "Monitor gamer de 24.5 pulgadas con resolución Full HD y frecuencia de actualización de 240Hz."
    }
  ];
  
// const monitoresGamer = productos.filter(producto => producto.categoria === "monitores-gamer");
// console.log(monitoresGamer);

const botonBajar = document.getElementById('boton-bajar');

botonBajar.addEventListener('click', function() {
  const seccionObjetivo = document.getElementById('PRODUCTOS'); // ID de la sección a la que deseas desplazarte
  seccionObjetivo.scrollIntoView({ behavior: 'smooth' });
});

function mostrarProductos (productos) {
  const contenedorProductos = document.getElementById('contenedor-productos');
  contenedorProductos.innerHTML = '';
  productos.forEach(producto => {
    const divProducto = document.createElement('div');
    divProducto.classList.add('producto');
    divProducto.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}" />
      <h3>${producto.nombre}</h3>
      <p>${producto.marca}</p>
      <p>${producto.descripcion}</p>
      <p>$${producto.precio}</p>
    `;
    contenedorProductos.appendChild(divProducto);
  });
}
const botonMenu = document.querySelector('.boton-menu');
const opcionesMenu = document.querySelector('.opciones-menu');

