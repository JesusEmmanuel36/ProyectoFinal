 
AñadirPlayera = function(nombre, precio, espalda, frente){
    let Playeras = document.getElementById("Holder3playeras")
    let HolderPlayera = document.createElement("div")
    HolderPlayera.classList.add("HolderPlayera")
    let HolderInfo = document.createElement("div")
    HolderInfo.classList.add("HolderInfo")
    let Nombre = document.createElement("h3")
    Nombre.classList.add("Nombre")
    Nombre.textContent = nombre
    let Precio = document.createElement("h3")
    Precio.classList.add("Precio")
    Precio.textContent = precio

    let Icono = document.createElement("img")
    Icono.classList.add("Icono")
    Icono.src = "bolsita.png"
    Icono.alt = ""

    HolderInfo.appendChild(Nombre)
    HolderInfo.appendChild(Precio)
    HolderInfo.appendChild(Icono) 

    let Playera = document.createElement("img")
    Playera.classList.add("ImagenPlayera")
    Playera.id = "ImagenPlayera"
    Playera.src = espalda
    Playera.alt = ""

    Playera.addEventListener("mouseover", function() {
        this.src = frente;
      });

    Playera.addEventListener("mouseout", function() {
        this.src = espalda;  
      });

    HolderPlayera.appendChild(HolderInfo)
    HolderPlayera.appendChild(Playera)
    
    Playeras.appendChild(HolderPlayera)
}

 

AñadirPlayera("FERRARI RACING Tee", "$500", "ferrv-3731a432ef5bf9448b17300220912559-1024-1024.webp", "ferrvf-4514b920a9a8fc7ae617300220906766-1024-1024.webp")

AñadirPlayera("MOTOR SPORT Tee", "$500", "white-back-cb6ea57eaebb8c383217283803264994-1024-1024.webp", "white-front-c0781917adc656079917283803290261-1024-1024.webp")
 
AñadirPlayera("MCLAREN F1 Tee", "$500", "mc2-349727e1c45142e99517300232886802-1024-1024.webp", "mc23f-bd9a3e68b4c843f8e517300232820694-1024-1024.webp")
 
AñadirPlayera("MERCEDES HAMILTON Tee", "$500", "mercdes-832adf5180ddad05d317300220409930-1024-1024.webp", "mercedf-3aeb16d6e3babe8e4917300220398676-1024-1024.webp")


 