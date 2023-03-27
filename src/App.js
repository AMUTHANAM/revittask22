import logo from './logo.svg';
import './App.css';

const CDETAILS = [{  poster: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/515JIgzyzRL._AC_UL1010_.jpg ",
item: "Fancy product ",
rating : "⭐⭐⭐⭐⭐ ",
price: "$40.00 - $80.00 ",
card: "view options "


},{poster: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/515JIgzyzRL._AC_UL1010_.jpg ",
item: "Special item ",
rating : "⭐⭐⭐⭐⭐ ",
price: "$20.00 - $18.00 ",
card: "Add to card "
},{
  poster: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/515JIgzyzRL._AC_UL1010_.jpg ",
item: "Special item ",
rating : "⭐⭐⭐⭐⭐ ",
price: "$50.00 - $25.00 ",
card: "Add to card "
},{
  poster: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/515JIgzyzRL._AC_UL1010_.jpg ",
item: "popular item ",
rating : "⭐⭐⭐⭐⭐ ",
price: "$40.00 ",
card: "Add to card "
},{
  poster: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/515JIgzyzRL._AC_UL1010_.jpg ",
item: "sale item ",
rating : "⭐⭐⭐⭐⭐ ",
price: "$50.00 - $25.00 ",
card: "Add to card "
},{
  poster: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/515JIgzyzRL._AC_UL1010_.jpg ",
item: "Fancy product ",
rating : "⭐⭐⭐⭐⭐ ",
price: "$120.00 - $280.00 ",
card: "view options "
},{
  poster: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/515JIgzyzRL._AC_UL1010_.jpg ",
item: "Special item ",
rating : "⭐⭐⭐⭐⭐ ",
price: "$20.00 - $18.00 ",
card: "Add to card "
},{
  poster: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/515JIgzyzRL._AC_UL1010_.jpg ",
item: "popular item ",
rating : "⭐⭐⭐⭐⭐ ",
price: "$40.00 ",
card: "Add to card "
}]

function App() {
  const detail = CDETAILS
  return (
    <div className="App">


<nav class="navbar navbar-expand-lg navbar-light bg-info">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">start Bootstrap</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                shop 
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
    <div class="shome">
      <h2>shop in style </h2>
     <img class="himg" src=" https://www.webibazaar.com/blog/wp-content/uploads/2021/02/1-Handi-Tool.jpg " /> 
    </div>

<div className="mcard" >
{detail.map((cl)=> (
<Card cdetail={cl}/>
   ))}
</div>
   

     
    </div>
  );
}

export default App;

function Card({cdetail}){



  const rating ={
    display: "block ",
  }

  return (

    <div>

<div className='card'>
<a href="#" class="btn "> sale</a>
  <img  src= {cdetail.poster} />
  <div class="card-body">
    <h5 class="card-title">{cdetail.item}</h5>
    <p  style={rating}     class="card-text">{cdetail.rating}</p>
    <p class="card-text"> {cdetail.price} </p>
    <a href="#" class="btn btn-primary"> {cdetail.card}</a>
  </div>
  </div>



    </div>

  )
}

