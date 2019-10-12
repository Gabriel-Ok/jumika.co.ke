import React from 'react';

function Menubar(){
    return(

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/Services">services</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/Aboutus">about us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/Contactus">contact us</a>
              </li>

            </ul>
            <nav  class="navbar">
              <li class="nav-item">
                <a class="nav-link" href="#">register(icon)</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">log in(icon)</a>
              </li>
            </nav>
          </div>
        </nav>


    );
}
 export default Menubar;
