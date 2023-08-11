let datos = data.events._id
console.log(datos);
let date = data.events
console.log(date);

const param = location.search
console.log(param);

const objUrl = new URLSearchParams (param)
console.log(objUrl);

const idEvent = objUrl.get('details')
console.log(idEvent);

const objEvent = date.find( objetEvent => objetEvent._id === idEvent)
console.log(objEvent);

const $containerDetail = document.getElementById("containerDetail")
console.log($containerDetail);



function createCard (objeto){
    return `       
    <div class="d-flex justify-content-center align-items-center w-30 col-sm-5">
    <figure class="figure">
      <img src="${objeto.image}" id="img-detail" class="figure-img img-fluid rounded " alt="Image-Card">
    </figure>
    </div>
  <div class="col-sm-5">
    <div  id="textCardDetail" class="card ">
      <div class="card-body mh-100">
        <h5 class="card-title">${objeto.name}</h5>
        <p class="card-text">Category: ${objeto.category}</p>
        <p class="card-text">Date: ${objeto.date}</p>
        <p class="card-text">Description: ${objeto.description}</p>
        <p class="card-text">Capacity: ${objeto.capacity}</p>
        <p class="card-text">Estimate: ${objeto.estimate}</p>
        <p class="card-text">Price:${objeto.price}</p>
        <a href="../../index.html" class="btn btn-danger"> Back</a>
      </div>
    </div>
  </div> `
}

const cardDetail = createCard(objEvent)

function printCardDetail (container, card ){
    container.innerHTML = card
}
printCardDetail(containerDetail, cardDetail)