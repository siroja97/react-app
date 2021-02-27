import React from 'react'
import './car-list-item.css'
import {Link} from 'react-router-dom'

const CarListItem = ({car}) => {
    const {model,price,imageLink,carId} = car
    return(
        <li className='car'>
            <img className='car-img' src={imageLink} alt=''/>
            <div className='car-name-wrapper'>
                <div className='car-name-wrapper-left'>
                    <span className='car-name'>Model: {model}</span>
                    <span className='car-name'>Price: {price}</span>
                </div>
                <Link to={{
                    pathname: '/car/'+carId,
                }} className='show-more-details'>Show more details</Link>
            </div>
        </li>
    )
}
export default CarListItem
