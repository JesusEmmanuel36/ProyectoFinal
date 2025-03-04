//localStorage.clear()
const playeras = [];
 

function carritoActual(){
  window.addEventListener("storage", (event) => {
    if (event.key === "NumCarrito") {
        console.log(event.newValue)

        if (Number(event.newValue) === 0){
          document.getElementById("NumeroCarrito").textContent = ""
          document.getElementById("Carrito").src = "carrito.png"
        }else{
          document.getElementById("NumeroCarrito").textContent = event.newValue
        }
        
    }
});
}

  
//}

window.onload = carritoActual
 

CarritoNum = localStorage.getItem("NumCarrito");

botonCarrito = document.getElementById("CarritoHolder")

botonCarrito.addEventListener("mousedown", function () {
  console.log("presionado")
  window.location.href = "/carrito";
})

if (CarritoNum) {
  if(Number(CarritoNum)  !== 0){
    let Carrito = document.getElementById("Carrito");
    Carrito.src = "carrito_bola.png";
  
    let NumeroCarrito = document.getElementById("NumeroCarrito");
    NumeroCarrito.textContent = Number(CarritoNum);
  }
}

let pantallaPequena = window.matchMedia("(max-width: 800px)").matches; // Estado inicial

function esEntero(num) {
  return num === Math.floor(num);
}

function aplicarInicio() {
  let esPantallaPequena = window.matchMedia("(max-width: 800px)").matches;
  if (esPantallaPequena) {
    numplayeras = playeras.length;
    divisible = numplayeras / 2;

    console.log(numplayeras);

      let secciones = Number(divisible);
      console.log(secciones);

      // Para asegurarnos de que todas las playeras se distribuyan bien
      let playeraIndex = 0; // Índice para recorrer las playeras

      for (let i = 0; i < secciones; i++) {
        let PlayerasHolder = document.getElementById("PlayerasHolder");
        let SeccionNueva = document.createElement("div");
        SeccionNueva.classList.add("Holder3playeras");
        PlayerasHolder.appendChild(SeccionNueva);

        // Aseguramos que cada sección reciba 2 playeras
        for (let i2 = 0; i2 < 2; i2++) {
          if (playeraIndex < playeras.length) {
            let playeraAmover = playeras[playeraIndex];
            SeccionNueva.appendChild(playeraAmover);
            playeraIndex++; // Avanzamos al siguiente índice
          }
        }
      }

  }
}

function aplicarEstilos() {
  let esPantallaPequena = window.matchMedia("(max-width: 800px)").matches;

  if (esPantallaPequena !== pantallaPequena) {
    let estado = esPantallaPequena
    console.log(estado);
    pantallaPequena = esPantallaPequena; // Actualizamos el estado
  }

  if(esPantallaPequena == true){
    numplayeras = playeras.length;
    divisible = numplayeras / 2;

    console.log(numplayeras);

      let secciones = Number(divisible);
      console.log(secciones);

      // Para asegurarnos de que todas las playeras se distribuyan bien
      let playeraIndex = 0; // Índice para recorrer las playeras

      for (let i = 0; i < secciones; i++) {
        let PlayerasHolder = document.getElementById("PlayerasHolder");
        let SeccionNueva = document.createElement("div");
        SeccionNueva.classList.add("Holder3playeras");
        PlayerasHolder.appendChild(SeccionNueva);

        // Aseguramos que cada sección reciba 2 playeras
        for (let i2 = 0; i2 < 2; i2++) {
          if (playeraIndex < playeras.length) {
            let playeraAmover = playeras[playeraIndex];
            SeccionNueva.appendChild(playeraAmover);
            playeraIndex++; // Avanzamos al siguiente índice
          }
        }
      }
  }else{
    numplayeras = playeras.length;
    divisible = numplayeras / 2;

    console.log(numplayeras);

      let secciones = Number(divisible);
      console.log(secciones);

      // Para asegurarnos de que todas las playeras se distribuyan bien
      let playeraIndex = 0; // Índice para recorrer las playeras

      for (let i = 0; i < secciones; i++) {
        let PlayerasHolder = document.getElementById("PlayerasHolder");
        let SeccionNueva = document.createElement("div");
        SeccionNueva.classList.add("Holder3playeras");
        PlayerasHolder.appendChild(SeccionNueva);

        // Aseguramos que cada sección reciba 2 playeras
        for (let i2 = 0; i2 < 4; i2++) {
          if (playeraIndex < playeras.length) {
            let playeraAmover = playeras[playeraIndex];
            SeccionNueva.appendChild(playeraAmover);
            playeraIndex++; // Avanzamos al siguiente índice
          }
        }
      }
  }

  document.querySelectorAll(".HolderInfo h3").forEach(elemento => {
    elemento.style.fontSize = esPantallaPequena ? "14px" : "16px";
  });

  document.querySelectorAll(".Playeras .Holder3playeras .HolderPlayera .BotonS").forEach(elemento => {
    elemento.style.fontSize = esPantallaPequena ? "14px" : "16px";
  });

  document.querySelectorAll(".Playeras .Holder3playeras .HolderPlayera .BotonM").forEach(elemento => {
    elemento.style.fontSize = esPantallaPequena ? "14px" : "16px";
  });

  document.querySelectorAll(".Playeras .Holder3playeras .HolderPlayera .BotonL").forEach(elemento => {
    elemento.style.fontSize = esPantallaPequena ? "14px" : "16px";
  });

  document.querySelectorAll(".Playeras .Holder3playeras .HolderPlayera .BotonXL").forEach(elemento => {
    elemento.style.fontSize = esPantallaPequena ? "14px" : "16px";
  });

  
}

