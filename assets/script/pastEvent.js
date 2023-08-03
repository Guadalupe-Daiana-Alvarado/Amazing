let containerCardPast
 = document.getElementById("containerCardPast")
console.log(containerCardPast);
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
            <a href="../page/details.html" class="btn btn-primary">Details</a>
          </div>
        </div>`

}

function pintCard (eventsPast, container){
  for (const dato of eventsPast) {
    
    let templete = createCard(dato)
    container.innerHTML += templete
  }
  
}
pintCard(eventsPast, containerCardPast)