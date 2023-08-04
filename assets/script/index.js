
let containerCard = document.getElementById("containerCard")
console.log(containerCard);
console.log(data);

let dataEvents = data.events
let curren = data.currentDate
console.log(typeof dataEvents);
console.log(typeof curren);

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
            <a href="./assets/page/details.html" class="btn btn-danger">Details</a>
          </div>
        </div>`

}

function pintCard (dataEvents, container){
  for (const dato of dataEvents) {
    
    let templete = createCard(dato)
    container.innerHTML += templete
  }
  
}
pintCard(dataEvents, containerCard)
 

/* <div class="col g-3 ">
<div class="card" style="width: 18rem;">
  <img src="./assets/image/costume_party.jpg" class="card-img-top" alt="Image-card">
  <div class="card-body">
    <h3>Halloween Night</h3>
    <p>Come in your scariest costume character to win amazing prizes/p>
  </div>
  <div class="d-flex justify-content-around align-items-center pb-3">
    <h4>Price: $12 USD</h4>
    <a href="./assets/page/details.html" class="btn btn-primary">Details</a>
  </div>
</div>
</div>
 */