
let $containerCard = document.getElementById("containerCard")
//console.log($containerCard);
//console.log(data);

let dataEvents = data.events
let curren = data.currentDate
//console.log(typeof dataEvents);
//console.log(dataEvents);
//console.log(typeof curren);

//------------------------------//CREANDO CARDS//------------------------------//
function createCard (evento){
        return ` 
        <div class="card " style="width: 18rem;">
          <img src="${evento.image}" class="card-img-top  " alt="Image-card">
          <div class="card-body">
            <h3>${evento.name}</h3>
            <p>${evento.description}</p>
          </div>
          <div class="d-flex justify-content-around align-items-center pb-3">
            <h4>Price: $${evento.price}</h4>
            <a href="./assets/page/details.html?details=${evento._id}"" class="btn btn-danger">Details</a>
          </div>
        </div>`
}

//------------------------------//PINTANDO CARDS//------------------------------//
function pintCard(dataEvents, container) {
    for (const dato of dataEvents) {
    let = template = createCard(dato);
    container.innerHTML += template;
    }}
pintCard(dataEvents, $containerCard)

//------------------------------//FILTRANDO LAS CATEGORIAS//------------------------------//
let $containerCheck = document.getElementById("div-check")

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

//------------------------------//CREANDO CHECK//------------------------------//
function createCheck (category){
  return `<div class="form-check pe-3">
  <input class="form-check-input" type="checkbox" value="${category}" name="${category}" id="${category}">
  <label class="form-check-label" for="${category}">${category}</label> 
  </div> `
}

//------------------------------//PINTANDO CHECK//------------------------------//
function pintCheck (category, container){
  for (const dato of category) {
    let templete = createCheck(dato)
    container.innerHTML += templete
    
  }}
pintCheck( categorySinRepeating, $containerCheck);

//------------------------------//FILTRANDO//------------------------------//
function filtrarEventos(dataEvents, category) { // FILTRO CHECK
  if (category.length === 0) {
    return dataEvents;
  }else
  return dataEvents.filter(evento => category.includes(evento.category));
}

function filtrarPorNombre (dataEvents, busqueda){ //FILTRO SERCH
   filtradaxNombre = dataEvents.filter( evento => evento.name.toLowerCase().includes(busqueda.toLowerCase()))
   //console.log(filtradaxNombre);
   return filtradaxNombre
}

function dobleFiltro() { //FILTRO DOBLE
  const categoriasSeleccionadas = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(check => check.value);
  let filtrarPorBusqueda = filtrarPorNombre(dataEvents, $search.value);
  
  if (dataEvents.length === 0) {
    $containerCard.innerHTML = ""; // Limpiar los resultados anteriores
    $containerCard.innerHTML = `<img style="width: 45vh;" src="./assets/image/Ops.png" alt="Error">`;
    //console.log($containerCard);
  } else if ($search.value && filtrarPorBusqueda.length === 0) {
    $containerCard.innerHTML = ""; // Limpiar los resultados anteriores
    $containerCard.innerHTML =  `<img  style="width: 45vh;"  src="./assets/image/Ops.png" alt="Error">`;
    //console.log($containerCard);
  } else {
    let filtrarCheck = filtrarEventos(filtrarPorBusqueda, categoriasSeleccionadas);
    $containerCard.innerHTML = filtrarCheck.map(evento => createCard(evento));
  }}

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