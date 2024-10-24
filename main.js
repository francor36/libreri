import { Libro } from "./libro.js";
import { Biblioteca } from "./biblioteca.js";


const miBiblioteca = new Biblioteca("Rivadavia");
const abrirmenu = document.getElementById("show_new") //declaramos un bton abrirmenu, con el id show_new

abrirmenu.addEventListener("click", mostrar)  //le agregamos un evento al hacer click hace uso de la funcion mostrar

function mostrar() { //funcion mostrar
  const modal = document.querySelector(".modal") //seleccionamos todo el formulario con la clase modaal.
  const ocultarM = document.querySelector(".main_content") //selecciomos el main cont el cual contienen el menu
  modal.classList.remove("oculto"); //removemos o quitamos la clase oculto
  modal.children[0].classList.remove("oculto"); //removemos dentro del arreglo la clase oculto 
  ocultarM.classList.add("deshabilitado") //con la variable ocultarM le añadimos la case deshabilitado
}
const btnNewLibro = document.getElementById("nuevo")
btnNewLibro.addEventListener("click", agregamosL)
const selectLibros = document.getElementById("libro_a_prestar");

function agregamosL() {
  let nuevoLibro = new Libro();
  const titulo = document.getElementById("titulo").value;
  const autor = document.getElementById("autor").value;
  const genero = document.getElementById("genero").value;
  const ISBN = document.getElementById("ISBN").value;
  const cantPagina = document.getElementById("cant_pag").value;
  if (titulo != "" && autor != "" && genero != "" && ISBN != "" && cantPagina != "") {
    nuevoLibro.titulo = titulo
    nuevoLibro.autor = autor
    nuevoLibro.genero = genero
    nuevoLibro.ISBN = ISBN
    nuevoLibro.cantPagina = cantPagina
    miBiblioteca.addNewBook(nuevoLibro)
    alert("Se agrego el libro")

  }
  const option = document.createElement("option");
  option.value = nuevoLibro.titulo;
  option.text = nuevoLibro.titulo;
  selectLibros.appendChild(option)

  const modal = document.querySelector(".modal") //seleccionamos todo el formulario con la clase modaal.
  const ocultarM = document.querySelector(".main_content") //selecciomos el main cont el cual contienen el menu
  modal.classList.add("oculto"); //removemos o quitamos la clase oculto
  modal.children[0].classList.add("oculto"); //removemos dentro del arreglo la clase oculto 
  ocultarM.classList.remove("deshabilitado")//se quita el deshabilitado de la clase

  const lista = document.getElementById("lista-libros"); //obtengo  el elemento con el id lista-libros

  const libroHTML = ` 
  <li>
    <strong>Título:</strong> ${nuevoLibro.titulo} <br>
    <strong>Autor:</strong> ${nuevoLibro.autor} <br>
    <strong>Género:</strong> ${nuevoLibro.genero} <br>
    <strong>ISBN:</strong> ${nuevoLibro.ISBN} <br>
    <strong>Páginas:</strong> ${nuevoLibro.cantPagina}
  </li>
`; //creo  un string con el contenido del libro uno por uno
  //cuando se dice nuevoLibro.titulo estoy usando el set
  lista.innerHTML += libroHTML; //agrego el contenido del libro al elemento con el id lista

}

const prestar = document.getElementById("show_lend");
prestar.addEventListener("click", pre) //al hacer click llama a la funcion  pre
function pre() { //funcion mostrar
  const modal = document.querySelector(".modal") //seleccionamos todo el formulario con la clase modaal.
  const ocultarM = document.querySelector(".main_content") //selecciomos el main cont el cual contienen el menu
  modal.classList.remove("oculto"); //removemos o quitamos la clase oculto
  modal.children[1].classList.remove("oculto"); //removemos dentro del arreglo la clase oculto 
  //con la variable ocultarM le añadimos la case deshabilitado


}