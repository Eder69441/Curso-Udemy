// function iniciarReloj() {
//     setInterval(reloj, 1000)
//     fecha()
// }


// function reloj() {
//     let horaActual = new Date()
//     let hora = String(horaActual.getHours()).padStart(2, "0")
//     let minutos = String(horaActual.getMinutes()).padStart(2, "0")
//     let segundos = String(horaActual.getSeconds()).padStart(2, "0")
//     let meridiano = hora >= 12 ? "pm" : "am"
//     hora = hora % 12
//     hora = hora === 0 ? 12 : hora  // Para que 0 sea 12

//     hora = String(hora).padStart(2, "0")
//     let horaReloj = `${hora}:${minutos}:${segundos} ${meridiano}` 
    
    
//     const Reloj = document.querySelector('h1').textContent = horaReloj
// }

// function fecha(){
//     let fechaActual = new Date()

//     let dia = fechaActual.toLocaleDateString('es-ES', {
//         day: "2-digit",
//         month: "2-digit",
//         year: "numeric",
//     })
    
//     let fechaTitulo = document.getElementById('fecha').textContent = dia
    
// }



function recargar() {
    let segundos = 30
   let intervalo = setInterval( () => {
    segundos--
     let tiempoRestante = document.querySelector('h1')
    
  
    if(segundos <= 0) {
        tiempoRestante.textContent = "Tiempo agotado"
        tiempoRestante.style.color = 'red'
        
    } else{
       tiempoRestante.textContent = `Tiempo restante: ${segundos}`;
    }
    
   }, 1000)
    
    
  

}



 