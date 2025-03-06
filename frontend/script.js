//localStorage.clear();
const playeras = [];

let SesionIniciada = localStorage.getItem("SesionIniciada");

if (!SesionIniciada) {
  localStorage.setItem("SesionIniciada", false);
}

SesionIniciada = localStorage.getItem("SesionIniciada");

if (SesionIniciada == "true") {
  botonIniciarSesion = document.getElementById("BotonLoginSignup");
  botonIniciarSesion.textContent = "Cerrar Sesión";

  console.log(
    "SESION INICIADA, CARGANDO CARRITO, USERID: " +
      localStorage.getItem("UserId"),
  );
}

function getCarrito(userid, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "/api/carrito/ver-carrito", true); // "true" hace que la petición sea asincrónica

  xhr.setRequestHeader("Content-Type", "application/json");

  // Evento que se ejecuta cuando la respuesta llega
  xhr.onload = function () {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      callback(data.carrito); // Llamar al callback con el carrito
    } else {
      console.error("Error al obtener el carrito:", xhr.statusText);
    }
  };

  xhr.onerror = function () {
    console.error("Error de red");
  };

  // Enviar la solicitud
  xhr.send(JSON.stringify({ userid }));
}

async function mandarCarrito(userid, carrito) {
  try {
    const response = await fetch("/api/carrito/agregar-producto", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userid, carrito }),
    });

    const data = await response.json();
    if (response.ok) {
      console.log(data.message);
    } else {
      console.error(data.message);
    }
  } catch (error) {
    console.error(error);
  }
}

function carritoActual() {
  //console.log("EJECUCION AL RECARGAR AQUI");
  window.addEventListener("storage", (event) => {
    console.log("e");
    if (event.key === "NumCarrito") {
      /// API AQUI CARRITO
      console.log(event.newValue);

      if (Number(event.newValue) === 0) {
        document.getElementById("NumeroCarrito").textContent = "";
        document.getElementById("Carrito").src = "carrito.png";
      } else {
        document.getElementById("NumeroCarrito").textContent = event.newValue;
      }
    }
  });
}

async function mandarUnidades(userid, unidades) {
  try {
    const response = await fetch("/api/unidades/agregar-unidades", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userid, unidades }),
    });

    const data = await response.json();
    if (response.ok) {
      console.log(data.message);
    } else {
      console.error(data.message);
    }
  } catch (error) {
    console.error(error);
  }
}

function getUnidades(userid, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "/api/unidades/get-unidades", true);

  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onload = function () {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      callback(data.unidades);
    } else {
      console.error("Error al obtener el carrito:", xhr.statusText);
    }
  };

  xhr.onerror = function () {
    console.error("Error de red");
  };

  // Enviar la solicitud
  xhr.send(JSON.stringify({ userid }));
}

window.addEventListener("pageshow", function (event) {
  let SesionIniciadaa = localStorage.getItem("SesionIniciada");

  if (SesionIniciadaa === "true" && UserId) {
    //mandarUnidades(UserId, 3);

    getUnidades(UserId, function (unidades) {
      console.log("SE RECIBIERON LAS UNIDADES: " + unidades);

      if (Number(unidades) === 0) {
        document.getElementById("NumeroCarrito").textContent = "";
        document.getElementById("Carrito").src = "carrito.png";
      } else {
        let Carrito = document.getElementById("Carrito");
        Carrito.src = "carrito_bola.png";

        document.getElementById("NumeroCarrito").textContent = Number(unidades);
      }
    });

    console.log("PAGINA REFRESCADA, CARGANDO CARRITO");
  }
});

//let carritoAnterior = localStorage.getItem("Carrito")

//let carritoAnterior = localStorage.getItem("CarritoAnterior")

