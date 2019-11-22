import React from 'react';

export const NavigationBar = () => (
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
  <div class="container">
    <a class="navbar-brand js-scroll-trigger" href="#">Cruise Buddy</a>
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">

      <i class="fas fa-bars"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav text-uppercase ml-auto">
        <li class="nav-item">
          <a class="nav-link js-scroll-trigger" >FIND A CRUISE</a>
        </li>
        <li class="nav-item">
          <a class="nav-link js-scroll-trigger" href="#">LOGIN/REGISTER</a>
         </li>
        <li class="nav-item">
          <a class="nav-link js-scroll-trigger" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link js-scroll-trigger" href="#">Team</a>
        </li> 
        <li class="nav-item">
          <a class="nav-link js-scroll-trigger" href="#">Write a Review</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  
  
  
 
  

)