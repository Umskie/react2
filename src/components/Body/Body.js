const Body = () =>{
    return (<div>

<div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://images.pexels.com/photos/17900123/pexels-photo-17900123/free-photo-of-scenic-landscape-of-a-mountain-lake.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://images.pexels.com/photos/16401141/pexels-photo-16401141/free-photo-of-art-summer-pattern-texture.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://images.pexels.com/photos/13366399/pexels-photo-13366399.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> 

<div class="container">
  <div class="row">
    <div class="col-sm">
    <div class="card">
  <img class="card-img-top" src="https://images.pexels.com/photos/13203904/pexels-photo-13203904.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
    <div class="col-sm">
    <div class="card" >
  <img class="card-img-top" src="https://images.pexels.com/photos/17857033/pexels-photo-17857033/free-photo-of-lake-with-forest-and-mountains-behind.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
    <div class="col-sm">
    <div class="card">
  <img class="card-img-top" src="https://images.pexels.com/photos/18010619/pexels-photo-18010619/free-photo-of-close-up-of-a-fern-leaf.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
  </div>
</div>

    </div>)
}
export default Body