function mensaje(texto) {
  ErrorHolder = document.getElementById("ErrorHolder");
  ErrorHolder.style.zIndex = 1100;
  divAgregado = document.createElement("div");
  divAgregado.classList.add("FrameAgregado");
  imgAgregado = document.createElement("img");
  imgAgregado.classList.add("agregadoImg");
  imgAgregado.src = "check.png";
  Mensaje = document.createElement("h3");
  Mensaje.textContent = texto;

  divAgregado.style.display = "flex";

  divAgregado.appendChild(imgAgregado);
  divAgregado.appendChild(Mensaje);

  ErrorHolder.appendChild(divAgregado);

  setTimeout(function () {
    let existingAgg = document.querySelector(".FrameAgregado");
    if (existingAgg) {
      existingAgg.remove();
    }
  }, 2000);
}

function error(texto) {
  ErrorHolder = document.getElementById("ErrorHolder");
  ErrorHolder.style.zIndex = 1100;
  divError = document.createElement("div");
  divError.classList.add("FrameError");
  imgError = document.createElement("img");
  imgError.classList.add("errorImg");
  imgError.src = "ERROR.png";
  Mensaje = document.createElement("h3");
  Mensaje.textContent = texto;
  imgCruz = document.createElement("imgCruz");
  imgCruz.classList.add("Cruz");
  imgCruz.src = "CRUZ.png";

  divError.style.display = "relative";

  divError.appendChild(imgError);
  divError.appendChild(Mensaje);
  divError.appendChild(imgCruz);

  ErrorHolder.appendChild(divError);

  setTimeout(function () {
    let existingError = document.querySelector(".FrameError");
    if (existingError) {
      existingError.remove();
    }
  }, 2000);
}

//}

//window.onload = carritoActual;

//getCarrito();

let UserId = localStorage.getItem("UserId");
getUnidades(UserId, function (unidades) {});

//CarritoNum = localStorage.getItem("NumCarrito"); // AQUI API CARRITONUM
//console.log("CARRITO NUMMM: " + CarritoNum);

botonIniciarSesion = document.getElementById("BotonLoginSignup");
botonCarrito = document.getElementById("CarritoHolder");

botonIniciarSesion.addEventListener("click", function () {
  let SesionIniciadaa = localStorage.getItem("SesionIniciada");

  if (SesionIniciadaa === "true") {
    botonIniciarSesion.textContent = "Iniciar Sesión";
    localStorage.setItem("SesionIniciada", false);
    localStorage.removeItem("UserId");
    console.log("SESION CERRADA, YA NO HAY USERID");

    location.reload();
  } else {
    sessionStorage.setItem("SignInSignUp", "SIGNIN");

    frameObscuro = document.getElementById("FrameTraseroLogin");
    frameObscuro.style.display = "flex";

    frameLogin = document.getElementById("LoginHolder");
    frameLogin.style.display = "flex";
  }
});

botonCarrito.addEventListener("mousedown", function () {
  let SesionIniciadaa = localStorage.getItem("SesionIniciada");

  if (SesionIniciadaa === "true") {
    console.log("presionado");
    window.location.href = "/carrito";
  } else {
    console.log(SesionIniciadaa);

    console.log("INICIA SESION PARA CONTINUAR");

    sessionStorage.setItem("SignInSignUp", "SIGNIN");

    frameObscuro = document.getElementById("FrameTraseroLogin");
    frameObscuro.style.display = "flex";

    frameLogin = document.getElementById("LoginHolder");
    frameLogin.style.display = "flex";
  }
});

frameLogin = document.getElementById("LoginHolder");
botonEntrar = frameLogin.querySelector("#BotonEntrar");
botonCrearcuenta = frameLogin.querySelector("#BotonCrearCuenta");
botonCrearcuenta.addEventListener("mousedown", function () {
  let Status = sessionStorage.getItem("SignInSignUp");
  if (Status === "SIGNIN") {
    TextoStatus = frameLogin.querySelector("h3");
    TextoStatus.textContent = "Crear Cuenta";
    botonCrearcuenta.textContent = "Iniciar Sesión";

    let email = frameLogin.querySelector(".TextboxEmail");
    let contra = frameLogin.querySelector(".TextboxPassword");

    email.value = "";
    contra.value = "";

    sessionStorage.setItem("SignInSignUp", "SIGNUP");
  } else {
    TextoStatus = frameLogin.querySelector("h3");
    TextoStatus.textContent = "Iniciar Sesión";
    botonCrearcuenta.textContent = "Crear Cuenta";

    let email = frameLogin.querySelector(".TextboxEmail");
    let contra = frameLogin.querySelector(".TextboxPassword");

    email.value = "";
    contra.value = "";

    sessionStorage.setItem("SignInSignUp", "SIGNIN");
  }
  //console.log("CREANDO CUENTA")
  console.log(sessionStorage.getItem("SignInSignUp"));
});

