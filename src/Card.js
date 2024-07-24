import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

function Card(props){
    return(
      <div className='card'>
        <img className='card-img' src ={`${props.imageUrl}`}></img>
        <div className='card-content'>
          <p className='card-content-location'><FontAwesomeIcon icon={faLocationDot} className="card-location-icon" />{props.location.toUpperCase()} <a href={`${props.googleMapsUrl}`} >View on Google Maps</a></p>
          <h1 className='card-content-title'>{props.title}</h1>
          <p className='card-content-duration'>{props.startDate} - {props.endDate}</p>
          <p className='card-content-description'>{props.description}</p>
        </div>

      </div>
    )
}

export default Card;