// Ejecutar al cargar la página
window.addEventListener("resize", aplicarEstilos);

// Función para agregar una playera
AñadirPlayera = function (nombre, precio, espalda, frente) {
  let Talla = ""


  let Playeras = document.getElementById("Holder3playeras");
  let HolderPlayera = document.createElement("div");
  HolderPlayera.classList.add("HolderPlayera");

  let HolderInfo = document.createElement("div");
  HolderInfo.classList.add("HolderInfo");

  let Nombre = document.createElement("h3");
  Nombre.classList.add("Nombre");
  Nombre.textContent = nombre;

  let Precio = document.createElement("h3");
  Precio.classList.add("Precio");
  Precio.textContent = precio;

  let Boton = document.createElement("button");
  Boton.classList.add("BotonBolsita");

  let Icono = document.createElement("img");
  Icono.classList.add("Icono");
  Icono.src = "bolsita.png";

  let divTamaño = document.createElement("div");
  divTamaño.classList.add("divTamaño")

  let BotonS = document.createElement("button")
  BotonS.classList.add("BotonS")
  BotonS.textContent = "S"

  let BotonM = document.createElement("button")
  BotonM.classList.add("BotonM")
  BotonM.textContent = "M"

  let BotonL = document.createElement("button")
  BotonL.classList.add("BotonL")
  BotonL.textContent = "L"

  let BotonXL = document.createElement("button")
  BotonXL.classList.add("BotonXL")
  BotonXL.textContent = "XL"

  BotonS.addEventListener("mousedown", function(){
    BotonM.style.fontWeight = "lighter";
    BotonL.style.fontWeight = "lighter";
    BotonXL.style.fontWeight = "lighter";
    BotonS.style.fontWeight = "bold";
    Talla = "S"
  })

  BotonM.addEventListener("mousedown", function(){
    BotonS.style.fontWeight = "lighter";
    BotonL.style.fontWeight = "lighter";
    BotonXL.style.fontWeight = "lighter";
    BotonM.style.fontWeight = "bold";
    Talla = "M"
  })

  BotonL.addEventListener("mousedown", function(){
    BotonS.style.fontWeight = "lighter";
    BotonM.style.fontWeight = "lighter";
    BotonXL.style.fontWeight = "lighter";
    BotonL.style.fontWeight = "bold";
    Talla = "L"
  })

  BotonXL.addEventListener("mousedown", function(){
    BotonS.style.fontWeight = "lighter";
    BotonM.style.fontWeight = "lighter";
    BotonXL.style.fontWeight = "bold";
    BotonL.style.fontWeight = "lighter";
    Talla = "XL"
  })

  divTamaño.appendChild(BotonS)
  divTamaño.appendChild(BotonM)
  divTamaño.appendChild(BotonL)
  divTamaño.appendChild(BotonXL)

  Boton.appendChild(Icono);
  HolderInfo.appendChild(Nombre);
  HolderInfo.appendChild(Precio);
  HolderInfo.appendChild(Boton);

  let Playera = document.createElement("img");
  Playera.classList.add("ImagenPlayera");
  Playera.src = espalda;

  Playera.addEventListener("mouseover", function () {
    this.src = frente;
  });

  Playera.addEventListener("mouseout", function () {
    this.src = espalda;
  });

  HolderPlayera.appendChild(HolderInfo);
  HolderPlayera.appendChild(divTamaño)
  HolderPlayera.appendChild(Playera);
  playeras.push(HolderPlayera);
  Playeras.appendChild(HolderPlayera);

  aplicarEstilos(); // 🔥 Aplicar estilos después de agregar una playera

  Boton.addEventListener("mousedown", function () {

    //const carritoLocal = JSON.parse(localStorage.getItem("Carrito"))
    const carrito = JSON.parse(localStorage.getItem("Carrito")) || [];

    //console.log(carritoLocal)

    let NumCarrito = localStorage.getItem("NumCarrito");
    if (!NumCarrito) {

      if(Talla === ""){
 


        ErrorHolder = document.getElementById("ErrorHolder")


        

        divError = document.createElement("div")
        divError.classList.add("FrameError")
        imgError = document.createElement("img")
        imgError.classList.add("errorImg")
        imgError.src = "ERROR.png"
        Mensaje = document.createElement("h3")
        Mensaje.textContent = "Error: Selecciona tu talla"
        imgCruz = document.createElement("imgCruz")
        imgCruz.classList.add("Cruz")
        imgCruz.src = "CRUZ.png"

        divError.style.display = "relative"
        
        divError.appendChild(imgError)
        divError.appendChild(Mensaje)
        divError.appendChild(imgCruz)

        ErrorHolder.appendChild(divError)

        setTimeout(function() {
          let existingError = document.querySelector(".FrameError");
          if (existingError) {
            existingError.remove();
          }
        }, 2000);  
      }else{

        ErrorHolder = document.getElementById("ErrorHolder")


        divAgregado = document.createElement("div")
        divAgregado.classList.add("FrameAgregado")
        imgAgregado = document.createElement("img")
        imgAgregado.classList.add("agregadoImg")
        imgAgregado.src = "check.png"
        Mensaje = document.createElement("h3")
        Mensaje.textContent = "Agregado al carrito"

        divAgregado.style.display = "flex"
        
        divAgregado.appendChild(imgAgregado)
        divAgregado.appendChild(Mensaje)

        ErrorHolder.appendChild(divAgregado)

        setTimeout(function() {
          let existingAgg = document.querySelector(".FrameAgregado");
          if (existingAgg) {
            existingAgg.remove();
          }
        }, 2000);  

        const producto = carrito.find(item => item.nombre === nombre && item.talla === Talla);

        if (producto) {
          producto.cantidad += 1;
        } else {
          carrito.push({nombre: nombre, precio: precio, talla: Talla, cantidad: 1, imagen: espalda});
        }

        localStorage.setItem("Carrito", JSON.stringify(carrito))
        
        console.log(JSON.parse(localStorage.getItem("Carrito")))
 

         

        localStorage.setItem("NumCarrito", 1);
        document.getElementById("Carrito").src = "carrito_bola.png";
        document.getElementById("NumeroCarrito").textContent = 1;
      }
 
 

      // api aqui
 
    } else {
      // api aqui

      if(Talla === ""){
 

        ErrorHolder = document.getElementById("ErrorHolder")


        divError = document.createElement("div")
        divError.classList.add("FrameError")
        imgError = document.createElement("img")
        imgError.classList.add("errorImg")
        imgError.src = "ERROR.png"
        Mensaje = document.createElement("h3")
        Mensaje.textContent = "Error: Selecciona tu talla"
        imgCruz = document.createElement("imgCruz")
        imgCruz.classList.add("Cruz")
        imgCruz.src = "CRUZ.png"

        divError.style.display = "flex"
        
        divError.appendChild(imgError)
        divError.appendChild(Mensaje)
        divError.appendChild(imgCruz)

        ErrorHolder.appendChild(divError)

        setTimeout(function() {
          let existingError = document.querySelector(".FrameError");
          if (existingError) {
            existingError.remove();
          }
        }, 2000);  
      }else{


        ErrorHolder = document.getElementById("ErrorHolder")


        divAgregado = document.createElement("div")
        divAgregado.classList.add("FrameAgregado")
        imgAgregado = document.createElement("img")
        imgAgregado.classList.add("agregadoImg")
        imgAgregado.src = "check.png"
        Mensaje = document.createElement("h3")
        Mensaje.textContent = "Agregado al carrito"

        divAgregado.style.display = "flex"
        
        divAgregado.appendChild(imgAgregado)
        divAgregado.appendChild(Mensaje)

        ErrorHolder.appendChild(divAgregado)

        setTimeout(function() {
          let existingAgg = document.querySelector(".FrameAgregado");
          if (existingAgg) {
            existingAgg.remove();
          }
        }, 2000);  

        const producto = carrito.find(item => item.nombre === nombre && item.talla === Talla);

        if (producto) {
          producto.cantidad += 1;
        } else {
          carrito.push({nombre: nombre, precio: precio, talla: Talla, cantidad: 1, imagen: espalda});
        }
        
        localStorage.setItem("Carrito", JSON.stringify(carrito))
        
        console.log(JSON.parse(localStorage.getItem("Carrito")))

        let NuevoCarritoNum = Number(NumCarrito) + 1;
        document.getElementById("Carrito").src = "carrito_bola.png";
        localStorage.setItem("NumCarrito", NuevoCarritoNum);
        document.getElementById("NumeroCarrito").textContent = NuevoCarritoNum;
      }
    }
  });
};