botonEntrar.addEventListener("mousedown", async function () {
  let Status = sessionStorage.getItem("SignInSignUp");
  let email = frameLogin.querySelector(".TextboxEmail"); // Cambia '#' por '.'
  let contra = frameLogin.querySelector(".TextboxPassword"); // Cambia '#' por '.'

  if (Status === "SIGNIN") {
    if (email.value !== "") {
      if (email.value.includes("@")) {
        if (contra.value !== "") {
          // AQUI CODIGO API SIGNIN

          correo = email.value;
          contraseña = contra.value;

          try {
            const response = await fetch("/api/users/login", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ correo, contraseña }),
            });

            const data = await response.json();
            if (response.ok) {
              email.value = "";
              contra.value = "";

              frameObscuro = document.getElementById("FrameTraseroLogin");
              frameObscuro.style.display = "none";

              frameLogin = document.getElementById("LoginHolder");
              frameLogin.style.display = "none";

              botonIniciarSesion = document.getElementById("BotonLoginSignup");
              botonIniciarSesion.textContent = "Cerrar Sesión";

              localStorage.setItem("SesionIniciada", true);
              localStorage.setItem("UserId", data.userId);

              console.log(localStorage.getItem("UserId"));
              console.log(localStorage.getItem("SesionIniciada"));

              /// AQUIIII

              location.reload();
              mensaje("Iniciaste Sesión!");
            } else {
              error("Usuario/Contraseña incorrecta");
            }
          } catch (error) {
            console.error("Error en el registro:", error);
          }
        } else {
          error("Error: Ingresa Contraseña");
        }
      } else {
        error("Error: Ese no es un correo");
      }
    } else {
      error("Error: Ingresa un correo");
    }
  } else {
    // AQUI SIGNUP
    if (email.value !== "") {
      if (email.value.includes("@")) {
        if (contra.value !== "") {
          correo = email.value;
          contraseña = contra.value;

          try {
            const response = await fetch("/api/users/signup", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ correo, contraseña }),
            });

            const data = await response.json();
            if (response.ok) {
              //console.log("CREANDO CUENTA: " + email.value + ", " + contra.value);
              email.value = "";
              contra.value = "";

              TextoStatus = frameLogin.querySelector("h3");
              TextoStatus.textContent = "Iniciar Sesión";
              botonCrearcuenta.textContent = "Crear Cuenta";

              sessionStorage.setItem("SignInSignUp", "SIGNIN");

              /// AQUIIII
              mensaje("Cuenta creada");
              console.log("ok");
            } else {
              console.log(data.message);
              error(data.message);
            }
          } catch (error) {
            console.error("Error en el registro:", error);
          }
        } else {
          error("Error: Contraseña no valida");
        }
      } else {
        error("Error: Ese no es un correo");
      }
    } else {
      error("Error: Correo no valido");
    }
  }
});

