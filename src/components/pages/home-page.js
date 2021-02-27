import React from 'react'
import CarList from "../car-list/car-list";
import '../../components/car-list/car-list.css'

const HomePage = () => {
    return(
        <div className="home-page-wrapper">
            <div className="home-page">
                <CarList/>
            </div>
        </div>
    )

}
export default HomePage;
