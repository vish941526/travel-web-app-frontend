import React from 'react'
import './HotelCard.css'
export const HotelCard = ({hotels}) => {
    const { image,state,price,rating,name,city}  = hotels;
    return (
        <div className="hotelCard-container shadow cursor-pointer ">
            <div>
                <img className="img" src={image} alt={name} />
                <div className="hotelcard-details">
                    <div className='d-flex align-center'>
                        <span className="location">{city.slice(0,6)},{state} </span>
                        <span className="rating d-flex align-center">
                            <span className="material-symbols-outlined">star</span>
                            <span>{rating}</span>
                        </span>
                    </div>
                    <p className="hotelname">{name}</p>
                    <p className="price-details">
                        <span className="price">Rs: {price}</span>
                        <span>Night</span>
                    </p>
                </div>
            </div>
            <button className=" button btn-wishlist  d-flex align-center">
                <span className="material-symbols-outlined favorite cursor">favorite</span>
            </button>

        </div>
    )
}