/*
if (CarritoNum) {
  if (Number(CarritoNum) !== 0) {
    let Carrito = document.getElementById("Carrito");
    Carrito.src = "carrito_bola.png";

    let NumeroCarrito = document.getElementById("NumeroCarrito");
    NumeroCarrito.textContent = Number(CarritoNum);
  } else {
    console.log("e");
  }
}
*/

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
    let estado = esPantallaPequena;
    console.log(estado);
    pantallaPequena = esPantallaPequena; // Actualizamos el estado
  }

  if (esPantallaPequena == true) {
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
  } else {
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

  document.querySelectorAll(".HolderInfo h3").forEach((elemento) => {
    elemento.style.fontSize = esPantallaPequena ? "14px" : "16px";
  });

  document
    .querySelectorAll(".Playeras .Holder3playeras .HolderPlayera .BotonS")
    .forEach((elemento) => {
      elemento.style.fontSize = esPantallaPequena ? "14px" : "16px";
    });

  document
    .querySelectorAll(".Playeras .Holder3playeras .HolderPlayera .BotonM")
    .forEach((elemento) => {
      elemento.style.fontSize = esPantallaPequena ? "14px" : "16px";
    });

  document
    .querySelectorAll(".Playeras .Holder3playeras .HolderPlayera .BotonL")
    .forEach((elemento) => {
      elemento.style.fontSize = esPantallaPequena ? "14px" : "16px";
    });

  document
    .querySelectorAll(".Playeras .Holder3playeras .HolderPlayera .BotonXL")
    .forEach((elemento) => {
      elemento.style.fontSize = esPantallaPequena ? "14px" : "16px";
    });
}

// Ejecutar al cargar la página
window.addEventListener("resize", aplicarEstilos);

