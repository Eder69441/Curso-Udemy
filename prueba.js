fetch("http://localhost:3000/peliculas")
  .then(res => res.json())
  .then(data => {

    console.log("Películas:", data)

    const lista = document.getElementById("listaPeliculas")

    data.forEach(pelicula => {

      const li = document.createElement("li")

      li.textContent =
        `Titulo: ${pelicula.titulo} - Director: ${pelicula.director} - Año: ${pelicula.anio} - Genero: ${pelicula.genero}`

      lista.appendChild(li)

    })

  })
  .catch(err => console.error("Error:", err))