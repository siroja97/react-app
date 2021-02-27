import React from 'react'
import CarDetails from '../car-details'

const CarPage = ({carId}) => {
    return (
        <div className="home-page-wrapper">
            <div className="home-page">
                <CarDetails carId={carId}/>
            </div>
        </div>
    )
}
export default CarPage;