// Función para agregar una playera
AñadirPlayera = function (nombre, precio, espalda, frente) {
  let Talla = "";

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
  divTamaño.classList.add("divTamaño");

  let BotonS = document.createElement("button");
  BotonS.classList.add("BotonS");
  BotonS.textContent = "S";

  let BotonM = document.createElement("button");
  BotonM.classList.add("BotonM");
  BotonM.textContent = "M";

  let BotonL = document.createElement("button");
  BotonL.classList.add("BotonL");
  BotonL.textContent = "L";

  let BotonXL = document.createElement("button");
  BotonXL.classList.add("BotonXL");
  BotonXL.textContent = "XL";

  BotonS.addEventListener("mousedown", function () {
    BotonM.style.fontWeight = "lighter";
    BotonL.style.fontWeight = "lighter";
    BotonXL.style.fontWeight = "lighter";
    BotonS.style.fontWeight = "bold";
    Talla = "S";
  });

  BotonM.addEventListener("mousedown", function () {
    BotonS.style.fontWeight = "lighter";
    BotonL.style.fontWeight = "lighter";
    BotonXL.style.fontWeight = "lighter";
    BotonM.style.fontWeight = "bold";
    Talla = "M";
  });

  BotonL.addEventListener("mousedown", function () {
    BotonS.style.fontWeight = "lighter";
    BotonM.style.fontWeight = "lighter";
    BotonXL.style.fontWeight = "lighter";
    BotonL.style.fontWeight = "bold";
    Talla = "L";
  });

  BotonXL.addEventListener("mousedown", function () {
    BotonS.style.fontWeight = "lighter";
    BotonM.style.fontWeight = "lighter";
    BotonXL.style.fontWeight = "bold";
    BotonL.style.fontWeight = "lighter";
    Talla = "XL";
  });

  divTamaño.appendChild(BotonS);
  divTamaño.appendChild(BotonM);
  divTamaño.appendChild(BotonL);
  divTamaño.appendChild(BotonXL);

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
  HolderPlayera.appendChild(divTamaño);
  HolderPlayera.appendChild(Playera);
  playeras.push(HolderPlayera);
  Playeras.appendChild(HolderPlayera);

  aplicarEstilos(); // 🔥 Aplicar estilos después de agregar una playera

  Boton.addEventListener("mousedown", async function () {
    let sesionIniciadaa = localStorage.getItem("SesionIniciada");
    console.log(sesionIniciadaa);

    if (sesionIniciadaa !== "true") {
      frameObscuro = document.getElementById("FrameTraseroLogin");
      frameObscuro.style.display = "flex";

      frameLogin = document.getElementById("LoginHolder");
      frameLogin.style.display = "flex";

      return;
    }

    //const carritoLocal = JSON.parse(localStorage.getItem("Carrito"))
    //const carrito = JSON.parse(localStorage.getItem("Carrito")) || [];

    console.log("CARRIT AQUI");

    let userId = localStorage.getItem("UserId");

    getCarrito(userId, function (carrito) {
      console.log("Carrito recibido:", carrito); // ✅ Verifica qué llega aquí

      // Si carrito ya es un objeto, no hagas JSON.parse
      if (typeof carrito === "string") {
        carrito = JSON.parse(carrito);
      }

      ////////////////////

      let UserId = localStorage.getItem("UserId");

      getUnidades(UserId, function (NumCarrito) {
        //////////////////

        //let NumCarrito = localStorage.getItem("NumCarrito"); // AQUI API
        //if (!NumCarrito) {

        if (Number(NumCarrito) === 0) {
          if (Talla === "") {
            ErrorHolder = document.getElementById("ErrorHolder");

            divError = document.createElement("div");
            divError.classList.add("FrameError");
            imgError = document.createElement("img");
            imgError.classList.add("errorImg");
            imgError.src = "ERROR.png";
            Mensaje = document.createElement("h3");
            Mensaje.textContent = "Error: Selecciona tu talla";
            imgCruz = document.createElement("imgCruz");
            imgCruz.classList.add("Cruz");
            imgCruz.src = "CRUZ.png";

            divError.style.display = "relative";

            divError.appendChild(imgError);
            divError.appendChild(Mensaje);
            divError.appendChild(imgCruz);

            ErrorHolder.appendChild(divError);

            setTimeout(function () {
              let existingError = document.querySelector(".FrameError");
              if (existingError) {
                existingError.remove();
              }
            }, 2000);
          } else {
            ErrorHolder = document.getElementById("ErrorHolder");

            divAgregado = document.createElement("div");
            divAgregado.classList.add("FrameAgregado");
            imgAgregado = document.createElement("img");
            imgAgregado.classList.add("agregadoImg");
            imgAgregado.src = "check.png";
            Mensaje = document.createElement("h3");
            Mensaje.textContent = "Agregado al carrito";

            divAgregado.style.display = "flex";

            divAgregado.appendChild(imgAgregado);
            divAgregado.appendChild(Mensaje);

            ErrorHolder.appendChild(divAgregado);

            setTimeout(function () {
              let existingAgg = document.querySelector(".FrameAgregado");
              if (existingAgg) {
                existingAgg.remove();
              }
            }, 2000);

            const producto = carrito.find(
              (item) => item.nombre === nombre && item.talla === Talla,
            );

            if (producto) {
              producto.cantidad += 1;
            } else {
              carrito.push({
                nombre: nombre,
                precio: precio,
                talla: Talla,
                cantidad: 1,
                imagen: espalda,
              });
            }

            //localStorage.setItem("Carrito", JSON.stringify(carrito));

            let userId = localStorage.getItem("UserId");
            mandarCarrito(userId, JSON.stringify(carrito));
            //console.log(localStorage.getItem("Carrito"));

            mandarUnidades(userId, 1);

            //localStorage.setItem("NumCarrito", 1);
            document.getElementById("Carrito").src = "carrito_bola.png";
            document.getElementById("NumeroCarrito").textContent = 1;
          }

          // api aqui
        } else {
          // api aqui

          if (Talla === "") {
            ErrorHolder = document.getElementById("ErrorHolder");

            divError = document.createElement("div");
            divError.classList.add("FrameError");
            imgError = document.createElement("img");
            imgError.classList.add("errorImg");
            imgError.src = "ERROR.png";
            Mensaje = document.createElement("h3");
            Mensaje.textContent = "Error: Selecciona tu talla";
            imgCruz = document.createElement("imgCruz");
            imgCruz.classList.add("Cruz");
            imgCruz.src = "CRUZ.png";

            divError.style.display = "flex";

            divError.appendChild(imgError);
            divError.appendChild(Mensaje);
            divError.appendChild(imgCruz);

            ErrorHolder.appendChild(divError);

            setTimeout(function () {
              let existingError = document.querySelector(".FrameError");
              if (existingError) {
                existingError.remove();
              }
            }, 2000);
          } else {
            ErrorHolder = document.getElementById("ErrorHolder");

            divAgregado = document.createElement("div");
            divAgregado.classList.add("FrameAgregado");
            imgAgregado = document.createElement("img");
            imgAgregado.classList.add("agregadoImg");
            imgAgregado.src = "check.png";
            Mensaje = document.createElement("h3");
            Mensaje.textContent = "Agregado al carrito";

            divAgregado.style.display = "flex";

            divAgregado.appendChild(imgAgregado);
            divAgregado.appendChild(Mensaje);

            ErrorHolder.appendChild(divAgregado);

            setTimeout(function () {
              let existingAgg = document.querySelector(".FrameAgregado");
              if (existingAgg) {
                existingAgg.remove();
              }
            }, 2000);

            const producto = carrito.find(
              (item) => item.nombre === nombre && item.talla === Talla,
            );

            if (producto) {
              producto.cantidad += 1;
            } else {
              carrito.push({
                nombre: nombre,
                precio: precio,
                talla: Talla,
                cantidad: 1,
                imagen: espalda,
              });
            }

            //localStorage.setItem("Carrito", JSON.stringify(carrito));

            let userId = localStorage.getItem("UserId");
            mandarCarrito(userId, JSON.stringify(carrito));

            //getCarrito();

            //console.log(localStorage.getItem("Carrito"));

            let NuevoCarritoNum = Number(NumCarrito) + 1;

            mandarUnidades(userId, NuevoCarritoNum);

            document.getElementById("Carrito").src = "carrito_bola.png";
            //localStorage.setItem("NumCarrito", NuevoCarritoNum);
            document.getElementById("NumeroCarrito").textContent =
              NuevoCarritoNum;
          }
        }

        //////////////////
      });

      ////////////////////

      //console.log(carrito);
    });

    //console.log(getCarrito(userId));

    //console.log(carritoLocal)
  });
};

