let cantidadPlayeras = 0
 
 
function añadirPlayera(nombre, talla, cantidad, precio, imagenPlayera) {
    // Obtener el contenedor del carrito
    const holderCarrito = document.getElementById("HolderCarrito");
  
    // Crear el div contenedor principal
    const holderProducto = document.createElement("div");
    holderProducto.classList.add("HolderProducto");
  
    // Crear la imagen de la playera
    const imgPlayera = document.createElement("img");
    imgPlayera.classList.add("PlayeraIcono");
    imgPlayera.src = imagenPlayera;
    imgPlayera.alt = nombre;
  
    // Crear el contenedor del nombre y la talla
    const holderNombreYTalla = document.createElement("div");
    holderNombreYTalla.classList.add("HolderNombreYTalla");
  
    // Crear el nombre de la playera
    const nombrePlayera = document.createElement("h3");
    nombrePlayera.classList.add("NombrePlayera");
    nombrePlayera.textContent = nombre;
  
    // Crear la talla de la playera
    const tallaPlayera = document.createElement("h3");
    tallaPlayera.classList.add("TallaPlayera");
    tallaPlayera.textContent = `Talla: ${talla}`;
  
    // Agregar los elementos de nombre y talla al contenedor
    holderNombreYTalla.appendChild(nombrePlayera);
    holderNombreYTalla.appendChild(tallaPlayera);
  
    // Crear el contenedor de cantidad, precio y cerrar
    const holderCPC = document.createElement("div");
    holderCPC.classList.add("HolderC_P_C");
  
    // Crear la cantidad
    const cantidadElem = document.createElement("h3");
    cantidadElem.classList.add("Cantidad");
    cantidadElem.textContent = cantidad;
  
    // Crear el precio
    const precioElem = document.createElement("h3");
    precioElem.classList.add("Precio");
    precioElem.textContent = `${precio}`;
  
    // Crear el contenedor de la imagen de cerrar
    const holderCerrar = document.createElement("button");
    holderCerrar.classList.add("HolderCerrar");
    holderCerrar.id = "HolderCerrar"
  
    // Crear la imagen de cerrar
    const imgCerrar = document.createElement("img");
    imgCerrar.id = "ImgCerrar"
    imgCerrar.src = "circuloCerrar.png";
    imgCerrar.alt = "Eliminar";
  
    // Agregar la imagen de cerrar al contenedor
    holderCerrar.appendChild(imgCerrar);
  
    // Agregar cantidad, precio y cerrar al contenedor
    holderCPC.appendChild(cantidadElem);
    holderCPC.appendChild(precioElem);
    holderCPC.appendChild(holderCerrar);
  
    // Agregar todos los elementos al div principal
    holderProducto.appendChild(imgPlayera);
    holderProducto.appendChild(holderNombreYTalla);
    holderProducto.appendChild(holderCPC);
  
    // Agregar el contenedor al carrito
    holderCarrito.appendChild(holderProducto);
    
    return holderProducto
  }

  function cargarCarrito() {  
    const carrito = JSON.parse(localStorage.getItem("Carrito"));  
    console.log("CARRITO ACTUAL:")
    console.log(carrito)
    let cantidadPlayeras = 0; // Asegúrate de inicializar la variable  

    for (let i = 0; i < carrito.length; i++) {  
        cantidadPlayeras += 1;  
        const producto = carrito[i];  
        console.log(producto.nombre);  
        const holderPlayera = añadirPlayera(producto.nombre, producto.talla, producto.cantidad, producto.precio, producto.imagen);  

        let descripcion = document.getElementById("DescCarrito");  
        descripcion.textContent = "Tienes " + cantidadPlayeras + " producto(s) en el carrito";  

        const PlayeraHolder = document.getElementById("HolderCarrito")
        const botonEliminar = holderPlayera.querySelector("#HolderCerrar");  
        botonEliminar.addEventListener("mousedown", function() {  
            cantidadPlayeras -=1
            carrito[i] = undefined;  // Marcamos el producto como undefined  
            PlayeraHolder.removeChild(holderPlayera)
            descripcion.textContent = "Tienes " + cantidadPlayeras + " producto(s) en el carrito"; 
            const carritoActualizado = carrito.filter(item => item !== undefined);  

             

            localStorage.setItem("Carrito", JSON.stringify(carritoActualizado))
            
            console.log(carritoActualizado)
            
            //localStorage.setItem("Carrito", JSON.stringify(carritoActualizado)); // Guardamos el carrito actualizado 

            //console.log(JSON.parse(localStorage.getItem("Carrito"))); // Verifica el carrito actualizado  

            // También puedes actualizar la interfaz de usuario aquí si es necesario  
        });  
    }  
}  

  window.onload = cargarCarrito

  