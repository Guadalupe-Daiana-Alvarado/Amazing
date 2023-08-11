let $containerCardPast = document.getElementById("containerCardPast")
console.log($containerCardPast);
let curren = data.currentDate
console.log(curren);
let dataEvents = data.events
console.log(dataEvents);


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
console.log(eventsPast);

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

function pintCard (eventsPast, container){
  for (const dato of eventsPast) {
    
    let templete = createCard(dato)
    container.innerHTML += templete
  }
  
}
pintCard(eventsPast, $containerCardPast)


let $containerCheck = document.getElementById("div-check")

function filterCaterogory (dataEvents){
  let categoryRepeated =[]
  for (const event of dataEvents) {

      categoryRepeated.push(event.category)
       
  }
return categoryRepeated

}

let categoryRepeated = filterCaterogory(dataEvents)
console.log(categoryRepeated);
const categorySinRepeating = [... new Set(categoryRepeated)];
console.log(categorySinRepeating);
 
function createCheck (category){
  return `<div class="form-check pe-3">
  <input class="form-check-input" type="checkbox" value="${category}" name="${category}" id="${category}">
  <label class="form-check-label" for="${category}">${category}</label>  
  </div>
`
}

function pintCheck (category, container){
  for (const dato of category) {
    let templete = createCheck(dato)
    container.innerHTML += templete
    
  }
}
pintCheck( categorySinRepeating, $containerCheck)

//------------------------------//ESCUCHANDO//------------------------------//

let $check = document.getElementById("div-check") //ESCUCHANDO CHECK
$check.addEventListener  ('change', ( ) => {
  dobleFiltro ()
})

function filtrarEventos(eventsPast, category) { // FILTRO CHECK
  if (category.length === 0) {
    return eventsPast;
  }
  return eventsPast.filter(evento => category.includes(evento.category));
}

const $search = document.getElementById ('search') //ESCUCHANDO SERCH
  console.log($search);
$search.addEventListener ('input', () => {
  dobleFiltro ()
  
})

function filtrarPorNombre (eventsPast, busqueda){ //FILTRO SERCH
  filtradaxNombre = eventsPast.filter( item => item.name.toLowerCase().includes(busqueda.toLowerCase()))
  console.log(filtradaxNombre);
  return filtradaxNombre
}

function dobleFiltro() { //FILTRO DOBLE

  const checkboxChecked = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(check => check.value);
  let filtrarPorBusqueda = filtrarPorNombre(eventsPast, $search.value);
  let filtrarCheck = filtrarEventos(filtrarPorBusqueda, checkboxChecked);

  $containerCardPast.innerHTML = filtrarCheck.map(evento => createCard(evento));
}