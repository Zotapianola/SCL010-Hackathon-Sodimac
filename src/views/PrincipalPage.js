import React from 'react';
import {Link} from "react-router-dom";
import CarouselOfImages from '../components/CarouselOfImages';
import Cards from '../components/Cards';
import './PrincipalPage.css'

// vista incial, donde se va a crear el juego
const PrincipalPage  = () => {

  return (
    <div id="outer-section">
    <h1> estoy en la pagina principal</h1>
    <Link to="/Login">
            <button className="btnSignIn" >regresar</button>
    </Link>
    <div class="col-md-10">
    <CarouselOfImages/>
    </div>

    <div class="col-md-3">
    <Cards/>
    </div>
    </div>   
  );
};

export default PrincipalPage;