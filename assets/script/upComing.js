
let containerCardUp = document.getElementById("containerCardUp")
console.log(containerCardUp);
let curren = data.currentDate
console.log(curren);
let dataEvents = data.events
console.log(dataEvents);


function filter (dataEvents){
    let dataEventsUp =[]
    for (const event of dataEvents) {
        if (event.date > curren){
             dataEventsUp.push(event)
        }
    }
    return dataEventsUp
}
let eventsUp = filter(dataEvents)
console.log(eventsUp);

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
            <a href="./assets/page/details.html" class="btn btn-primary">Details</a>
          </div>
        </div>`
 }

function pintCard (eventsUp, container){
  console.log(eventsUp);
  for (const dato of eventsUp) {
    
    let templete = createCard(dato)
    container.innerHTML += templete
  }
  
}
pintCard(eventsUp, containerCardUp)