 
AñadirTitulo = function(){
    let div = document.getElementById("Title");
    div.classList.add("elPepe");
     
    let h1 = document.createElement("h1");
    h1.id = "Titulo";
    h1.textContent = "El pepe";
    
     div.appendChild(h1);
    
    // Agregar el div al body del documento
    document.body.appendChild(div);
    
} 


for (let i = 0; i < 5; i++) {
     AñadirTitulo()
  }