// Agregar playeras
AñadirPlayera(
  "FERRARI RACING",
  "$500",
  "ferrv-3731a432ef5bf9448b17300220912559-1024-1024.webp",
  "ferrvf-4514b920a9a8fc7ae617300220906766-1024-1024.webp",
);
AñadirPlayera(
  "MOTOR SPORT",
  "$500",
  "white-back-cb6ea57eaebb8c383217283803264994-1024-1024.webp",
  "white-front-c0781917adc656079917283803290261-1024-1024.webp",
);
AñadirPlayera(
  "MCLAREN F1",
  "$500",
  "mc2-349727e1c45142e99517300232886802-1024-1024.webp",
  "mc23f-bd9a3e68b4c843f8e517300232820694-1024-1024.webp",
);
AñadirPlayera(
  "MERCEDES F1",
  "$500",
  "mercdes-832adf5180ddad05d317300220409930-1024-1024.webp",
  "mercedf-3aeb16d6e3babe8e4917300220398676-1024-1024.webp",
);
AñadirPlayera(
  "FERRARI RACING",
  "$500",
  "ferrv-3731a432ef5bf9448b17300220912559-1024-1024.webp",
  "ferrvf-4514b920a9a8fc7ae617300220906766-1024-1024.webp",
);
AñadirPlayera(
  "MOTOR SPORT",
  "$500",
  "white-back-cb6ea57eaebb8c383217283803264994-1024-1024.webp",
  "white-front-c0781917adc656079917283803290261-1024-1024.webp",
);
AñadirPlayera(
  "MCLAREN F1",
  "$500",
  "mc2-349727e1c45142e99517300232886802-1024-1024.webp",
  "mc23f-bd9a3e68b4c843f8e517300232820694-1024-1024.webp",
);
AñadirPlayera(
  "MERCEDES F1",
  "$500",
  "mercdes-832adf5180ddad05d317300220409930-1024-1024.webp",
  "mercedf-3aeb16d6e3babe8e4917300220398676-1024-1024.webp",
);

aplicarInicio();