// Agregar playeras
AñadirPlayera("FERRARI RACING", "$500", "ferrv-3731a432ef5bf9448b17300220912559-1024-1024.webp", "ferrvf-4514b920a9a8fc7ae617300220906766-1024-1024.webp");
AñadirPlayera("MOTOR SPORT", "$500", "white-back-cb6ea57eaebb8c383217283803264994-1024-1024.webp", "white-front-c0781917adc656079917283803290261-1024-1024.webp");
AñadirPlayera("MCLAREN F1", "$500", "mc2-349727e1c45142e99517300232886802-1024-1024.webp", "mc23f-bd9a3e68b4c843f8e517300232820694-1024-1024.webp");
AñadirPlayera("MERCEDES F1", "$500", "mercdes-832adf5180ddad05d317300220409930-1024-1024.webp", "mercedf-3aeb16d6e3babe8e4917300220398676-1024-1024.webp");
AñadirPlayera("FERRARI RACING", "$500", "ferrv-3731a432ef5bf9448b17300220912559-1024-1024.webp", "ferrvf-4514b920a9a8fc7ae617300220906766-1024-1024.webp");
AñadirPlayera("MOTOR SPORT", "$500", "white-back-cb6ea57eaebb8c383217283803264994-1024-1024.webp", "white-front-c0781917adc656079917283803290261-1024-1024.webp");
AñadirPlayera("MCLAREN F1", "$500", "mc2-349727e1c45142e99517300232886802-1024-1024.webp", "mc23f-bd9a3e68b4c843f8e517300232820694-1024-1024.webp");
AñadirPlayera("MERCEDES F1", "$500", "mercdes-832adf5180ddad05d317300220409930-1024-1024.webp", "mercedf-3aeb16d6e3babe8e4917300220398676-1024-1024.webp");

aplicarInicio();
