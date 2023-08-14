let $containerCardPast = document.getElementById("containerCardPast")
//console.log($containerCardPast);
let curren = data.currentDate
//console.log(curren);
let dataEvents = data.events
//console.log(dataEvents);
//------------------------------//FILTRANDO LAS CARDS PASADAS//------------------------------//
function filter (dataEvents){
    let dataEventsPast =[]
    for (const event of dataEvents) {
        if (event.date < curren){
             dataEventsPast.push(event)
        }
    }
    return dataEventsPast
}

let eventsPast = filter(dataEvents)
//console.log(eventsPast);

//------------------------------//FILTRANDO LAS CATEGORIAS//------------------------------//

function filterCaterogory (dataEvents){
  let categoryRepeated =[]
  for (const event of dataEvents) {
      categoryRepeated.push(event.category)
  }
return categoryRepeated
}

let categoryRepeated = filterCaterogory(dataEvents)
//console.log(categoryRepeated);
const categorySinRepeating = [... new Set(categoryRepeated)];
//console.log(categorySinRepeating);

//------------------------------//CREANDO CARDS//------------------------------//
function createCard (evento){
        return ` 
        <div class="card" style="width: 18rem;">
          <img src="${evento.image}" class="card-img-top" alt="Image-card">
          <div class="card-body">
            <h3>${evento.name}</h3>
            <p>${evento.description}</p>
          </div>
          <div class="d-flex justify-content-around align-items-center pb-3">
            <h4>Price: $ ${evento.price}</h4>
            <a href="../page/details.html?details=${evento._id}" class="btn btn-danger">Details</a>
          </div>
        </div>`
}

//------------------------------//PINTANDO CARDS//------------------------------//
function pintCard (eventsPast, container){
  for (const dato of eventsPast) {
    let templete = createCard(dato)
    container.innerHTML += templete
  }}
pintCard(eventsPast, $containerCardPast)

//------------------------------//CREANDO CHECK//------------------------------//
let $containerCheck = document.getElementById("div-check") 
function createCheck (category){
  return `<div class="form-check pe-3">
  <input class="form-check-input" type="checkbox" value="${category}" name="${category}" id="${category}">
  <label class="form-check-label" for="${category}">${category}</label>  
  </div>`
}

//------------------------------//PINTANDO CARDS//------------------------------//
function pintCheck (category, container){
  for (const dato of category) {
    let templete = createCheck(dato)
    container.innerHTML += templete
   }}
pintCheck( categorySinRepeating, $containerCheck)

//------------------------------//ESCUCHANDO//------------------------------//
let $check = document.getElementById("div-check") //ESCUCHANDO CHECK
$check.addEventListener  ('change', ( ) => {
  dobleFiltro ()
})

const $search = document.getElementById ('search') //ESCUCHANDO SERCH
//console.log($search);
$search.addEventListener ('input', () => {
  dobleFiltro ()
})

//------------------------------//FILTRANDO//------------------------------//
function filtrarEventos(eventsPast, category) { // FILTRO CHECK
  if (category.length === 0) {
    return eventsPast;
  }
  return eventsPast.filter(evento => category.includes(evento.category));
}

function filtrarPorNombre (eventsPast, busqueda){ //FILTRO SERCH
  filtradaxNombre = eventsPast.filter( evento => evento.name.toLowerCase().includes(busqueda.toLowerCase()))
  //console.log(filtradaxNombre);
  return filtradaxNombre
}

function dobleFiltro() {                       //FILTRO DOBLE
  const categoriasSeleccionadas = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(check => check.value);
  let filtrarPorBusqueda = filtrarPorNombre(eventsPast, $search.value);
  
  if (eventsPast.length === 0) {
    containerCardPast.innerHTML = ""; // Limpiar los resultados anteriores
    containerCardPast.innerHTML = `<img style="width: 45vh;" src="../image/Ops.png"  alt="Error">`; //Mensaje amigaleble
  } else if ($search.value && filtrarPorBusqueda.length === 0) {
    containerCardPast.innerHTML = ""; // Limpiar los resultados anteriores
    containerCardPast.innerHTML =  `<img  style="width: 45vh;"  src="../image/Ops.png"  alt="Error">`; //Mensaje amigaleble
  } else {
    let cruzandoFiltros = filtrarEventos(filtrarPorBusqueda, categoriasSeleccionadas);
    containerCardPast.innerHTML = cruzandoFiltros.map(evento => createCard(evento));
  }}