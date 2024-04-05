
  function getting(require)
  {     
     
    var product=JSON.parse(productData);
    var var2='';
     var b = (require === 'Available' ? `<button class="btn btn-primary mb-2">Checkout</button>` : (require === 'Upcoming' ? '<button class="btn btn-warning mb-2">comingsoon..</button>' : '<button class="btn btn-danger mb-2">Out Of Stock</button>'))
    product.map((element)=>{

      // Rating stars
      let r='';       
         for(let i=1;i<=5;i++)
         {
           if(i<=element.Rating)
            { 
             r=r+`<span class="fa fa-star checked" id="star"></span>`
            }
            else
            {
              r=r+`<span class="fa fa-star " id="star"></span>`
            }
         }
           
      if(require===element.status)
     
           var2=var2+`<div class="swiper-slide text-center mt-5" style="width: 18rem;">
                        <div class="card border-0">
                            <div class="col">
                                <img src="${element.img}"  class="card-img-top " style="height: 270px; width: 270px;" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${element.name}</h5>
                                    <div class="d-flex justify-content-around">
                                    <h6 class="card-text   "> Price:₹${element.price}</h6>
                                    <p><span class=" ext-secondary-emphasis text-decoration-line-through">₹${element.originalprice}</span>  <span class="card-text  text-success text-center">${element.discount}%off</span></p>
                                    </div>                            
                                  <p class="card-text">${r}</p>
                                  <p ">${b}</p>
                                </div>
                            </div>
                        </div>
                      </div>`                 
                    
    });
    
    document.getElementById("result").innerHTML= var2;
 
    
        
    if(require==="Available")
    {  
     document.getElementById("nav1").style .textDecoration= "underline";
     document.getElementById("nav2").style.textDecoration="";
     document.getElementById("nav3").style.textDecoration="";
      
     
    }
    else
    {
      if(require==="Upcoming")
      {
        document.getElementById("nav1").style.textDecoration="";
        document.getElementById("nav2").style.textDecoration= "underline";
        document.getElementById("nav3").style.textDecoration="";
      
       

      }
      else
      {
        if(require==="Missed")
        {

        document.getElementById("nav1").style.textDecoration="";
        document.getElementById("nav2").style.textDecoration="";
        document.getElementById("nav3").style.textDecoration= "underline";
        

        }
      }
    }
    swiper.update();
 
   // Swiper move to first slide
   swiper.slideTo(0)

  } 


 
 
